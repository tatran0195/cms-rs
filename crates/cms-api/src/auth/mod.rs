use async_trait::async_trait;
use axum::{
    routing::{get, post, delete},
    Router,
    extract::FromRequestParts,
    http::request::Parts,
};
use cms_entity::auth::UserResponse;
use cms_error::AppError;
use cms_middleware::app_state::AppState;
use std::sync::Arc;

pub mod handlers;
mod middleware;

use handlers::*;
use middleware::*;

/// User ID extractor from session (legacy - use AuthExtractor instead)
#[derive(Debug, Clone)]
pub struct UserId(pub String);

#[async_trait]
impl<S> FromRequestParts<S> for UserId
where
    S: Send + Sync,
{
    type Rejection = AppError;
    
    async fn from_request_parts(parts: &mut Parts, _state: &S) -> Result<Self, Self::Rejection> {
        // Try to extract from AuthExtractor first
        if let Ok(auth) = AuthExtractor::from_request_parts(parts, _state).await {
            return Ok(UserId(auth.user.id));
        }
        
        // Fallback to header
        if let Some(user_id) = parts.headers.get("X-User-ID") {
            return Ok(UserId(user_id.to_str().map_err(|_| AppError::Unauthorized)?.to_string()));
        }
        
        Err(AppError::Unauthorized)
    }
}

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
    AuthExtractor, AuthMethod, OptionalAuthExtractor,
    RequireAuthMiddleware, AuthRejection,
    RequireRoleMiddleware, RoleRejection,
    require_org_role, require_project_role,
    require_org_owner, require_project_owner,
};
