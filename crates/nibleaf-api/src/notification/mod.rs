//! Notification API module
//!
//! This module contains handlers for notification routes.

use axum::{
    routing::{get, post, put, delete},
    Router,
};
use nibleaf_middleware::app_state::AppState;
use std::sync::Arc;

pub mod handlers;

use handlers::*;
use crate::extractors::UserId;

/// Create the notification router
pub fn router(state: Arc<AppState>) -> Router {
    Router::new()
        .route("/", get(list_notifications_handler))
        .route("/:id", get(get_notification_handler))
        .route("/read", post(mark_notification_read_handler))
        .route("/read-all", post(mark_all_notifications_read_handler))
        .route("/:id/archive", post(archive_notification_handler))
        .route("/count", get(get_notification_count_handler))
        .with_state(state)
}
