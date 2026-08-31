//! Nibleaf Worker
//!
//! This is the background job processing worker binary.
//! It consumes jobs from the configured queue backend (Redis or in-memory).
//!
//! Note: In the default deployment (in-memory queue), this binary is not
//! deployed separately. It's only used when the Redis backend is configured.
//!
//! See doc 06 for the worker architecture decision.

use nibleaf_config::Config;
use nibleaf_error::AppError;
use nibleaf_queue::{JobQueue, create_job_queue};
use std::sync::Arc;
use tracing::{info, error, debug};

use app_state::WorkerState;

#[tokio::main]
async fn main() -> Result<(), AppError> {
    // Initialize logging
    tracing_subscriber::fmt()
        .with_env_filter("nibleaf_worker=debug")
        .init();

    info!("Starting Nibleaf Worker...");

    // Load configuration
    let config = Config::load()?;
    info!("Configuration loaded");

    // Build worker state
    let state = Arc::new(WorkerState::new(&config).await?);

    // Create job queue
    let job_queue = create_job_queue(&config.queue).await?;

    // Start job consumers
    info!("Starting job consumers...");
    start_consumers(job_queue, state).await?;

    // Keep the worker running
    tokio::signal::ctrl_c().await.map_err(|e| AppError::Internal(e.into()))?;
    
    info!("Worker shutting down...");
    
    Ok(())
}

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
async fn run_consumer(
    job_queue: Arc<dyn JobQueue>,
    state: Arc<WorkerState>,
    consumer_name: String,
) -> Result<(), AppError> {
    info!("Consumer {} started", consumer_name);
    
    loop {
        match job_queue.consume(&consumer_name).await {
            Ok(job) => {
                debug!("Consumer {} processing job: {:?}", consumer_name, job.job_type);
                
                // Process the job
                if let Err(e) = process_job(&job, state.clone()).await {
                    error!("Failed to process job: {}", e);
                    
                    // Mark as failed with retry
                    // Would implement retry logic here
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
async fn process_job(
    job: &nibleaf_queue::JobEnvelope,
    state: Arc<WorkerState>,
) -> Result<(), AppError> {
    use nibleaf_queue::JobType;
    
    match job.job_type {
        JobType::Analytics => {
            nibleaf_biz::analytics::process_analytics_job(&state.db, &job.payload).await
        }
        JobType::Email => {
            nibleaf_biz::email::process_email_job(state.mailer.clone(), &job.payload).await
        }
        JobType::Export => {
            nibleaf_biz::export::process_export_job(&state.db, state.storage.clone(), &job.payload).await
        }
        JobType::Git => {
            nibleaf_biz::git::process_git_job(&state.db, &job.payload).await
        }
        JobType::Publish => {
            nibleaf_biz::deployment::process_deployment_job(&state.db, &job.payload).await
        }
        JobType::Search => {
            nibleaf_biz::search::process_search_job(&state.db, state.search.clone(), &job.payload).await
        }
        JobType::Usage => {
            nibleaf_biz::usage::process_usage_job(&state.db, &job.payload).await
        }
        JobType::Reaper => {
            nibleaf_biz::queue::process_reaper_job(&state.db, &job.payload).await
        }
    }
}

/// Worker application state
pub mod app_state {
    use nibleaf_config::Config;
    use nibleaf_db::PgPool;
    use nibleaf_search::SearchEngine;
    use nibleaf_storage::Storage;
    use nibleaf_analytics::AnalyticsStore;
    use nibleaf_error::AppError;
    use nibleaf_biz::email::Mailer;
    use std::sync::Arc;

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
            let db = nibleaf_db::create_pool(&config.database.url).await?;
            
            // Initialize storage backend
            let storage: Arc<dyn Storage> = nibleaf_storage::create_storage(&config.storage)?.into();
            
            // Initialize search engine
            let search = nibleaf_search::create_search_engine(&config.search).await?;
            
            // Initialize analytics store
            let analytics = nibleaf_analytics::create_analytics_store(&config.analytics).await?;
            
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
    pub async fn create_mailer(_config: &Option<nibleaf_config::MailerConfig>) -> Result<Arc<dyn Mailer>, AppError> {
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
