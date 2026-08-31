//! Project API module
//!
//! This module contains handlers for project routes.

use std::sync::Arc;

use axum::{
    routing::{delete, get, post, put},
    Router,
};
use cms_middleware::app_state::AppState;

pub mod handlers;

use handlers::*;

use crate::extractors::UserId;

/// Create the project router
pub fn router(state: Arc<AppState>) -> Router {
    Router::new()
        .route("/", get(list_projects_handler))
        .route("/", post(create_project_handler))
        .route("/{id}", get(get_project_handler))
        .route("/{id}", put(update_project_handler))
        .route("/{id}", delete(delete_project_handler))
        // Settings routes
        .route("/{id}/settings", get(get_project_settings_handler))
        .route("/{id}/settings", put(update_project_settings_handler))
        // Addons routes
        .route("/{id}/addons", get(list_project_addons_handler))
        .with_state(state)
}
