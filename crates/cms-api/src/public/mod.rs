//! Public API module
//!
//! This module contains handlers for public-facing routes.
//! These are unauthenticated endpoints for readers accessing published content.

use std::sync::Arc;

use axum::{routing::get, Router};
use cms_middleware::app_state::AppState;

pub mod handlers;

use handlers::*;

/// Create the public router
pub fn router(state: Arc<AppState>) -> Router {
    use axum::routing::post;
    Router::new()
        .route("/meta", get(get_public_meta_handler))
        .route("/marketing-events", post(post_public_marketing_events_handler))
        .route("/invitations/{id}", get(get_public_invitation_handler))
        .route("/sites/{id}", get(get_public_site_handler))
        .route("/sites/{id}/page", get(get_public_site_page_handler))
        .route("/sites/{id}/changelog", get(get_public_site_changelog_handler))
        .route("/sites/{id}/events", post(post_public_site_events_handler))
        .route("/sites/{id}/search", get(search_public_site_handler))
        .route("/sites/{id}/answer", post(answer_public_site_handler))
        .route("/git/previews/{token}", get(get_public_git_preview_handler))
        .route("/domains/resolve", get(get_public_domains_resolve_handler))
        .route(
            "/projects/{org_slug}/{project_slug}",
            get(get_public_project_handler),
        )
        .route(
            "/pages/{org_slug}/{project_slug}/{*page_path}",
            get(get_public_page_handler),
        )
        .route(
            "/pages/{org_slug}/{project_slug}",
            get(list_public_pages_handler),
        )
        .route(
            "/search/{org_slug}/{project_slug}",
            get(search_public_content_handler),
        )
        .route(
            "/sitemap/{org_slug}/{project_slug}",
            get(get_project_sitemap_handler),
        )
        .with_state(state)
}
