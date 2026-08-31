//! Public API module
//!
//! This module contains handlers for public-facing routes.
//! These are unauthenticated endpoints for readers accessing published content.

use axum::{
    routing::get,
    Router,
};
use cms_middleware::app_state::AppState;
use std::sync::Arc;

pub mod handlers;

use handlers::*;

/// Create the public router
pub fn router(state: Arc<AppState>) -> Router {
    Router::new()
        .route("/projects/:org_slug/:project_slug", get(get_public_project_handler))
        .route("/pages/:org_slug/:project_slug/*page_path", get(get_public_page_handler))
        .route("/pages/:org_slug/:project_slug", get(list_public_pages_handler))
        .route("/search/:org_slug/:project_slug", get(search_public_content_handler))
        .route("/sitemap/:org_slug/:project_slug", get(get_project_sitemap_handler))
        .with_state(state)
}
