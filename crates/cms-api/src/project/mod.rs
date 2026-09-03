//! Project API module
//!
//! This module contains handlers for project routes.

use std::sync::Arc;

use axum::{
    routing::{delete, get, post, put},
    Router,
};
use cms_middleware::app_state::AppState;

pub mod handlers;

use handlers::*;

use crate::extractors::UserId;

/// Create the project router
pub fn router(state: Arc<AppState>) -> Router {
    use axum::routing::patch;
    Router::new()
        .route("/", get(list_projects_handler))
        .route("/", post(create_project_handler))
        .route("/{id}", get(get_project_handler))
        .route("/{id}", put(update_project_handler))
        .route("/{id}", patch(update_project_handler))
        .route("/{id}", delete(delete_project_handler))
        // Settings routes
        .route("/{id}/settings", get(get_project_settings_handler))
        .route("/{id}/settings", put(update_project_settings_handler))
        .route("/{id}/settings", patch(update_project_settings_handler))
        // Addons routes
        .route("/{id}/addons", get(list_project_addons_handler))
        // Project pages subroutes
        .route("/{project_id}/pages", get(list_project_pages_handler))
        .route("/{project_id}/pages", post(create_project_page_handler))
        .route("/{project_id}/pages/{id}", get(crate::page::handlers::get_page_handler))
        .route("/{project_id}/pages/{id}", put(crate::page::handlers::update_page_handler))
        .route("/{project_id}/pages/{id}", patch(crate::page::handlers::update_page_handler))
        .route("/{project_id}/pages/{id}", delete(crate::page::handlers::delete_page_handler))
        // Project branches subroutes
        .route("/{project_id}/branches", get(list_project_branches_handler))
        .route("/{project_id}/branches", post(create_project_branch_handler))
        // Project languages subroutes
        .route("/{project_id}/languages", get(list_project_languages_handler))
        .route("/{project_id}/languages", post(create_project_language_handler))
        // Project deployments subroutes
        .route("/{project_id}/deployments", get(list_project_deployments_handler))
        // Project domains subroutes
        .route("/{project_id}/domains", get(list_project_domains_handler))
        // Project assets subroutes
        .route("/{project_id}/assets", get(list_project_assets_handler))
        .route("/{project_id}/assets/presign", post(presign_project_asset_handler))
        .route("/{project_id}/assets/confirm", post(confirm_project_asset_handler))
        // Project analytics
        .route("/{project_id}/analytics", get(get_project_analytics_handler))
        // Project settings extended
        .route("/{project_id}/settings/usage", get(get_project_settings_usage_handler))
        .route("/{project_id}/settings/search", get(get_project_search_settings_handler))
        .route("/{project_id}/settings/search", patch(update_project_search_settings_handler))
        .route("/{project_id}/settings/search/diagnostics", get(get_project_search_diagnostics_handler))
        .route("/{project_id}/settings/search/reindex", post(reindex_project_search_handler))
        .route("/{project_id}/settings/git/import", post(action_project_git_handler))
        .route("/{project_id}/settings/git/webhook-secret", post(action_project_git_handler))
        .route("/{project_id}/settings/import/mintlify", post(action_project_git_handler))
        .route("/{project_id}/settings/import/ghost", post(action_project_git_handler))
        // Pages reorder
        .route("/{project_id}/pages/reorder", post(reorder_project_pages_handler))
        // Branch merge
        .route("/{project_id}/branches/{branch_id}/merge", post(merge_project_branch_handler))
        // Deployments extended
        .route("/{project_id}/deployments", post(trigger_project_export_handler))
        .route("/{project_id}/deployments/changes", get(get_deployment_changes_handler))
        .route("/{project_id}/deployments/{id}/rollback", post(rollback_deployment_handler))
        // Domains extended
        .route("/{project_id}/domains", post(project_action_success_handler))
        .route("/{project_id}/domains/{id}", delete(project_action_success_handler))
        .route("/{project_id}/domains/{id}/verify", post(verify_project_domain_handler))
        .route("/{project_id}/domains/{id}/primary", post(set_primary_project_domain_handler))
        // Project members
        .route("/{project_id}/members", get(list_project_members_handler))
        .route("/{project_id}/members/invite", post(project_action_success_handler))
        .route("/{project_id}/members/{id}", delete(project_action_success_handler))
        .route("/{project_id}/members/{id}/role", patch(project_action_success_handler))
        .route("/{project_id}/members/transfer-ownership", post(project_action_success_handler))
        .route("/{project_id}/members/invitations/{id}", delete(project_action_success_handler))
        // Project comments
        .route("/{project_id}/comments", get(list_project_comments_handler))
        .route("/{project_id}/comments", post(create_project_comment_handler))
        .route("/{project_id}/comments/{id}", patch(update_project_comment_handler))
        .route("/{project_id}/comments/{id}", delete(delete_project_comment_handler))
        // Project OpenAPI
        .route("/{project_id}/openapi", get(get_project_openapi_handler))
        .route("/{project_id}/openapi", put(save_project_openapi_handler))
        .route("/{project_id}/openapi", delete(delete_project_openapi_handler))
        .route("/{project_id}/openapi/sync", post(sync_project_openapi_handler))
        // Project reader access
        .route("/{project_id}/reader-access", get(get_project_reader_access_handler))
        .route("/{project_id}/reader-access/mode", put(update_project_reader_access_handler))
        .route("/{project_id}/reader-access/audiences", post(update_project_reader_access_handler))
        .route("/{project_id}/reader-access/audiences/{audience_id}", delete(project_action_success_handler))
        .route("/{project_id}/reader-access/readers/invite", post(update_project_reader_access_handler))
        .route("/{project_id}/reader-access/readers/{reader_id}/revoke", post(project_action_success_handler))
        .route("/{project_id}/reader-access/jwt", put(update_project_reader_access_handler))
        .route("/{project_id}/reader-access/jwt/test", post(project_action_success_handler))
        .route("/{project_id}/reader-access/emergency-revoke", post(project_action_success_handler))
        // Project git
        .route("/{project_id}/git", get(get_project_git_status_handler))
        .route("/{project_id}/git/authorize", post(action_project_git_handler))
        .route("/{project_id}/git/connection", put(action_project_git_handler))
        .route("/{project_id}/git/connection", delete(project_action_success_handler))
        .route("/{project_id}/git/operations", post(action_project_git_handler))
        .route("/{project_id}/git/webhook-secret", post(action_project_git_handler))
        .route("/{project_id}/git/conflicts/{conflict_id}/resolve", post(project_action_success_handler))
        // Project integrations
        .route("/{project_id}/integrations", get(list_project_integrations_handler))
        .route("/{project_id}/integrations", post(project_action_success_handler))
        .route("/{project_id}/integrations/{provider_id}", patch(project_action_success_handler))
        .route("/{project_id}/integrations/{provider_id}", delete(project_action_success_handler))
        .route("/{project_id}/integrations/{provider_id}/verify", post(project_action_success_handler))
        .route("/{project_id}/integrations/{provider_id}/delete-confirmation", post(project_action_success_handler))
        // Project AI
        .route("/{project_id}/ai", post(action_project_ai_handler))
        // Project theme template
        .route("/{project_id}/theme-template", get(get_project_theme_template_handler))
        .route("/{project_id}/theme-template/import", post(project_action_success_handler))
        // Project exports
        .route("/{project_id}/exports", get(list_project_exports_handler))
        .route("/{project_id}/exports", post(trigger_project_export_handler))
        .route("/{project_id}/exports/schedules", get(project_action_success_handler))
        .route("/{project_id}/exports/schedules", post(project_action_success_handler))
        .route("/{project_id}/exports/{id}/cancel", post(project_action_success_handler))
        .route("/{project_id}/exports/{id}/artifacts/{artifact_id}/download", get(project_action_success_handler))
        .route("/{project_id}/exports/schedules/{schedule_id}", patch(project_action_success_handler))
        .route("/{project_id}/exports/schedules/{schedule_id}/run", post(project_action_success_handler))
        // Project API keys
        .route("/{project_id}/api-keys", get(project_action_success_handler))
        .route("/{project_id}/api-keys", post(project_action_success_handler))
        .route("/{project_id}/api-keys/{id}", delete(project_action_success_handler))
        .route("/{project_id}/api-keys/{id}/rotate", post(project_action_success_handler))
        // Project Addons extended
        .route("/{project_id}/addons/{addon_id}", patch(project_action_success_handler))
        .route("/{project_id}/addons/{addon_id}/activate", post(project_action_success_handler))
        .route("/{project_id}/addons/{addon_id}/deactivate", post(project_action_success_handler))
        .with_state(state)
}
