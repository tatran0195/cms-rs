//! CMS Server - Composition Root
//!
//! This is the main entry point for the cms-server binary.
//! It composes all the crates together and starts the Axum HTTP server.

use std::{net::SocketAddr, sync::Arc, time::Duration};

use axum::{http::StatusCode, Router};
use cms_api::api_router;
use cms_config::Config;
use cms_error::AppError;
use cms_middleware::{app_state::AppState, observability::init_tracing};
use cms_sites::sites_router;
use tokio::net::TcpListener;
use tracing::{error, info};

async fn shutdown_signal() {
    tokio::signal::ctrl_c()
        .await
        .expect("failed to install CTRL+C signal handler");
    tracing::info!("Received graceful shutdown signal. Starting shutdown...");
}

#[tokio::main]
async fn main() -> Result<(), AppError> {
    // Initialize observability (logging, tracing, metrics)
    init_tracing();

    info!("Starting CMS Server...");

    // Load configuration
    let config = Config::load()?;
    info!("Configuration loaded");

    // Build application state
    let state = Arc::new(AppState::from_config(&config).await?);
    info!("Application state initialized");

    // Initialize job queue consumers (in-memory backend runs in-process)
    let queue_consumer = state.job_queue.clone();
    tokio::spawn(async move {
        if let Err(e) = cms_queue::start_consumers(queue_consumer).await {
            error!("Job queue consumer failed: {}", e);
        }
    });

    // Build the full router with all middleware
    let api_router = api_router(state.clone());
    let sites_router = sites_router(state.clone());

    let app = Router::new()
        .nest("/api", api_router)
        .merge(sites_router)
        .layer(axum::Extension(state.clone()))
        .layer(tower_http::trace::TraceLayer::new_for_http())
        .layer(tower_http::compression::CompressionLayer::new())
        .layer(tower_http::cors::CorsLayer::permissive())
        .layer(tower_http::catch_panic::CatchPanicLayer::new())
        .layer(tower_http::timeout::TimeoutLayer::with_status_code(
            StatusCode::REQUEST_TIMEOUT,
            Duration::from_secs(30),
        ));

    // Bind to socket
    let addr = SocketAddr::from(([0, 0, 0, 0], config.server.port));
    info!("Listening on {}", addr);

    let listener = TcpListener::bind(addr)
        .await
        .map_err(|e| AppError::Internal(e.into()))?;

    axum::serve(listener, app)
        .with_graceful_shutdown(shutdown_signal())
        .await
        .map_err(|e| AppError::Internal(e.into()))
}
