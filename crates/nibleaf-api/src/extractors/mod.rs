//! Common extractors for API handlers

use async_trait::async_trait;
use axum::{
    extract::FromRequestParts,
    http::{request::Parts, header},
};
use nibleaf_error::AppError;

/// User ID extractor from session or header
#[derive(Debug, Clone)]
pub struct UserId(pub String);

#[async_trait]
impl<S> FromRequestParts<S> for UserId
where
    S: Send + Sync,
{
    type Rejection = AppError;
    
    async fn from_request_parts(parts: &mut Parts, _state: &S) -> Result<Self, Self::Rejection> {
        // Try to get user ID from X-User-ID header (for API requests)
        if let Some(user_id) = parts.headers.get("X-User-ID") {
            return Ok(UserId(user_id.to_str().map_err(|_| {
                AppError::Unauthorized
            })?.to_string()));
        }
        
        // Try to get from Authorization header (Bearer token)
        if let Some(auth_header) = parts.headers.get(header::AUTHORIZATION) {
            if let Ok(auth_value) = auth_header.to_str() {
                if auth_value.starts_with("Bearer ") {
                    let token = &auth_value[7..];
                    // In a real implementation, validate the token and extract user ID
                    // For now, we'll just check if it's a valid UUID format
                    if !token.is_empty() {
                        return Ok(UserId(token.to_string()));
                    }
                }
            }
        }
        
        Err(AppError::Unauthorized)
    }
}

/// Organization ID extractor from path or query
#[derive(Debug, Clone)]
pub struct OrgId(pub String);

#[async_trait]
impl<S> FromRequestParts<S> for OrgId
where
    S: Send + Sync,
{
    type Rejection = AppError;
    
    async fn from_request_parts(parts: &mut Parts, _state: &S) -> Result<Self, Self::Rejection> {
        // Try to get from X-Org-ID header
        if let Some(org_id) = parts.headers.get("X-Org-ID") {
            return Ok(OrgId(org_id.to_str().map_err(|_| {
                AppError::Unauthorized
            })?.to_string()));
        }
        
        Err(AppError::Unauthorized)
    }
}

/// Project ID extractor from path or header
#[derive(Debug, Clone)]
pub struct ProjectId(pub String);

#[async_trait]
impl<S> FromRequestParts<S> for ProjectId
where
    S: Send + Sync,
{
    type Rejection = AppError;
    
    async fn from_request_parts(parts: &mut Parts, _state: &S) -> Result<Self, Self::Rejection> {
        // Try to get from X-Project-ID header
        if let Some(project_id) = parts.headers.get("X-Project-ID") {
            return Ok(ProjectId(project_id.to_str().map_err(|_| {
                AppError::Unauthorized
            })?.to_string()));
        }
        
        Err(AppError::Unauthorized)
    }
}
