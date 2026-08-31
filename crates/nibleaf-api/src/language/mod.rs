//! Language API module
//!
//! This module contains handlers for language routes.

use axum::{
    routing::{get, post, put, delete},
    Router,
};
use nibleaf_middleware::app_state::AppState;
use std::sync::Arc;

pub mod handlers;

use handlers::*;
use crate::extractors::UserId;

/// Create the language router
pub fn router(state: Arc<AppState>) -> Router {
    Router::new()
        .route("/", get(list_languages_handler))
        .route("/", post(create_language_handler))
        .route("/:id", get(get_language_handler))
        .route("/:id", put(update_language_handler))
        .route("/:id", delete(delete_language_handler))
        .route("/:project_id/set-default", post(set_default_language_handler))
        .with_state(state)
}
