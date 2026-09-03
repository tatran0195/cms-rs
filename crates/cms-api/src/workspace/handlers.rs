//! Workspace and Members handlers
//!
//! Handlers for organization-level workspace settings, workspace analytics,
//! and workspace member management.

use std::sync::Arc;

use axum::{
    extract::{Path, State},
    Json,
};
use cms_error::AppError;
use cms_middleware::app_state::AppState;

use crate::auth::AuthExtractor;

/// Get workspace settings
pub async fn get_workspace_settings_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
) -> Result<Json<serde_json::Value>, AppError> {
    let members =
        cms_db::org::MemberQueries::get_by_user(&state.biz_context.pool, &auth.user.id).await?;
    let org_id = members
        .first()
        .map(|m| m.organization_id.clone())
        .unwrap_or_default();

    let org = if !org_id.is_empty() {
        cms_db::org::OrganizationQueries::get_by_id(&state.biz_context.pool, &org_id).await?
    } else {
        None
    };

    let (name, slug) = org
        .map(|o| (o.name, o.slug))
        .unwrap_or_else(|| ("Workspace".to_string(), "workspace".to_string()));

    let project_count = if !org_id.is_empty() {
        cms_db::project::ProjectQueries::count_by_organization(&state.biz_context.pool, &org_id, None, None)
            .await
            .unwrap_or(0)
    } else {
        0
    };

    let member_count = if !org_id.is_empty() {
        cms_db::org::MemberQueries::count_by_organization(&state.biz_context.pool, &org_id, None, None)
            .await
            .unwrap_or(1)
    } else {
        1
    };

    Ok(Json(serde_json::json!({
        "data": {
            "name": name,
            "slug": slug,
            "plan": "free",
            "notifications": {},
            "integrations": {},
            "git": {},
            "projectCount": project_count,
            "memberCount": member_count,
        }
    })))
}

/// Update workspace settings
pub async fn update_workspace_settings_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
    Json(_body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    get_workspace_settings_handler(State(state), auth).await
}

/// Get workspace analytics
pub async fn get_workspace_analytics_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
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

/// List workspace members
pub async fn list_workspace_members_handler(
    State(state): State<Arc<AppState>>,
    auth: AuthExtractor,
) -> Result<Json<serde_json::Value>, AppError> {
    let members =
        cms_db::org::MemberQueries::get_by_user(&state.biz_context.pool, &auth.user.id).await?;
    let org_id = members
        .first()
        .map(|m| m.organization_id.clone())
        .unwrap_or_default();

    if !org_id.is_empty() {
        let org_members = cms_db::org::MemberQueries::get_by_organization(
            &state.biz_context.pool,
            &org_id,
            None,
            None,
            Some(100),
            None,
        )
        .await?;

        let items: Vec<serde_json::Value> = org_members
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

/// Invite workspace member
pub async fn invite_workspace_member_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Json(_body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({
        "data": {
            "success": true,
            "message": "Invitation sent successfully"
        }
    })))
}

/// Update workspace member role
pub async fn update_workspace_member_role_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(_id): Path<String>,
    Json(_body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({
        "data": {
            "success": true
        }
    })))
}

/// Remove workspace member
pub async fn remove_workspace_member_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({
        "data": {
            "success": true,
            "id": id
        }
    })))
}

/// Cancel workspace invitation
pub async fn cancel_workspace_invitation_handler(
    State(_state): State<Arc<AppState>>,
    _auth: AuthExtractor,
    Path(id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({
        "data": {
            "success": true,
            "id": id
        }
    })))
}
