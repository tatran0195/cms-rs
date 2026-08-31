//! Page API module
//!
//! This module contains handlers for page routes.

use axum::{
    routing::{get, post, put, delete},
    Router,
};
use nibleaf_middleware::app_state::AppState;
use std::sync::Arc;

pub mod handlers;

use handlers::*;
use crate::extractors::UserId;

/// Create the page router
pub fn router(state: Arc<AppState>) -> Router {
    Router::new()
        .route("/", get(list_pages_handler))
        .route("/", post(create_page_handler))
        .route("/:id", get(get_page_handler))
        .route("/:id", put(update_page_handler))
        .route("/:id", delete(delete_page_handler))
        .with_state(state)
}
