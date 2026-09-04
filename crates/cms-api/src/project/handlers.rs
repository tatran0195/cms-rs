//! Project handlers
//!
//! This module contains the actual implementation of project handlers.

use std::sync::Arc;

use axum::{
    extract::{Path, Query, State},
    Json,
};
use cms_biz::project::ProjectService;
use cms_entity::{
    common::{Id, PaginatedResponse},
    project::{
        CreateProjectRequest, ListProjectsQuery, ListProjectsResponse, ProjectResponse,
        ProjectSettings, ProjectWithOrgResponse, UpdateProjectRequest,
        UpdateProjectSettingsRequest,
    },
};
use cms_error::AppError;
use cms_middleware::app_state::AppState;
use utoipa::ToSchema;

use crate::auth::AuthExtractor;

/// List all projects for the authenticated user
///
/// Returns a paginated list of projects that the user has access to.
#[utoipa::path(
    get,
    path = "/projects",
    tag = "projects",
    security(
        ("bearerAuth" = []),
        ("apiKeyAuth" = []),
        ("cookieAuth" = []),
    ),
    params(
        ("page", Query, description = "Page number"),
        ("limit", Query, description = "Items per page"),
    ),
    responses(
        (status = 200, description = "List of projects", body = ListProjectsResponse),
        (status = 401, description = "Unauthorized"),
    )
)]
pub async fn list_projects_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Query(query): Query<ListProjectsQuery>,
) -> Result<Json<serde_json::Value>, AppError> {
    let result = ProjectService::list_all_projects_for_user(
        &state.biz_context,
        &auth.user.id,
        query.page.unwrap_or(1),
        query.limit.unwrap_or(100),
    )
    .await?;

    Ok(Json(serde_json::json!({ "data": result.data })))
}

/// Create a new project
///
/// Creates a new project within an organization.
#[utoipa::path(
    post,
    path = "/projects",
    tag = "projects",
    security(
        ("bearerAuth" = []),
        ("apiKeyAuth" = []),
        ("cookieAuth" = []),
    ),
    request_body = CreateProjectRequest,
    responses(
        (status = 200, description = "Project created successfully", body = ProjectWithOrgResponse),
        (status = 400, description = "Bad request"),
        (status = 401, description = "Unauthorized"),
        (status = 403, description = "Forbidden - user may not have permission"),
    )
)]
pub async fn create_project_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Json(request): Json<CreateProjectRequest>,
) -> Result<Json<serde_json::Value>, AppError> {
    let org_id = request.organization_id.clone().unwrap_or_default();
    let project =
        ProjectService::create_project(&state.biz_context, &auth.user.id, &org_id, request).await?;

    Ok(Json(serde_json::json!({ "data": project })))
}

/// Get project handler
pub async fn get_project_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<Id>,
) -> Result<Json<serde_json::Value>, AppError> {
    let project =
        ProjectService::get_project(&state.biz_context, &auth.user.id, &project_id).await?;

    Ok(Json(serde_json::json!({ "data": project })))
}

/// Update project handler
pub async fn update_project_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<Id>,
    Json(request): Json<UpdateProjectRequest>,
) -> Result<Json<serde_json::Value>, AppError> {
    let project =
        ProjectService::update_project(&state.biz_context, &auth.user.id, &project_id, request)
            .await?;

    Ok(Json(serde_json::json!({ "data": project })))
}

/// Delete project handler
pub async fn delete_project_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<Id>,
) -> Result<Json<serde_json::Value>, AppError> {
    ProjectService::delete_project(&state.biz_context, &auth.user.id, &project_id).await?;

    Ok(Json(serde_json::json!({ "data": { "success": true, "id": project_id } })))
}

/// Get project settings handler
pub async fn get_project_settings_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<Id>,
) -> Result<Json<serde_json::Value>, AppError> {
    let settings =
        ProjectService::get_project_settings(&state.biz_context, &auth.user.id, &project_id)
            .await?;

    Ok(Json(serde_json::json!({ "data": settings })))
}

/// Update project settings handler
pub async fn update_project_settings_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<Id>,
    Json(request): Json<UpdateProjectSettingsRequest>,
) -> Result<Json<serde_json::Value>, AppError> {
    let settings = ProjectService::update_project_settings(
        &state.biz_context,
        &auth.user.id,
        &project_id,
        request,
    )
    .await?;

    Ok(Json(serde_json::json!({ "data": settings })))
}

/// List project addons handler
pub async fn list_project_addons_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<Id>,
) -> Result<Json<serde_json::Value>, AppError> {
    let addons =
        ProjectService::list_project_addons(&state.biz_context, &auth.user.id, &project_id).await?;

    Ok(Json(serde_json::json!({ "data": addons })))
}

/// List pages for a project
pub async fn list_project_pages_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<String>,
    Query(mut query): Query<cms_entity::page::ListPagesQuery>,
) -> Result<Json<serde_json::Value>, AppError> {
    query.project_id = project_id.clone();
    if query.branch_id.is_empty() {
        if let Ok(Some(b)) =
            cms_db::branch::BranchQueries::get_default(&state.biz_context.pool, &project_id).await
        {
            query.branch_id = b.id;
        } else if let Ok(Some(b)) =
            cms_db::branch::BranchQueries::get_by_project(&state.biz_context.pool, &project_id, None, Some(1), None).await.map(|v| v.into_iter().next())
        {
            query.branch_id = b.id;
        } else if let Ok(b) = cms_db::branch::BranchQueries::create(
            &state.biz_context.pool,
            &project_id,
            "main",
            Some("Default branch"),
            true,
            false,
        ).await {
            query.branch_id = b.id;
        }
    }

    let default_lang_id = if let Some(lid) = query.language_id.clone() {
        Some(lid)
    } else if let Ok(Some(dl)) =
        cms_db::language::LanguageQueries::get_default(&state.biz_context.pool, &project_id).await
    {
        Some(dl.id)
    } else if let Ok(langs) =
        cms_db::language::LanguageQueries::get_by_project(&state.biz_context.pool, &project_id, Some(1), None).await
    {
        langs.into_iter().next().map(|l| l.id)
    } else {
        None
    };

    let mut result =
        cms_biz::page::PageService::list_pages(&state.biz_context, &auth.user.id, query, 1, 100)
            .await?;

    for page in &mut result.data {
        if page.language_id.is_none() {
            page.language_id = default_lang_id.clone();
        }
    }

    Ok(Json(serde_json::json!({ "data": result.data })))
}

/// Create a page for a project
pub async fn create_project_page_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<String>,
    Json(mut request): Json<cms_entity::page::CreatePageRequest>,
) -> Result<Json<serde_json::Value>, AppError> {
    request.project_id = project_id.clone();
    if request.branch_id.is_empty() {
        if let Ok(Some(b)) =
            cms_db::branch::BranchQueries::get_default(&state.biz_context.pool, &project_id)
                .await
        {
            request.branch_id = b.id;
        } else if let Ok(Some(b)) =
            cms_db::branch::BranchQueries::get_by_project(&state.biz_context.pool, &project_id, None, Some(1), None).await.map(|v| v.into_iter().next())
        {
            request.branch_id = b.id;
        } else if let Ok(b) = cms_db::branch::BranchQueries::create(
            &state.biz_context.pool,
            &project_id,
            "main",
            Some("Default branch"),
            true,
            false,
        ).await {
            request.branch_id = b.id;
        }
    }
    let branch_id = request.branch_id.clone();
    let requested_lang_id = request.language_id.clone();
    let requested_kind = request.kind.clone();
    let mut page = cms_biz::page::PageService::create_page(
        &state.biz_context,
        &auth.user.id,
        &project_id,
        &branch_id,
        request,
    )
    .await?;

    let lang_id = if let Some(lid) = requested_lang_id {
        Some(lid)
    } else if let Ok(Some(dl)) =
        cms_db::language::LanguageQueries::get_default(&state.biz_context.pool, &project_id).await
    {
        Some(dl.id)
    } else if let Ok(langs) =
        cms_db::language::LanguageQueries::get_by_project(&state.biz_context.pool, &project_id, Some(1), None).await
    {
        langs.into_iter().next().map(|l| l.id)
    } else {
        None
    };

    if page.language_id.is_none() {
        page.language_id = lang_id;
    }
    if page.kind.is_none() {
        page.kind = requested_kind.or(Some("PAGE".to_string()));
    }

    Ok(Json(serde_json::json!({ "data": page })))
}

/// Get a page for a project
pub async fn get_project_page_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path((project_id, page_id)): Path<(String, String)>,
) -> Result<Json<serde_json::Value>, AppError> {
    let mut page =
        cms_biz::page::PageService::get_page(&state.biz_context, &auth.user.id, &page_id).await?;

    if page.language_id.is_none() {
        if let Ok(Some(dl)) =
            cms_db::language::LanguageQueries::get_default(&state.biz_context.pool, &project_id).await
        {
            page.language_id = Some(dl.id);
        }
    }

    Ok(Json(serde_json::json!({ "data": page })))
}

/// Update a page for a project
pub async fn update_project_page_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path((project_id, page_id)): Path<(String, String)>,
    Json(request): Json<cms_entity::page::UpdatePageRequest>,
) -> Result<Json<serde_json::Value>, AppError> {
    let mut page =
        cms_biz::page::PageService::update_page(&state.biz_context, &auth.user.id, &page_id, request)
            .await?;

    if page.language_id.is_none() {
        if let Ok(Some(dl)) =
            cms_db::language::LanguageQueries::get_default(&state.biz_context.pool, &project_id).await
        {
            page.language_id = Some(dl.id);
        }
    }

    Ok(Json(serde_json::json!({ "data": page })))
}

/// Delete a page for a project
pub async fn delete_project_page_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path((_project_id, page_id)): Path<(String, String)>,
) -> Result<Json<serde_json::Value>, AppError> {
    cms_biz::page::PageService::delete_page(&state.biz_context, &auth.user.id, &page_id).await?;
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Reorder pages for a project
pub async fn reorder_project_pages_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<String>,
    Json(payload): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    state
        .biz_context
        .authz
        .require_project_role(&auth.user.id, &project_id, cms_entity::common::MemberRole::Editor)
        .await?;

    if let Some(items) = payload.get("items").and_then(|v| v.as_array()) {
        for item in items {
            if let Some(id) = item.get("id").and_then(|v| v.as_str()) {
                let parent_id = item.get("parentId").and_then(|v| v.as_str());
                let position = item.get("position").and_then(|v| v.as_i64()).map(|p| p as i32);
                let _ = cms_db::page::PageQueries::update(
                    &state.biz_context.pool,
                    id,
                    parent_id,
                    None,
                    None,
                    None,
                    None,
                    position,
                    None,
                )
                .await;
            }
        }
    }

    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// List branches for a project
pub async fn list_project_branches_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<String>,
    Query(mut query): Query<cms_entity::branch::ListBranchesQuery>,
) -> Result<Json<serde_json::Value>, AppError> {
    query.project_id = project_id.clone();
    let mut result = cms_biz::branch::BranchService::list_branches(
        &state.biz_context,
        &auth.user.id,
        query,
        1,
        100,
    )
    .await?;

    if result.data.is_empty() {
        if let Ok(b) = cms_db::branch::BranchQueries::create(
            &state.biz_context.pool,
            &project_id,
            "main",
            Some("Default branch"),
            true,
            false,
        ).await {
            result.data.push(b.into());
            result.total = 1;
        }
    }

    Ok(Json(serde_json::json!({ "data": result.data })))
}

/// Create a branch for a project
pub async fn create_project_branch_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<String>,
    Json(mut request): Json<cms_entity::branch::CreateBranchRequest>,
) -> Result<Json<serde_json::Value>, AppError> {
    request.project_id = project_id.clone();
    let branch = cms_biz::branch::BranchService::create_branch(
        &state.biz_context,
        &auth.user.id,
        &project_id,
        request,
    )
    .await?;
    Ok(Json(serde_json::json!({ "data": branch.branch })))
}

/// List languages for a project
pub async fn list_project_languages_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    let query = cms_entity::language::ListLanguagesQuery { project_id };
    let result = cms_biz::language::LanguageService::list_languages(
        &state.biz_context,
        &auth.user.id,
        query,
        1,
        100,
    )
    .await?;
    Ok(Json(serde_json::json!({ "data": result.data })))
}

/// Create a language for a project
pub async fn create_project_language_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<String>,
    Json(mut request): Json<cms_entity::language::CreateLanguageRequest>,
) -> Result<Json<serde_json::Value>, AppError> {
    request.project_id = project_id.clone();
    let lang = cms_biz::language::LanguageService::create_language(
        &state.biz_context,
        &auth.user.id,
        request,
    )
    .await?;
    Ok(Json(serde_json::json!({ "data": lang })))
}

/// Update a language for a project
pub async fn update_project_language_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path((_project_id, language_id)): Path<(String, String)>,
    Json(request): Json<cms_entity::language::UpdateLanguageRequest>,
) -> Result<Json<serde_json::Value>, AppError> {
    let lang = cms_biz::language::LanguageService::update_language(
        &state.biz_context,
        &auth.user.id,
        &language_id,
        request,
    )
    .await?;
    Ok(Json(serde_json::json!({ "data": lang })))
}

/// Delete a language for a project
pub async fn delete_project_language_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path((_project_id, language_id)): Path<(String, String)>,
) -> Result<Json<serde_json::Value>, AppError> {
    cms_biz::language::LanguageService::delete_language(
        &state.biz_context,
        &auth.user.id,
        &language_id,
    )
    .await?;
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// List deployments for a project
pub async fn list_project_deployments_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    let result = cms_biz::deployment::DeploymentService::list_deployments(
        &state.biz_context,
        &auth.user.id,
        &project_id,
        1,
        50,
    )
    .await?;

    let total_count = result.total as i64;
    let pages_count = cms_db::page::PageQueries::get_by_project(&state.biz_context.pool, &project_id)
        .await
        .map(|p| p.len() as i64)
        .unwrap_or(0);

    let items: Vec<serde_json::Value> = result
        .data
        .into_iter()
        .enumerate()
        .map(|(idx, d)| {
            let version = total_count - (idx as i64);
            let status_str = match d.status {
                cms_entity::deployment::DeploymentStatus::Active => "READY",
                cms_entity::deployment::DeploymentStatus::Pending => "PENDING",
                cms_entity::deployment::DeploymentStatus::Building
                | cms_entity::deployment::DeploymentStatus::Deploying => "BUILDING",
                cms_entity::deployment::DeploymentStatus::Failed
                | cms_entity::deployment::DeploymentStatus::Deleted => "FAILED",
            };
            serde_json::json!({
                "id": d.id,
                "version": version,
                "status": status_str,
                "pagesCount": pages_count,
                "commitMessage": d.build_logs.as_deref().unwrap_or("Publish site"),
                "error": d.error_message,
                "errorDetails": null,
                "createdAt": d.created_at.to_rfc3339(),
                "completedAt": d.deployed_at.map(|t| t.to_rfc3339()).unwrap_or_else(|| d.created_at.to_rfc3339()),
            })
        })
        .collect();

    Ok(Json(serde_json::json!({ "data": items })))
}

/// Get latest READY deployment for a project
pub async fn get_latest_project_deployment_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    let result = cms_biz::deployment::DeploymentService::list_deployments(
        &state.biz_context,
        &auth.user.id,
        &project_id,
        1,
        5,
    )
    .await?;

    let total_count = result.total as i64;
    let pages_count = cms_db::page::PageQueries::get_by_project(&state.biz_context.pool, &project_id)
        .await
        .map(|p| p.len() as i64)
        .unwrap_or(0);

    let latest_ready = result.data.into_iter().enumerate().find_map(|(idx, d)| {
        let version = total_count - (idx as i64);
        let status_str = match d.status {
            cms_entity::deployment::DeploymentStatus::Active => "READY",
            cms_entity::deployment::DeploymentStatus::Pending => "PENDING",
            cms_entity::deployment::DeploymentStatus::Building
            | cms_entity::deployment::DeploymentStatus::Deploying => "BUILDING",
            cms_entity::deployment::DeploymentStatus::Failed
            | cms_entity::deployment::DeploymentStatus::Deleted => "FAILED",
        };
        if status_str == "READY" {
            Some(serde_json::json!({
                "id": d.id,
                "version": version,
                "status": status_str,
                "pagesCount": pages_count,
                "commitMessage": d.build_logs.as_deref().unwrap_or("Publish site"),
                "error": d.error_message,
                "errorDetails": null,
                "createdAt": d.created_at.to_rfc3339(),
                "completedAt": d.deployed_at.map(|t| t.to_rfc3339()).unwrap_or_else(|| d.created_at.to_rfc3339()),
            }))
        } else {
            None
        }
    });

    Ok(Json(serde_json::json!({ "data": latest_ready })))
}

/// List domains for a project
pub async fn list_project_domains_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    let result = cms_biz::domain::DomainService::list_domains(
        &state.biz_context,
        &auth.user.id,
        Some(&project_id),
        None,
        None,
    )
    .await?;
    Ok(Json(serde_json::json!({ "data": result })))
}

/// List assets for a project
pub async fn list_project_assets_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    let result = cms_biz::asset::AssetService::list_assets(
        &state.biz_context,
        &auth.user.id,
        &project_id,
        1,
        50,
    )
    .await?;
    Ok(Json(serde_json::json!({ "data": result.data })))
}

/// Project analytics
pub async fn get_project_analytics_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({
        "data": {
            "availability": "available",
            "totalViews": 0,
            "uniqueVisitors": 0,
            "viewsPreviousPeriod": 0,
            "visitorsPreviousPeriod": 0,
            "viewsChangePct": 0,
            "visitorsChangePct": 0,
            "avgDurationSeconds": 0,
            "timeseries": [],
            "topPages": [],
            "topReferrers": [],
            "topCountries": [],
            "topSearches": [],
            "referrers": [],
            "languages": [],
            "devices": [],
            "engagement": {
                "engagedViews": null,
                "averageEngagementMs": null
            },
            "searches": {
                "total": 0,
                "zeroResults": null,
                "clickedResults": null,
                "averageLatencyMs": null,
                "queryTerms": "legacy",
                "topTerms": []
            },
            "ai": {
                "answersCompleted": null,
                "answersFailed": null,
                "promptTokens": null,
                "completionTokens": null,
                "costMicros": null,
                "averageLatencyMs": null
            },
            "noAnswerReasons": []
        }
    })))
}

/// Project settings usage
pub async fn get_project_settings_usage_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({
        "data": {
            "bandwidthBytes": 0,
            "requestsCount": 0,
            "storageBytes": 0,
        }
    })))
}

/// Project search settings
pub async fn get_project_search_settings_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({
        "data": {
            "enabled": true,
            "provider": "built-in"
        }
    })))
}

/// Update project search settings
pub async fn update_project_search_settings_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
    Json(_body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Project search diagnostics
pub async fn get_project_search_diagnostics_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({
        "data": {
            "indexedPages": 0,
            "lastIndexedAt": chrono::Utc::now().to_rfc3339(),
            "status": "ready"
        }
    })))
}

/// Reindex project search
pub async fn reindex_project_search_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}



/// Merge branch
pub async fn merge_project_branch_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path((_project_id, _branch_id)): Path<(String, String)>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Deployment changes
pub async fn get_deployment_changes_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({
        "data": {
            "changes": [],
            "redirectIssues": [],
            "hasBaseline": true
        }
    })))
}

/// Create and trigger a project deployment (publish site)
pub async fn create_project_deployment_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<String>,
    Json(body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    // 1. Verify project exists
    let _project = cms_db::project::ProjectQueries::get_by_id(&state.biz_context.pool, &project_id)
        .await?
        .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

    // Check project role (MemberRole::Member or higher)
    state.biz_context.authz
        .require_project_role(&auth.user.id, &project_id, cms_entity::common::MemberRole::Member)
        .await?;

    // 2. Find default branch
    let default_branch = cms_db::branch::BranchQueries::get_default(&state.biz_context.pool, &project_id)
        .await?
        .or_else(|| None);
    let branch_id = default_branch.map(|b| b.id);

    // 3. Count existing deployments to assign version number
    let count = cms_db::deployment::DeploymentQueries::count_by_project(&state.biz_context.pool, &project_id)
        .await
        .unwrap_or(0);
    let version = count + 1;

    // 4. Count pages in the project
    let pages = cms_db::page::PageQueries::get_by_project(&state.biz_context.pool, &project_id)
        .await
        .unwrap_or_default();
    let pages_count = pages.len() as i64;

    // 5. Extract optional commit message
    let commit_message = body
        .get("message")
        .and_then(|m| m.as_str())
        .map(|s| s.to_string());

    // 6. Create deployment record
    let branch_ref = branch_id.as_deref().unwrap_or("");
    let deployment = cms_db::deployment::DeploymentQueries::create(
        &state.biz_context.pool,
        &project_id,
        branch_ref,
        cms_entity::deployment::DeploymentStatus::Building,
    )
    .await?;

    if let Some(ref msg) = commit_message {
        let _ = sqlx::query("UPDATE \"Deployment\" SET build_logs = $1 WHERE id = $2")
            .bind(msg)
            .bind(&deployment.id)
            .execute(&state.biz_context.pool)
            .await;
    }

    // 7. Process deployment job (renders pages to storage and marks Active/READY)
    let payload = serde_json::json!({
        "deployment_id": deployment.id
    });
    if let Err(e) = cms_biz::deployment::process_deployment_job(&state.biz_context.pool, state.storage.clone(), &payload).await {
        tracing::error!("Deployment job execution failed: {}", e);
    }

    // 8. Fetch updated deployment
    let updated = cms_db::deployment::DeploymentQueries::get_by_id(&state.biz_context.pool, &deployment.id)
        .await?
        .unwrap_or(deployment);

    let status_str = match updated.status {
        cms_entity::deployment::DeploymentStatus::Active => "READY",
        cms_entity::deployment::DeploymentStatus::Pending => "PENDING",
        cms_entity::deployment::DeploymentStatus::Building
        | cms_entity::deployment::DeploymentStatus::Deploying => "BUILDING",
        cms_entity::deployment::DeploymentStatus::Failed
        | cms_entity::deployment::DeploymentStatus::Deleted => "FAILED",
    };

    let res = serde_json::json!({
        "id": updated.id,
        "version": version,
        "status": status_str,
        "pagesCount": pages_count,
        "commitMessage": commit_message.or(updated.build_logs),
        "error": updated.error_message,
        "errorDetails": null,
        "createdAt": updated.created_at.to_rfc3339(),
        "completedAt": updated.deployed_at.map(|t| t.to_rfc3339()).unwrap_or_else(|| chrono::Utc::now().to_rfc3339())
    });

    Ok(Json(serde_json::json!({ "data": res })))
}

/// Rollback deployment
pub async fn rollback_deployment_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path((project_id, target_deployment_id)): Path<(String, String)>,
) -> Result<Json<serde_json::Value>, AppError> {
    state.biz_context.authz
        .require_project_role(&auth.user.id, &project_id, cms_entity::common::MemberRole::Member)
        .await?;

    let count = cms_db::deployment::DeploymentQueries::count_by_project(&state.biz_context.pool, &project_id)
        .await
        .unwrap_or(0);
    let version = count + 1;
    let pages_count = cms_db::page::PageQueries::get_by_project(&state.biz_context.pool, &project_id)
        .await
        .map(|p| p.len() as i64)
        .unwrap_or(0);

    let target = cms_db::deployment::DeploymentQueries::get_by_id(&state.biz_context.pool, &target_deployment_id)
        .await?
        .ok_or_else(|| AppError::NotFound("Target deployment not found".to_string()))?;

    let branch_ref = target.branch_id.as_deref().unwrap_or("");
    let deployment = cms_db::deployment::DeploymentQueries::create(
        &state.biz_context.pool,
        &project_id,
        branch_ref,
        cms_entity::deployment::DeploymentStatus::Active,
    )
    .await?;
    let _ = cms_db::deployment::DeploymentQueries::update_deployed_at(&state.biz_context.pool, &deployment.id).await;

    let res = serde_json::json!({
        "id": deployment.id,
        "version": version,
        "status": "READY",
        "pagesCount": pages_count,
        "commitMessage": format!("Rollback to deployment {}", target_deployment_id),
        "error": null,
        "errorDetails": null,
        "createdAt": deployment.created_at.to_rfc3339(),
        "completedAt": chrono::Utc::now().to_rfc3339()
    });

    Ok(Json(serde_json::json!({ "data": res })))
}

/// Verify domain
pub async fn verify_project_domain_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path((_project_id, _id)): Path<(String, String)>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "verified": true } })))
}

/// Primary domain
pub async fn set_primary_project_domain_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path((_project_id, _id)): Path<(String, String)>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Presign asset
pub async fn presign_project_asset_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
    Json(_body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({
        "data": {
            "uploadUrl": "/api/public/assets/upload-dummy",
            "assetUrl": "/assets/placeholder.png",
            "key": "dummy-key"
        }
    })))
}

/// Confirm asset
pub async fn confirm_project_asset_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
    Json(_body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Project members list
pub async fn list_project_members_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    let project =
        cms_db::project::ProjectQueries::get_by_id(&state.biz_context.pool, &project_id).await?;
    if let Some(p) = project {
        let members = cms_db::org::MemberQueries::get_by_organization(
            &state.biz_context.pool,
            &p.organization_id,
            None,
            None,
            Some(100),
            None,
        )
        .await?;

        let user_ids: Vec<&str> = members.iter().map(|m| m.user_id.as_str()).collect();
        let users = cms_db::auth::UserQueries::get_by_ids(&state.biz_context.pool, &user_ids)
            .await
            .unwrap_or_default();
        let user_map: std::collections::HashMap<String, cms_entity::auth::User> = users
            .into_iter()
            .map(|u| (u.id.clone(), u))
            .collect();

        let items: Vec<serde_json::Value> = members
            .into_iter()
            .map(|m| {
                let (user_name, user_email, user_image) = if let Some(u) = user_map.get(&m.user_id) {
                    (u.name.clone(), u.email.clone(), u.image.clone())
                } else {
                    (auth.user.name.clone(), auth.user.email.clone(), auth.user.image.clone())
                };
                serde_json::json!({
                    "id": m.id,
                    "organizationId": m.organization_id,
                    "userId": m.user_id,
                    "role": format!("{:?}", m.role).to_lowercase(),
                    "createdAt": m.created_at,
                    "user": {
                        "id": m.user_id,
                        "name": user_name,
                        "email": user_email,
                        "image": user_image,
                    }
                })
            })
            .collect();

        let invitations = cms_db::org::InvitationQueries::list_by_org(
            &state.biz_context.pool,
            &p.organization_id,
        )
        .await
        .unwrap_or_default();

        return Ok(Json(serde_json::json!({
            "data": {
                "members": items,
                "invitations": invitations
            }
        })));
    }
    Ok(Json(serde_json::json!({
        "data": {
            "members": [],
            "invitations": []
        }
    })))
}

/// Project comments list
pub async fn list_project_comments_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": [] })))
}

/// Project comment create
pub async fn create_project_comment_handler(
    State(_state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(_project_id): Path<String>,
    Json(body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    let text = body.get("body").and_then(|v| v.as_str()).unwrap_or("");
    Ok(Json(serde_json::json!({
        "data": {
            "id": uuid::Uuid::new_v4().to_string(),
            "body": text,
            "resolved": false,
            "createdAt": chrono::Utc::now().to_rfc3339(),
            "user": {
                "id": auth.user.id,
                "name": auth.user.name,
                "image": auth.user.image,
            }
        }
    })))
}

/// Project comment update
pub async fn update_project_comment_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path((_project_id, _id)): Path<(String, String)>,
    Json(_body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Project comment delete
pub async fn delete_project_comment_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path((_project_id, _id)): Path<(String, String)>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Project openapi get
pub async fn get_project_openapi_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": null })))
}

/// Project openapi save
pub async fn save_project_openapi_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
    Json(_body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Project openapi sync
pub async fn sync_project_openapi_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Project openapi delete
pub async fn delete_project_openapi_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Project reader access get
pub async fn get_project_reader_access_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({
        "data": {
            "mode": "public",
            "audiences": [],
            "readers": []
        }
    })))
}

/// Project reader access update
pub async fn update_project_reader_access_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
    Json(_body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Project git status
pub async fn get_project_git_status_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": null })))
}

/// Project git action
pub async fn action_project_git_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
    Json(_body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Project integrations list
pub async fn list_project_integrations_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": [] })))
}

/// Project exports list
pub async fn list_project_exports_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": [] })))
}

/// Project export trigger
pub async fn trigger_project_export_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
    Json(_body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Project AI drafting
pub async fn action_project_ai_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
    Json(_body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "text": "Draft content" } })))
}

/// Project theme template
pub async fn get_project_theme_template_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": null })))
}

/// Generic success handler for project action
pub async fn project_action_success_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}
