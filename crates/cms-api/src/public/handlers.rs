//! Public handlers
//!
//! This module contains the actual implementation of public-facing handlers.
//! These handlers are for unauthenticated readers accessing published content.

use std::sync::Arc;

use axum::{
    extract::{Path, Query, State},
    Json,
};
use cms_biz::{page::PageService, project::ProjectService};
use cms_entity::{common::Id, page::PageResponse, project::ProjectResponse};
use cms_error::AppError;
use cms_middleware::app_state::AppState;
use utoipa::ToSchema;

/// Get a public project
///
/// Retrieve a project by organization slug and project slug.
/// This endpoint is publicly accessible without authentication.
#[utoipa::path(
    get,
    path = "/public/{org_slug}/{project_slug}",
    tag = "public",
    params(
        ("org_slug", Path, description = "Organization slug"),
        ("project_slug", Path, description = "Project slug"),
    ),
    responses(
        (status = 200, description = "Project found", body = ProjectResponse),
        (status = 404, description = "Project not found"),
    )
)]
pub async fn get_public_project_handler(
    State(state): State<Arc<AppState>>,
    Path((org_slug, project_slug)): Path<(String, String)>,
) -> Result<Json<ProjectResponse>, AppError> {
    let project =
        ProjectService::get_public_project(&state.biz_context, &org_slug, &project_slug).await?;

    Ok(Json(project.project))
}

/// Get a public page
///
/// Retrieve a page by organization slug, project slug, and page path.
#[utoipa::path(
    get,
    path = "/public/{org_slug}/{project_slug}/{page_path}",
    tag = "public",
    params(
        ("org_slug", Path, description = "Organization slug"),
        ("project_slug", Path, description = "Project slug"),
        ("page_path", Path, description = "Page path or slug"),
    ),
    responses(
        (status = 200, description = "Page found", body = PageResponse),
        (status = 404, description = "Page not found"),
    )
)]
pub async fn get_public_page_handler(
    State(state): State<Arc<AppState>>,
    Path((org_slug, project_slug, page_path)): Path<(String, String, String)>,
) -> Result<Json<PageResponse>, AppError> {
    let page =
        PageService::get_public_page(&state.biz_context, &org_slug, &project_slug, &page_path)
            .await?;

    Ok(Json(page))
}

/// List public pages handler
pub async fn list_public_pages_handler(
    State(state): State<Arc<AppState>>,
    Path((org_slug, project_slug)): Path<(String, String)>,
) -> Result<Json<Vec<PageResponse>>, AppError> {
    let pages =
        PageService::list_public_pages(&state.biz_context, &org_slug, &project_slug).await?;

    Ok(Json(pages))
}

/// Search public content handler
pub async fn search_public_content_handler(
    State(state): State<Arc<AppState>>,
    Path((org_slug, project_slug)): Path<(String, String)>,
    Query(query): Query<serde_json::Value>,
) -> Result<Json<Vec<PageResponse>>, AppError> {
    let search_term = query.get("q").and_then(|v| v.as_str()).unwrap_or("");

    let pages =
        PageService::search_public_pages(&state.biz_context, &org_slug, &project_slug, search_term)
            .await?;

    Ok(Json(pages))
}

/// Get project sitemap handler
pub async fn get_project_sitemap_handler(
    State(state): State<Arc<AppState>>,
    Path((org_slug, project_slug)): Path<(String, String)>,
) -> Result<Json<serde_json::Value>, AppError> {
    let sitemap =
        PageService::get_project_sitemap(&state.biz_context, &org_slug, &project_slug).await?;

    Ok(Json(serde_json::json!(sitemap)))
}
