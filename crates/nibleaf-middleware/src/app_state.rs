//! Application state
//!
//! This module contains the shared application state that is passed to all handlers.

use std::sync::Arc;
use nibleaf_config::Config;
use nibleaf_error::AppError;
use nibleaf_biz::BizContext;
use nibleaf_storage::Storage;
use nibleaf_queue::JobQueue;

/// Application state shared across all handlers
#[derive(Clone)]
pub struct AppState {
    /// Application configuration
    pub config: Arc<Config>,
    /// Business context with database pool and access control
    pub biz_context: BizContext,
    /// Storage backend
    pub storage: Arc<dyn Storage>,
    /// Job queue
    pub job_queue: Arc<dyn JobQueue>,
    /// Search engine
    pub search_engine: Arc<dyn nibleaf_search::SearchEngine>,
}

impl AppState {
    /// Create AppState from full configuration
    pub async fn from_config(config: &Config) -> Result<Self, AppError> {
        let pool = nibleaf_db::create_pool(&config.database.url).await?;
        let storage_box = nibleaf_storage::create_storage(&config.storage)?;
        let storage: Arc<dyn Storage> = Arc::from(storage_box);
        let job_queue: Arc<dyn JobQueue> = Arc::new(nibleaf_queue::MemoryJobQueue::new(4));
        let search_engine = nibleaf_search::create_search_engine(&config.search).await?;
        let access_control = Arc::new(nibleaf_access_control::ProductionAccessControl::new(pool.clone()));
        let biz_context = BizContext::new(pool, access_control);

        Ok(Self {
            config: Arc::new(config.clone()),
            biz_context,
            storage,
            job_queue,
            search_engine,
        })
    }

    /// Create a new AppState with provided dependencies
    pub fn new(
        config: Config,
        biz_context: BizContext,
        storage: Arc<dyn Storage>,
        job_queue: Arc<dyn JobQueue>,
        search_engine: Arc<dyn nibleaf_search::SearchEngine>,
    ) -> Self {
        Self {
            config: Arc::new(config),
            biz_context,
            storage,
            job_queue,
            search_engine,
        }
    }

    /// Validate middleware configurations from config
    pub fn validate_config(_config: &Config) -> Result<(), AppError> {
        Ok(())
    }
}
