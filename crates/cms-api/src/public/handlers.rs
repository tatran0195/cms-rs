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

/// Get public instance metadata handler
pub async fn get_public_meta_handler() -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({
        "providers": {
            "google": false,
            "github": false
        },
        "marketingAnalytics": null
    })))
}

/// Get public site shell
pub async fn get_public_site_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    let project = cms_db::project::ProjectQueries::get_by_id(&state.biz_context.pool, &id).await?;
    let project = project.ok_or_else(|| AppError::NotFound("Site not found".to_string()))?;

    let pages = cms_db::page::PageQueries::get_by_project(&state.biz_context.pool, &id)
        .await
        .unwrap_or_default();
    let nav: Vec<serde_json::Value> = pages
        .into_iter()
        .map(|p| {
            serde_json::json!({
                "id": p.id,
                "kind": "PAGE",
                "title": p.title,
                "path": p.path,
                "icon": null,
                "tag": null,
                "children": []
            })
        })
        .collect();

    Ok(Json(serde_json::json!({
        "data": {
            "project": {
                "id": project.id,
                "name": project.name,
                "slug": project.slug,
                "description": project.description,
                "config": null,
                "primaryDomain": null,
            },
            "nav": nav,
            "languages": [
                {
                    "code": "en",
                    "label": "English",
                    "direction": "LTR",
                    "isDefault": true,
                    "enabled": true
                }
            ],
            "versions": [
                {
                    "id": "main",
                    "name": "main",
                    "slug": "main",
                    "isDefault": true
                }
            ],
            "activeLanguage": "en",
            "activeVersion": "main",
            "languageConfig": null,
            "version": 1,
            "generatedAt": chrono::Utc::now().to_rfc3339(),
            "openapi": null
        }
    })))
}

/// Get public site page
pub async fn get_public_site_page_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
    Query(query): Query<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    let path = query.get("path").and_then(|v| v.as_str()).unwrap_or("");
    let project = cms_db::project::ProjectQueries::get_by_id(&state.biz_context.pool, &id).await?;
    let project = project.ok_or_else(|| AppError::NotFound("Site not found".to_string()))?;

    let default_branch = cms_db::branch::BranchQueries::get_default(&state.biz_context.pool, &id)
        .await
        .ok()
        .flatten();
    let branch_id = default_branch
        .map(|b| b.id)
        .unwrap_or_else(|| "main".to_string());

    let page = if path.is_empty() || path == "/" {
        cms_db::page::PageQueries::get_by_project(&state.biz_context.pool, &id)
            .await
            .ok()
            .and_then(|pages| pages.into_iter().next())
    } else {
        cms_db::page::PageQueries::get_by_path(&state.biz_context.pool, &id, &branch_id, path)
            .await
            .ok()
            .flatten()
    };

    let (title, content, page_path, page_id) = if let Some(p) = page {
        (p.title, p.content, p.path, p.id)
    } else {
        (
            "Home".to_string(),
            "# Welcome\n\nContent is being prepared.".to_string(),
            "/".to_string(),
            "home".to_string(),
        )
    };

    Ok(Json(serde_json::json!({
        "data": {
            "project": {
                "id": project.id,
                "name": project.name,
                "slug": project.slug,
                "description": project.description,
                "config": null,
                "primaryDomain": null,
            },
            "page": {
                "id": page_id,
                "createdAt": chrono::Utc::now().to_rfc3339(),
                "updatedAt": chrono::Utc::now().to_rfc3339(),
                "title": title,
                "description": null,
                "icon": null,
                "path": page_path,
                "content": content,
                "headings": [],
                "config": null
            }
        }
    })))
}

/// Get public site changelog
pub async fn get_public_site_changelog_handler(
    State(_state): State<Arc<AppState>>,
    Path(_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": [] })))
}

/// Track public site events
pub async fn post_public_site_events_handler(
    State(_state): State<Arc<AppState>>,
    Path(_id): Path<String>,
    Json(_event): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Search public site
pub async fn search_public_site_handler(
    State(_state): State<Arc<AppState>>,
    Path(_id): Path<String>,
    Query(_query): Query<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "hits": [] } })))
}

/// AI answer public site
pub async fn answer_public_site_handler(
    State(_state): State<Arc<AppState>>,
    Path(_id): Path<String>,
    Json(_body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "answer": "", "sources": [] } })))
}

/// Track public marketing events
pub async fn post_public_marketing_events_handler(
    State(_state): State<Arc<AppState>>,
    Json(_body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Get public invitation
pub async fn get_public_invitation_handler(
    State(_state): State<Arc<AppState>>,
    Path(id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({
        "data": {
            "id": id,
            "organizationName": "Nibleaf Workspace",
            "inviterName": "Admin",
            "email": "user@example.com",
            "role": "member"
        }
    })))
}

/// Get public git preview
pub async fn get_public_git_preview_handler(
    State(_state): State<Arc<AppState>>,
    Path(_token): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": {} })))
}

/// Resolve public custom domain
pub async fn get_public_domains_resolve_handler(
    State(_state): State<Arc<AppState>>,
    Query(_query): Query<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": null })))
}
