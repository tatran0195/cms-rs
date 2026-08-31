//! Admin API module
//!
//! This module contains handlers for admin-only routes.

use axum::{
    routing::get,
    Router,
};
use nibleaf_middleware::app_state::AppState;
use std::sync::Arc;

pub mod handlers;

use handlers::*;
use crate::extractors::UserId;

/// Create the admin router
pub fn router(state: Arc<AppState>) -> Router {
    Router::new()
        .route("/orgs", get(list_all_organizations_handler))
        .route("/orgs/:id/stats", get(get_organization_stats_handler))
        .route("/stats", get(get_system_stats_handler))
        .route("/health", get(get_system_health_handler))
        .with_state(state)
}
