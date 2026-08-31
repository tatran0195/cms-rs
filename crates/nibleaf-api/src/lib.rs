//! Nibleaf API Layer
//!
//! This crate contains Axum routers and handlers for the Nibleaf REST API.
//! Following AppFlowy's pattern, handlers are thin and delegate to biz functions.
//!
//! The API is organized by domain, matching the structure of `apps/server/src/modules/app`
//! in the original TypeScript monorepo.

pub mod auth;
pub mod org;
pub mod project;
pub mod page;
pub mod branch;
pub mod language;
pub mod git;
pub mod integration;
pub mod deployment;
pub mod domain;
pub mod reader_access;
pub mod comment;
pub mod search;
pub mod export;
pub mod openapi;
pub mod usage;
pub mod notification;
pub mod asset;
pub mod analytics;
pub mod theme;
pub mod platform_event;
pub mod mcp;
pub mod admin;
pub mod public;
pub mod extractors;
pub mod middleware;
pub mod validation;
pub use openapi::docs as openapi_docs;

use axum::Router;
use nibleaf_error::AppError;
use std::sync::Arc;

/// AppState type - this will be provided by the binary crate
pub type AppState = nibleaf_middleware::AppState;

/// Create the main API router
pub fn create_api_router(state: Arc<AppState>) -> Router {
    use axum::routing::{get, post};
    use openapi::docs::{serve_openapi_spec, serve_openapi_yaml, serve_swagger_ui, serve_redoc};
    
    let mut router = Router::new();
    
    // Mount all domain routers
    router = router.nest("/auth", auth::router(state.clone()));
    router = router.nest("/orgs", org::router(state.clone()));
    router = router.nest("/projects", project::router(state.clone()));
    router = router.nest("/pages", page::router(state.clone()));
    router = router.nest("/branches", branch::router(state.clone()));
    router = router.nest("/languages", language::router(state.clone()));
    router = router.nest("/git", git::router(state.clone()));
    router = router.nest("/integrations", integration::router(state.clone()));
    router = router.nest("/deployments", deployment::router(state.clone()));
    router = router.nest("/domains", domain::router(state.clone()));
    router = router.nest("/reader-access", reader_access::router(state.clone()));
    router = router.nest("/comments", comment::router(state.clone()));
    router = router.nest("/search", search::router(state.clone()));
    router = router.nest("/export", export::router(state.clone()));
    router = router.nest("/openapi", openapi::router(state.clone()));
    router = router.nest("/usage", usage::router(state.clone()));
    router = router.nest("/notifications", notification::router(state.clone()));
    router = router.nest("/assets", asset::router(state.clone()));
    router = router.nest("/analytics", analytics::router(state.clone()));
    router = router.nest("/themes", theme::router(state.clone()));
    router = router.nest("/platform-events", platform_event::router(state.clone()));
    router = router.nest("/mcp", mcp::router(state.clone()));
    
    // Admin routes (platform-admin-only)
    router = router.nest("/admin", admin::router(state.clone()));
    
    // Public routes (unauthenticated reader-facing JSON API)
    router = router.nest("/public", public::router(state.clone()));
    
    // OpenAPI documentation endpoints
    router = router.route("/api-docs/openapi.json", get(serve_openapi_spec));
    router = router.route("/api-docs/openapi.yaml", get(serve_openapi_yaml));
    router = router.route("/api-docs", get(serve_swagger_ui));
    router = router.route("/api-docs/redoc", get(serve_redoc));
    
    // Health check endpoint
    router = router.route("/health", get(get_health));
    
    router
}

/// Alias for create_api_router (for compatibility with main.rs)
pub fn api_router(state: Arc<AppState>) -> Router {
    create_api_router(state)
}

/// Health check handler
async fn get_health() -> Result<&'static str, AppError> {
    Ok("OK")
}
