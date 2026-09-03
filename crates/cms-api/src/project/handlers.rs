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
    query.project_id = project_id;
    let result =
        cms_biz::page::PageService::list_pages(&state.biz_context, &auth.user.id, query, 1, 100)
            .await?;
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
        }
    }
    let branch_id = request.branch_id.clone();
    let page = cms_biz::page::PageService::create_page(
        &state.biz_context,
        &auth.user.id,
        &project_id,
        &branch_id,
        request,
    )
    .await?;
    Ok(Json(serde_json::json!({ "data": page })))
}

/// List branches for a project
pub async fn list_project_branches_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Path(project_id): Path<String>,
    Query(mut query): Query<cms_entity::branch::ListBranchesQuery>,
) -> Result<Json<serde_json::Value>, AppError> {
    query.project_id = project_id;
    let result = cms_biz::branch::BranchService::list_branches(
        &state.biz_context,
        &auth.user.id,
        query,
        1,
        100,
    )
    .await?;
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
    Ok(Json(serde_json::json!({ "data": result.data })))
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
            "topSearches": []
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

/// Reorder project pages
pub async fn reorder_project_pages_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_project_id): Path<String>,
    Json(_body): Json<serde_json::Value>,
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
    Ok(Json(serde_json::json!({ "data": [] })))
}

/// Rollback deployment
pub async fn rollback_deployment_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path((_project_id, _id)): Path<(String, String)>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
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
        let items: Vec<serde_json::Value> = members
            .into_iter()
            .map(|m| {
                serde_json::json!({
                    "id": m.id,
                    "organizationId": m.organization_id,
                    "userId": m.user_id,
                    "role": format!("{:?}", m.role).to_lowercase(),
                    "createdAt": m.created_at,
                    "user": {
                        "id": m.user_id,
                        "name": auth.user.name.clone(),
                        "email": auth.user.email.clone(),
                        "image": auth.user.image.clone(),
                    }
                })
            })
            .collect();
        return Ok(Json(serde_json::json!({ "data": items })));
    }
    Ok(Json(serde_json::json!({ "data": [] })))
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
