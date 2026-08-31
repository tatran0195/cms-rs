//! Nibleaf Server - Composition Root
//!
//! This is the main entry point for the nibleaf-server binary.
//! It composes all the crates together and starts the Axum HTTP server.

use axum::Router;
use nibleaf_api::api_router;
use nibleaf_config::Config;
use nibleaf_error::AppError;
use nibleaf_middleware::app_state::AppState;
use nibleaf_middleware::observability::init_tracing;
use nibleaf_sites::sites_router;
use std::net::SocketAddr;
use std::sync::Arc;
use tokio::net::TcpListener;
use tracing::{info, error};

#[tokio::main]
async fn main() -> Result<(), AppError> {
    // Initialize observability (logging, tracing, metrics)
    init_tracing();

    info!("Starting Nibleaf Server...");

    // Load configuration
    let config = Config::load()?;
    info!("Configuration loaded");

    // Build application state
    let state = Arc::new(AppState::from_config(&config).await?);
    info!("Application state initialized");

    // Initialize job queue consumers (in-memory backend runs in-process)
    let queue_consumer = state.job_queue.clone();
    tokio::spawn(async move {
        if let Err(e) = nibleaf_queue::start_consumers(queue_consumer).await {
            error!("Job queue consumer failed: {}", e);
        }
    });

    // Build the full router with all middleware
    let api_router = api_router(state.clone());
    let sites_router = sites_router(state.clone());
    
    let app = Router::new()
        .nest("/api", api_router)
        .nest("/", sites_router);

    // Bind to socket
    let addr = SocketAddr::from(([0, 0, 0, 0], config.server.port));
    info!("Listening on {}", addr);

    let listener = TcpListener::bind(addr).await.map_err(|e| AppError::Internal(e.into()))?;
    axum::serve(listener, app)
        .await
        .map_err(|e| AppError::Internal(e.into()))
}
