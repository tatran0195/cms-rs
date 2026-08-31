use std::sync::Arc;

use async_trait::async_trait;
use axum::{
    extract::FromRequestParts,
    http::request::Parts,
    routing::{delete, get, post},
    Router,
};
use cms_entity::auth::UserResponse;
use cms_error::AppError;
use cms_middleware::app_state::AppState;

pub mod handlers;
mod middleware;

use handlers::*;
use middleware::*;

/// Deprecated: use crate::extractors::UserId instead.

/// Create the auth router
pub fn router(state: Arc<AppState>) -> Router {
    Router::new()
        .route("/login", post(login_handler))
        .route("/register", post(register_handler))
        .route("/logout", post(logout_handler))
        .route("/me", get(get_current_user_handler))
        .route("/refresh", post(refresh_session_handler))
        .route("/api-keys", get(list_api_keys_handler))
        .route("/api-keys", post(create_api_key_handler))
        .route("/api-keys/:id", delete(delete_api_key_handler))
        .with_state(state)
}

// Re-export middleware types
pub use middleware::{
    require_org_owner, require_org_role, require_project_owner, require_project_role,
    AuthExtractor, AuthMethod, AuthRejection, OptionalAuthExtractor, RequireAuthMiddleware,
    RequireRoleMiddleware, RoleRejection,
};
