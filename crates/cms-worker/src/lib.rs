//! CMS Worker Library
//!
//! Background job processing worker implementation.
//! It consumes jobs from the configured queue backend (Redis or in-memory).

use std::sync::Arc;

pub use app_state::WorkerState;
use cms_error::AppError;
use cms_queue::JobQueue;
use tracing::{debug, error, info};

/// Start job consumers
pub async fn start_consumers(
    job_queue: Arc<dyn JobQueue>,
    state: Arc<WorkerState>,
) -> Result<(), AppError> {
    let config = &state.config.queue;
    let num_workers = config.workers;

    info!("Starting {} job consumer(s)", num_workers);

    for i in 0..num_workers {
        let queue = job_queue.clone();
        let state = state.clone();

        tokio::spawn(async move {
            let consumer_name = format!("worker-{}", i);
            if let Err(e) = run_consumer(queue, state, consumer_name).await {
                error!("Consumer {} failed: {}", i, e);
            }
        });
    }

    Ok(())
}

/// Run a single job consumer
pub async fn run_consumer(
    job_queue: Arc<dyn JobQueue>,
    state: Arc<WorkerState>,
    consumer_name: String,
) -> Result<(), AppError> {
    info!("Consumer {} started", consumer_name);

    loop {
        match job_queue.consume(&consumer_name).await {
            Ok(job) => {
                debug!(
                    "Consumer {} processing job: {:?}",
                    consumer_name, job.job_type
                );

                // Process the job
                if let Err(e) = process_job(&job, state.clone()).await {
                    error!("Failed to process job: {}", e);
                }

                // Mark job as completed
                job_queue.ack(&job.id).await.map_err(|e| {
                    error!("Failed to acknowledge job: {}", e);
                    AppError::Internal(e.into())
                })?;
            }
            Err(e) => {
                error!("Consumer {} error: {}", consumer_name, e);
                tokio::time::sleep(tokio::time::Duration::from_secs(1)).await;
            }
        }
    }
}

/// Process a single job
pub async fn process_job(
    job: &cms_queue::JobEnvelope,
    state: Arc<WorkerState>,
) -> Result<(), AppError> {
    use cms_queue::JobType;

    match job.job_type {
        JobType::Analytics => {
            cms_biz::analytics::process_analytics_job(&state.db, &job.payload).await
        }
        JobType::Email => {
            cms_biz::email::process_email_job(state.mailer.clone(), &job.payload).await
        }
        JobType::Export => {
            cms_biz::export::process_export_job(&state.db, state.storage.clone(), &job.payload)
                .await
        }
        JobType::Git => cms_biz::git::process_git_job(&state.db, &job.payload).await,
        JobType::Publish => {
            cms_biz::deployment::process_deployment_job(&state.db, &job.payload).await
        }
        JobType::Search => {
            cms_biz::search::process_search_job(&state.db, state.search.clone(), &job.payload).await
        }
        JobType::Usage => cms_biz::usage::process_usage_job(&state.db, &job.payload).await,
        JobType::Reaper => cms_biz::queue::process_reaper_job(&state.db, &job.payload).await,
    }
}

/// Worker application state
pub mod app_state {
    use std::sync::Arc;

    use cms_analytics::AnalyticsStore;
    use cms_biz::email::Mailer;
    use cms_config::Config;
    use cms_db::PgPool;
    use cms_error::AppError;
    use cms_search::SearchEngine;
    use cms_storage::Storage;

    #[derive(Clone)]
    pub struct WorkerState {
        pub config: Arc<Config>,
        pub db: PgPool,
        pub storage: Arc<dyn Storage>,
        pub search: Arc<dyn SearchEngine>,
        pub analytics: Arc<dyn AnalyticsStore>,
        pub mailer: Arc<dyn Mailer>,
    }

    impl WorkerState {
        pub async fn new(config: &Config) -> Result<Self, AppError> {
            // Create database pool
            let db = cms_db::create_pool(&config.database.url).await?;

            // Initialize storage backend
            let storage: Arc<dyn Storage> =
                cms_storage::create_storage(&config.storage).await?.into();

            // Initialize search engine
            let search = cms_search::create_search_engine(&config.search).await?;

            // Initialize analytics store
            let analytics = cms_analytics::create_analytics_store(&config.analytics).await?;

            // Create mailer
            let mailer = create_mailer(&config.mailer).await?;

            Ok(Self {
                config: Arc::new(config.clone()),
                db,
                storage,
                search,
                analytics,
                mailer,
            })
        }
    }

    /// Create a mailer based on configuration
    pub async fn create_mailer(
        _config: &Option<cms_config::MailerConfig>,
    ) -> Result<Arc<dyn Mailer>, AppError> {
        // For now, return a no-op mailer
        Ok(Arc::new(NoopMailer))
    }

    /// No-op mailer for testing
    pub struct NoopMailer;

    #[async_trait::async_trait]
    impl Mailer for NoopMailer {
        async fn send_email(&self, _to: &str, _subject: &str, _body: &str) -> Result<(), AppError> {
            Ok(())
        }
    }
}
