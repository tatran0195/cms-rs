//! CMS Worker
//!
//! This is the background job processing worker binary.
//! It consumes jobs from the configured queue backend (Redis or in-memory).
//!
//! Note: In the default deployment (in-memory queue), this binary is not
//! deployed separately. It's only used when the Redis backend is configured.
//!
//! See doc 06 for the worker architecture decision.

use std::sync::Arc;

use cms_config::Config;
use cms_error::AppError;
use cms_queue::create_job_queue;
use cms_worker::{app_state::WorkerState, start_consumers};
use tracing::info;

#[tokio::main]
async fn main() -> Result<(), AppError> {
    // Initialize logging
    tracing_subscriber::fmt()
        .with_env_filter("cms_worker=debug")
        .init();

    info!("Starting CMS Worker...");

    // Load configuration
    let config = Config::load()?;
    info!("Configuration loaded");

    // Create job queue before worker state (state needs a reference to it)
    let job_queue = create_job_queue(&config.queue).await?;

    // Build worker state (includes DB pool, storage, search, analytics, mailer)
    let state = Arc::new(WorkerState::new(&config, job_queue.clone()).await?);

    // Start job consumers
    info!("Starting job consumers...");
    start_consumers(job_queue, state).await?;

    // Keep the worker running until CTRL+C
    tokio::signal::ctrl_c()
        .await
        .map_err(|e| AppError::Internal(e.into()))?;

    info!("Worker shutting down...");

    Ok(())
}
