//! Branch API module
//!
//! This module contains handlers for branch routes.

use axum::{
    routing::{get, post, put, delete},
    Router,
};
use cms_middleware::app_state::AppState;
use std::sync::Arc;

pub mod handlers;

use handlers::*;
use crate::extractors::UserId;

/// Create the branch router
pub fn router(state: Arc<AppState>) -> Router {
    Router::new()
        .route("/", get(list_branches_handler))
        .route("/", post(create_branch_handler))
        .route("/:id", get(get_branch_handler))
        .route("/:id", put(update_branch_handler))
        .route("/:id", delete(delete_branch_handler))
        .with_state(state)
}
