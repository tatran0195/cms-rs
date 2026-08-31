//! Auth handlers
//!
//! This module contains the actual implementation of authentication handlers.

use axum::{
    extract::{Path, State},
    Json,
    http::{StatusCode, HeaderMap},
};
use axum_extra::extract::cookie::Cookie as AxumCookie;
use nibleaf_biz::auth::AuthService;
use nibleaf_entity::auth::{LoginRequest, RegisterRequest, UserResponse, ApiKeyResponse, CreateApiKeyRequest};
use nibleaf_error::AppError;
use nibleaf_middleware::app_state::AppState;
use std::sync::Arc;
use crate::auth::AuthExtractor;

/// Login to Nibleaf
///
/// Authenticate a user with email and password.
///
/// Returns the authenticated user and creates a session.
#[utoipa::path(
    post,
    path = "/auth/login",
    tag = "auth",
    request_body = LoginRequest,
    responses(
        (status = 200, description = "User logged in successfully", body = UserResponse),
        (status = 401, description = "Invalid credentials"),
        (status = 400, description = "Bad request"),
    )
)]
pub async fn login_handler(
    State(state): State<Arc<AppState>>,
    Json(request): Json<LoginRequest>,
) -> Result<Json<UserResponse>, AppError> {
    // Delegate to auth service
    let user = AuthService::login(
        &state.biz_context,
        &request.email,
        &request.password,
    ).await?;
    
    Ok(Json(user))
}

/// Register a new user
///
/// Create a new Nibleaf account with email and password.
#[utoipa::path(
    post,
    path = "/auth/register",
    tag = "auth",
    request_body = RegisterRequest,
    responses(
        (status = 200, description = "User registered successfully", body = UserResponse),
        (status = 400, description = "Bad request"),
        (status = 409, description = "Email already exists"),
    )
)]
pub async fn register_handler(
    State(state): State<Arc<AppState>>,
    Json(request): Json<RegisterRequest>,
) -> Result<Json<UserResponse>, AppError> {
    // Delegate to auth service
    let user = AuthService::register(
        &state.biz_context,
        &request.email,
        request.password.as_deref().unwrap_or(""),
        request.name.as_deref(),
    ).await?;
    
    Ok(Json(user))
}

/// Logout handler
pub async fn logout_handler(
    State(state): State<Arc<AppState>>,
    headers: HeaderMap,
) -> Result<Json<serde_json::Value>, AppError> {
    if let Some(cookie_header) = headers.get(axum::http::header::COOKIE) {
        if let Ok(cookie_str) = cookie_header.to_str() {
            if let Some(token) = AxumCookie::split_parse(cookie_str)
                .find_map(|c| c.ok().filter(|c| c.name() == "session_token").map(|c| c.value().to_string())) {
                AuthService::logout(&state.biz_context, &token).await?;
            }
        }
    }
    
    Ok(Json(serde_json::json!({"message": "Logged out successfully"})))
}

/// Get current user handler
pub async fn get_current_user_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
) -> Result<Json<UserResponse>, AppError> {
    // Get user from database
    let user = AuthService::get_user(&state.biz_context, &auth.user.id).await?;
    
    Ok(Json(user))
}

/// Refresh session handler
pub async fn refresh_session_handler(
    State(state): State<Arc<AppState>>,
    headers: HeaderMap,
) -> Result<Json<UserResponse>, AppError> {
    let cookie_header = headers.get(axum::http::header::COOKIE)
        .ok_or(AppError::Unauthorized)?;
    let cookie_str = cookie_header.to_str()
        .map_err(|_| AppError::Unauthorized)?;
    let refresh_token = AxumCookie::split_parse(cookie_str)
        .find_map(|c| c.ok().filter(|c| c.name() == "refresh_token").map(|c| c.value().to_string()))
        .ok_or(AppError::Unauthorized)?;
    
    let user = AuthService::refresh_session(
        &state.biz_context,
        &refresh_token,
    ).await?;
    
    Ok(Json(user))
}

/// List API keys handler
pub async fn list_api_keys_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
) -> Result<Json<Vec<ApiKeyResponse>>, AppError> {
    let api_keys = AuthService::list_api_keys(&state.biz_context, &auth.user.id).await?;
    
    Ok(Json(api_keys))
}

/// Create API key handler
pub async fn create_api_key_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Json(request): Json<CreateApiKeyRequest>,
) -> Result<Json<ApiKeyResponse>, AppError> {
    let api_key = AuthService::create_api_key(
        &state.biz_context,
        &auth.user.id,
        &request.name,
    ).await?;
    
    Ok(Json(api_key))
}

/// Delete API key handler
pub async fn delete_api_key_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(api_key_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    AuthService::delete_api_key(&state.biz_context, &auth.user.id, &api_key_id).await?;
    
    Ok(Json(serde_json::json!({"success": true, "id": api_key_id})))
}
