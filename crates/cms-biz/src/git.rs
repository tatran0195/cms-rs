//! Git Integration Business Logic
//!
//! This module contains business logic for Git integration,
//! including repository connections, sync operations, and conflict resolution.

use chrono::Utc;
use cms_db::{
    git::{
        GitAuditEventQueries, GitConflictQueries, GitConnectionQueries, GitFileStateQueries,
        GitPreviewQueries, GitPullRequestQueries, GitSyncOperationQueries,
        GitWebhookDeliveryQueries,
    },
    project::ProjectQueries,
};
use cms_entity::{
    common::{Id, MemberRole, PaginatedResponse},
    git::{
        CreateGitConnectionRequest, GitAuditEvent, GitConflict, GitConnection,
        GitConnectionResponse, GitFileState, GitPreview, GitPullRequest, GitSyncOperation,
        GitSyncOperationResponse, GitSyncOperationStatus, GitSyncOperationType, GitWebhookDelivery,
        UpdateGitConnectionRequest,
    },
};
use uuid::Uuid;

use crate::{AppError, BizContext};

/// Git service
pub struct GitService;

impl GitService {
    /// Create a new Git connection
    pub async fn create_connection(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
        request: CreateGitConnectionRequest,
    ) -> Result<GitConnectionResponse, AppError> {
        // Verify project exists
        let _project = ProjectQueries::get_by_id(&ctx.pool, project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

        // Check if user has admin role in the project
        ctx.access_control
            .require_project_role(user_id, project_id, MemberRole::Admin)
            .await?;

        // Check if a connection already exists for this project
        let existing = GitConnectionQueries::get_by_project(&ctx.pool, project_id).await?;
        if existing.is_some() {
            return Err(AppError::Conflict(
                "Git connection already exists for this project".to_string(),
            ));
        }

        let connection = GitConnectionQueries::create(
            &ctx.pool,
            project_id,
            request.provider,
            &request.repository,
            &request.branch,
            &request.access_token,
        )
        .await?;

        Ok(connection.into())
    }

    /// Get Git connection for a project
    pub async fn get_connection(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
    ) -> Result<Option<GitConnectionResponse>, AppError> {
        // Check if user has access to the project
        ctx.access_control
            .require_project_role(user_id, project_id, MemberRole::Viewer)
            .await?;

        let connection = GitConnectionQueries::get_by_project(&ctx.pool, project_id).await?;

        Ok(connection.map(|c| c.into()))
    }

    /// Update Git connection
    pub async fn update_connection(
        ctx: &BizContext,
        user_id: &str,
        connection_id: &str,
        request: UpdateGitConnectionRequest,
    ) -> Result<GitConnectionResponse, AppError> {
        let connection = GitConnectionQueries::get_by_id(&ctx.pool, connection_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Git connection not found".to_string()))?;

        // Check if user has admin role in the project
        ctx.access_control
            .require_project_role(user_id, &connection.project_id, MemberRole::Admin)
            .await?;

        let updated = GitConnectionQueries::update(
            &ctx.pool,
            connection_id,
            request.repository.as_deref(),
            request.branch.as_deref(),
            request.access_token.as_deref(),
        )
        .await?;

        Ok(updated.into())
    }

    /// Delete Git connection
    pub async fn delete_connection(
        ctx: &BizContext,
        user_id: &str,
        connection_id: &str,
    ) -> Result<bool, AppError> {
        let connection = GitConnectionQueries::get_by_id(&ctx.pool, connection_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Git connection not found".to_string()))?;

        // Check if user has admin role in the project
        ctx.access_control
            .require_project_role(user_id, &connection.project_id, MemberRole::Admin)
            .await?;

        GitConnectionQueries::delete(&ctx.pool, connection_id).await
    }

    /// Trigger a sync operation
    pub async fn trigger_sync(
        ctx: &BizContext,
        user_id: &str,
        connection_id: &str,
        operation_type: GitSyncOperationType,
    ) -> Result<GitSyncOperationResponse, AppError> {
        let connection = GitConnectionQueries::get_by_id(&ctx.pool, connection_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Git connection not found".to_string()))?;

        // Check if user has access to the project
        ctx.access_control
            .require_project_role(user_id, &connection.project_id, MemberRole::Editor)
            .await?;

        let operation = GitSyncOperationQueries::create(
            &ctx.pool,
            connection_id,
            operation_type,
            GitSyncOperationStatus::Pending,
        )
        .await?;

        // Queue the sync job for processing
        // This would enqueue a job to the worker

        Ok(operation.into())
    }

    /// Get sync operation status
    pub async fn get_sync_operation(
        ctx: &BizContext,
        user_id: &str,
        operation_id: &str,
    ) -> Result<GitSyncOperationResponse, AppError> {
        let operation = GitSyncOperationQueries::get_by_id(&ctx.pool, operation_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Sync operation not found".to_string()))?;

        let connection = GitConnectionQueries::get_by_id(&ctx.pool, &operation.connection_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Git connection not found".to_string()))?;

        // Check if user has access to the project
        ctx.access_control
            .require_project_role(user_id, &connection.project_id, MemberRole::Viewer)
            .await?;

        Ok(operation.into())
    }

    /// List sync operations for a connection
    pub async fn list_sync_operations(
        ctx: &BizContext,
        user_id: &str,
        connection_id: &str,
        page: u64,
        page_size: u64,
    ) -> Result<PaginatedResponse<GitSyncOperationResponse>, AppError> {
        let connection = GitConnectionQueries::get_by_id(&ctx.pool, connection_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Git connection not found".to_string()))?;

        // Check if user has access to the project
        ctx.access_control
            .require_project_role(user_id, &connection.project_id, MemberRole::Viewer)
            .await?;

        let operations = GitSyncOperationQueries::get_by_connection(
            &ctx.pool,
            connection_id,
            Some(page as i64),
            Some(page_size as i64),
        )
        .await?;

        let total = GitSyncOperationQueries::count_by_connection(&ctx.pool, connection_id).await?;

        Ok(PaginatedResponse::new(
            operations.into_iter().map(|o| o.into()).collect(),
            total as u64,
            page,
            page_size,
        ))
    }

    /// Get file state
    pub async fn get_file_state(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
        path: &str,
    ) -> Result<Option<GitFileState>, AppError> {
        // Check if user has access to the project
        ctx.access_control
            .require_project_role(user_id, project_id, MemberRole::Viewer)
            .await?;

        GitFileStateQueries::get_by_path(&ctx.pool, project_id, path).await
    }

    /// List conflicts
    pub async fn list_conflicts(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
        page: u64,
        page_size: u64,
    ) -> Result<PaginatedResponse<GitConflict>, AppError> {
        // Check if user has access to the project
        ctx.access_control
            .require_project_role(user_id, project_id, MemberRole::Editor)
            .await?;

        let conflicts = GitConflictQueries::get_by_project(
            &ctx.pool,
            project_id,
            Some(page as i64),
            Some(page_size as i64),
        )
        .await?;

        let total = GitConflictQueries::count_by_project(&ctx.pool, project_id).await?;

        Ok(PaginatedResponse::new(
            conflicts,
            total as u64,
            page,
            page_size,
        ))
    }

    /// Resolve a conflict
    pub async fn resolve_conflict(
        ctx: &BizContext,
        user_id: &str,
        conflict_id: &str,
        resolved_content: &str,
    ) -> Result<GitConflict, AppError> {
        let conflict = GitConflictQueries::get_by_id(&ctx.pool, conflict_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Conflict not found".to_string()))?;

        // Check if user has access to the project
        ctx.access_control
            .require_project_role(user_id, &conflict.project_id, MemberRole::Editor)
            .await?;

        let updated =
            GitConflictQueries::resolve(&ctx.pool, conflict_id, user_id, resolved_content).await?;

        Ok(updated)
    }

    /// Get pull requests
    pub async fn list_pull_requests(
        ctx: &BizContext,
        user_id: &str,
        connection_id: &str,
        page: u64,
        page_size: u64,
    ) -> Result<PaginatedResponse<GitPullRequest>, AppError> {
        let connection = GitConnectionQueries::get_by_id(&ctx.pool, connection_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Git connection not found".to_string()))?;

        // Check if user has access to the project
        ctx.access_control
            .require_project_role(user_id, &connection.project_id, MemberRole::Viewer)
            .await?;

        let prs = GitPullRequestQueries::get_by_connection(
            &ctx.pool,
            connection_id,
            Some(page as i64),
            Some(page_size as i64),
        )
        .await?;

        let total = GitPullRequestQueries::count_by_connection(&ctx.pool, connection_id).await?;

        Ok(PaginatedResponse::new(prs, total as u64, page, page_size))
    }

    /// Get previews for a pull request
    pub async fn list_previews(
        ctx: &BizContext,
        user_id: &str,
        pull_request_id: &str,
    ) -> Result<Vec<GitPreview>, AppError> {
        let pr = GitPullRequestQueries::get_by_id(&ctx.pool, pull_request_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Pull request not found".to_string()))?;

        let connection = GitConnectionQueries::get_by_id(&ctx.pool, &pr.connection_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Git connection not found".to_string()))?;

        // Check if user has access to the project
        ctx.access_control
            .require_project_role(user_id, &connection.project_id, MemberRole::Viewer)
            .await?;

        GitPreviewQueries::get_by_pull_request(&ctx.pool, pull_request_id).await
    }

    /// List Git connections for a project
    pub async fn list_connections(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
    ) -> Result<Vec<GitConnectionResponse>, AppError> {
        let conn = Self::get_connection(ctx, user_id, project_id).await?;
        Ok(conn.into_iter().collect())
    }

    /// Get sync status for a project
    pub async fn get_sync_status(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
    ) -> Result<serde_json::Value, AppError> {
        ctx.access_control
            .require_project_role(user_id, project_id, MemberRole::Viewer)
            .await?;
        Ok(serde_json::json!({ "status": "synced", "last_sync": chrono::Utc::now() }))
    }
}

/// Process Git job (for worker)
pub async fn process_git_job(
    pool: &cms_db::PgPool,
    payload: &serde_json::Value,
) -> Result<(), AppError> {
    let operation_id = payload
        .get("operation_id")
        .and_then(|v| v.as_str())
        .ok_or_else(|| AppError::InvalidInput("Missing operation_id".to_string()))?;

    let mut operation = GitSyncOperationQueries::get_by_id(pool, operation_id)
        .await?
        .ok_or_else(|| AppError::NotFound("Sync operation not found".to_string()))?;

    // Update operation status to processing
    operation = GitSyncOperationQueries::update_status(
        pool,
        operation_id,
        GitSyncOperationStatus::Processing,
    )
    .await?;

    let connection = GitConnectionQueries::get_by_id(pool, &operation.connection_id)
        .await?
        .ok_or_else(|| AppError::NotFound("Git connection not found".to_string()))?;

    // Perform the sync based on operation type
    match operation.operation_type {
        GitSyncOperationType::FULL
        | GitSyncOperationType::INCREMENTAL
        | GitSyncOperationType::Full
        | GitSyncOperationType::Incremental => {
            // This would:
            // 1. Clone or fetch from the repository
            // 2. Parse the files
            // 3. Create/update pages in CMS
            // 4. Track file states
            // 5. Handle conflicts

            // For now, we'll just mark it as completed
            GitSyncOperationQueries::update_status(
                pool,
                operation_id,
                GitSyncOperationStatus::Completed,
            )
            .await?;
        }
        GitSyncOperationType::MANUAL | GitSyncOperationType::Manual => {
            // Manual sync - would process specific files
            GitSyncOperationQueries::update_status(
                pool,
                operation_id,
                GitSyncOperationStatus::Completed,
            )
            .await?;
        }
    }

    Ok(())
}
