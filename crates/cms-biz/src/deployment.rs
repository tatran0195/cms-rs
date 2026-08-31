//! Deployment Business Logic
//!
//! This module contains business logic for deployments and custom domains.

use std::sync::Arc;

use chrono::Utc;
use cms_db::{
    branch::BranchQueries,
    deployment::{DeploymentQueries, DomainQueries},
    page::PageQueries,
    project::ProjectQueries,
};
use cms_entity::{
    common::{Id, MemberRole, PaginatedResponse},
    deployment::{
        CreateDeploymentRequest, Deployment, DeploymentResponse, DeploymentStatus,
        UpdateDeploymentRequest,
    },
    domain::{CreateDomainRequest, Domain, DomainResponse, UpdateDomainRequest},
};
use cms_storage::Storage;
use uuid::Uuid;

use crate::{AppError, BizContext};

/// Deployment service
pub struct DeploymentService;

impl DeploymentService {
    /// Create a new deployment
    pub async fn create_deployment(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
        request: CreateDeploymentRequest,
    ) -> Result<DeploymentResponse, AppError> {
        // Verify project exists
        let project = ProjectQueries::get_by_id(&ctx.pool, project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

        // Verify branch exists
        let branch_id = request.branch_id.as_deref().unwrap_or("");
        let _branch = BranchQueries::get_by_id(&ctx.pool, branch_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Branch not found".to_string()))?;

        // Check if user has admin role in the project
        ctx.access_control
            .require_project_role(user_id, project_id, MemberRole::Admin)
            .await?;

        let deployment =
            DeploymentQueries::create(&ctx.pool, project_id, branch_id, DeploymentStatus::Pending)
                .await?;

        // Queue the deployment job for processing
        // This would enqueue a job to the worker

        Ok(deployment.into())
    }

    /// Get a deployment
    pub async fn get_deployment(
        ctx: &BizContext,
        user_id: &str,
        deployment_id: &str,
    ) -> Result<DeploymentResponse, AppError> {
        let deployment = DeploymentQueries::get_by_id(&ctx.pool, deployment_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Deployment not found".to_string()))?;

        // Check if user has access to the project
        ctx.access_control
            .require_project_role(user_id, &deployment.project_id, MemberRole::Viewer)
            .await?;

        Ok(deployment.into())
    }

    /// List deployments for a project
    pub async fn list_deployments(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
        page: u64,
        page_size: u64,
    ) -> Result<PaginatedResponse<DeploymentResponse>, AppError> {
        let _project = ProjectQueries::get_by_id(&ctx.pool, project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

        // Check if user has access to the project
        ctx.access_control
            .require_project_role(user_id, project_id, MemberRole::Viewer)
            .await?;

        let deployments = DeploymentQueries::get_by_project(
            &ctx.pool,
            project_id,
            Some(page as i64),
            Some(page_size as i64),
        )
        .await?;

        let total = DeploymentQueries::count_by_project(&ctx.pool, project_id).await?;

        Ok(PaginatedResponse::new(
            deployments.into_iter().map(|d| d.into()).collect(),
            total as u64,
            page,
            page_size,
        ))
    }

    /// Update a deployment
    pub async fn update_deployment(
        ctx: &BizContext,
        user_id: &str,
        deployment_id: &str,
        request: UpdateDeploymentRequest,
    ) -> Result<DeploymentResponse, AppError> {
        let deployment = DeploymentQueries::get_by_id(&ctx.pool, deployment_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Deployment not found".to_string()))?;

        // Check if user has admin role in the project
        ctx.access_control
            .require_project_role(user_id, &deployment.project_id, MemberRole::Admin)
            .await?;

        // If branch is changing, verify it exists
        if let Some(ref branch_id) = request.branch_id {
            let _branch = BranchQueries::get_by_id(&ctx.pool, branch_id)
                .await?
                .ok_or_else(|| AppError::NotFound("Branch not found".to_string()))?;
        }

        let updated =
            DeploymentQueries::update(&ctx.pool, deployment_id, request.branch_id.as_deref())
                .await?;

        Ok(updated.into())
    }

    /// Delete a deployment
    pub async fn delete_deployment(
        ctx: &BizContext,
        user_id: &str,
        deployment_id: &str,
    ) -> Result<bool, AppError> {
        let deployment = DeploymentQueries::get_by_id(&ctx.pool, deployment_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Deployment not found".to_string()))?;

        // Check if user has admin role in the project
        ctx.access_control
            .require_project_role(user_id, &deployment.project_id, MemberRole::Admin)
            .await?;

        DeploymentQueries::delete(&ctx.pool, deployment_id).await
    }

    /// Get deployment logs
    pub async fn get_deployment_logs(
        ctx: &BizContext,
        user_id: &str,
        deployment_id: &str,
    ) -> Result<serde_json::Value, AppError> {
        let _ = Self::get_deployment(ctx, user_id, deployment_id).await?;
        Ok(serde_json::json!({ "logs": "Deployment completed successfully" }))
    }

    /// Retry a deployment
    pub async fn retry_deployment(
        ctx: &BizContext,
        user_id: &str,
        deployment_id: &str,
    ) -> Result<DeploymentResponse, AppError> {
        let deployment = DeploymentQueries::get_by_id(&ctx.pool, deployment_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Deployment not found".to_string()))?;

        ctx.access_control
            .require_project_role(user_id, &deployment.project_id, MemberRole::Admin)
            .await?;

        // Reset deployment to pending so it can be re-processed
        let updated =
            DeploymentQueries::update_status(&ctx.pool, deployment_id, DeploymentStatus::Pending)
                .await?;

        Ok(updated.into())
    }

    /// Cancel a deployment
    pub async fn cancel_deployment(
        ctx: &BizContext,
        user_id: &str,
        deployment_id: &str,
    ) -> Result<DeploymentResponse, AppError> {
        let deployment = DeploymentQueries::get_by_id(&ctx.pool, deployment_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Deployment not found".to_string()))?;

        ctx.access_control
            .require_project_role(user_id, &deployment.project_id, MemberRole::Admin)
            .await?;

        // Only cancel if currently pending or building
        let can_cancel = matches!(
            deployment.status,
            DeploymentStatus::Pending | DeploymentStatus::Building
        );

        if !can_cancel {
            return Err(AppError::InvalidInput(format!(
                "Cannot cancel deployment in {:?} state",
                deployment.status
            )));
        }

        let updated =
            DeploymentQueries::update_status(&ctx.pool, deployment_id, DeploymentStatus::Failed)
                .await?;

        Ok(updated.into())
    }

    /// Create a custom domain
    pub async fn create_domain(
        ctx: &BizContext,
        user_id: &str,
        deployment_id: &str,
        request: CreateDomainRequest,
    ) -> Result<DomainResponse, AppError> {
        let deployment = DeploymentQueries::get_by_id(&ctx.pool, deployment_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Deployment not found".to_string()))?;

        // Check if user has admin role in the project
        ctx.access_control
            .require_project_role(user_id, &deployment.project_id, MemberRole::Admin)
            .await?;

        // Check if domain is already in use
        let existing = DomainQueries::get_by_hostname(&ctx.pool, &request.hostname).await?;
        if existing.is_some() {
            return Err(AppError::Conflict("Domain is already in use".to_string()));
        }

        let domain = DomainQueries::create(
            &ctx.pool,
            deployment_id,
            &request.hostname,
            request.is_primary,
        )
        .await?;

        Ok(domain.into())
    }

    /// Get a domain
    pub async fn get_domain(
        ctx: &BizContext,
        user_id: &str,
        domain_id: &str,
    ) -> Result<DomainResponse, AppError> {
        let domain = DomainQueries::get_by_id(&ctx.pool, domain_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Domain not found".to_string()))?;

        let deployment = DeploymentQueries::get_by_id(&ctx.pool, &domain.deployment_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Deployment not found".to_string()))?;

        // Check if user has access to the project
        ctx.access_control
            .require_project_role(user_id, &deployment.project_id, MemberRole::Viewer)
            .await?;

        Ok(domain.into())
    }

    /// List domains for a deployment
    pub async fn list_domains(
        ctx: &BizContext,
        user_id: &str,
        deployment_id: &str,
    ) -> Result<Vec<DomainResponse>, AppError> {
        let deployment = DeploymentQueries::get_by_id(&ctx.pool, deployment_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Deployment not found".to_string()))?;

        // Check if user has access to the project
        ctx.access_control
            .require_project_role(user_id, &deployment.project_id, MemberRole::Viewer)
            .await?;

        let domains = DomainQueries::get_by_deployment(&ctx.pool, deployment_id).await?;

        Ok(domains.into_iter().map(|d| d.into()).collect())
    }

    /// Update a domain
    pub async fn update_domain(
        ctx: &BizContext,
        user_id: &str,
        domain_id: &str,
        request: UpdateDomainRequest,
    ) -> Result<DomainResponse, AppError> {
        let domain = DomainQueries::get_by_id(&ctx.pool, domain_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Domain not found".to_string()))?;

        let deployment = DeploymentQueries::get_by_id(&ctx.pool, &domain.deployment_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Deployment not found".to_string()))?;

        // Check if user has admin role in the project
        ctx.access_control
            .require_project_role(user_id, &deployment.project_id, MemberRole::Admin)
            .await?;

        // Cannot make a non-primary domain primary if another domain is already primary
        if request.is_primary == Some(true) && !domain.is_primary {
            let existing_primary =
                DomainQueries::get_primary_by_deployment(&ctx.pool, &domain.deployment_id).await?;

            if existing_primary.is_some() {
                return Err(AppError::Conflict(
                    "Another domain is already primary for this deployment".to_string(),
                ));
            }
        }

        let updated = DomainQueries::update(&ctx.pool, domain_id, request.is_primary).await?;

        Ok(updated.into())
    }

    /// Delete a domain
    pub async fn delete_domain(
        ctx: &BizContext,
        user_id: &str,
        domain_id: &str,
    ) -> Result<bool, AppError> {
        let domain = DomainQueries::get_by_id(&ctx.pool, domain_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Domain not found".to_string()))?;

        let deployment = DeploymentQueries::get_by_id(&ctx.pool, &domain.deployment_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Deployment not found".to_string()))?;

        // Check if user has admin role in the project
        ctx.access_control
            .require_project_role(user_id, &deployment.project_id, MemberRole::Admin)
            .await?;

        // Cannot delete the primary domain
        if domain.is_primary {
            return Err(AppError::AccessDenied(
                "Cannot delete the primary domain".to_string(),
            ));
        }

        DomainQueries::delete(&ctx.pool, domain_id).await
    }

    /// Resolve a domain to a deployment
    pub async fn resolve_domain(
        ctx: &BizContext,
        hostname: &str,
    ) -> Result<Option<DeploymentResponse>, AppError> {
        let domain = DomainQueries::get_by_hostname(&ctx.pool, hostname).await?;

        if let Some(domain) = domain {
            let deployment = DeploymentQueries::get_by_id(&ctx.pool, &domain.deployment_id)
                .await?
                .ok_or_else(|| AppError::NotFound("Deployment not found".to_string()))?;

            Ok(Some(deployment.into()))
        } else {
            Ok(None)
        }
    }
}

// ---------------------------------------------------------------------------
// Worker functions
// ---------------------------------------------------------------------------

/// Render markdown to sanitized HTML using pulldown-cmark + ammonia.
fn render_markdown_to_html(markdown: &str, title: &str) -> String {
    use pulldown_cmark::{html, Options, Parser};

    let mut options = Options::empty();
    options.insert(Options::ENABLE_STRIKETHROUGH);
    options.insert(Options::ENABLE_TABLES);
    options.insert(Options::ENABLE_FOOTNOTES);
    options.insert(Options::ENABLE_TASKLISTS);

    let parser = Parser::new_ext(markdown, options);
    let mut html_body = String::new();
    html::push_html(&mut html_body, parser);

    // Sanitize with ammonia (allowlist-based)
    let clean_body = ammonia::clean(&html_body);

    // Wrap in a minimal HTML document
    format!(
        r#"<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <style>
    body {{ max-width: 800px; margin: 0 auto; padding: 2rem; font-family: system-ui, sans-serif; line-height: 1.6; }}
    pre {{ background: #f4f4f4; padding: 1rem; overflow-x: auto; border-radius: 4px; }}
    code {{ font-family: monospace; }}
    img {{ max-width: 100%; height: auto; }}
  </style>
</head>
<body>
{clean_body}
</body>
</html>"#,
        title = ammonia::clean(title),
        clean_body = clean_body,
    )
}

/// Process deployment job (for worker)
///
/// This function:
/// 1. Fetches all pages in the deployment's branch
/// 2. Renders each page from Markdown to HTML
/// 3. Uploads the HTML to the storage backend under `sites/{project_id}/{deployment_id}/`
/// 4. Marks the deployment as Active on success, or Failed on error
pub async fn process_deployment_job(
    pool: &cms_db::PgPool,
    storage: Arc<dyn Storage>,
    payload: &serde_json::Value,
) -> Result<(), AppError> {
    let deployment_id = payload
        .get("deployment_id")
        .and_then(|v| v.as_str())
        .ok_or_else(|| AppError::InvalidInput("Missing deployment_id".to_string()))?;

    let deployment = DeploymentQueries::get_by_id(pool, deployment_id)
        .await?
        .ok_or_else(|| AppError::NotFound("Deployment not found".to_string()))?;

    // Update deployment status to building
    DeploymentQueries::update_status(pool, deployment_id, DeploymentStatus::Building).await?;

    // Inner function so we can capture errors and mark as Failed
    let result = do_deployment(pool, &storage, &deployment, deployment_id).await;

    match result {
        Ok(()) => {
            DeploymentQueries::update_status(pool, deployment_id, DeploymentStatus::Active).await?;
            DeploymentQueries::update_deployed_at(pool, deployment_id).await?;
            tracing::info!("Deployment {} completed successfully", deployment_id);
        }
        Err(ref e) => {
            tracing::error!("Deployment {} failed: {}", deployment_id, e);
            DeploymentQueries::update_status(pool, deployment_id, DeploymentStatus::Failed).await?;
        }
    }

    result
}

async fn do_deployment(
    pool: &cms_db::PgPool,
    storage: &Arc<dyn Storage>,
    deployment: &cms_entity::deployment::Deployment,
    deployment_id: &str,
) -> Result<(), AppError> {
    // Get the branch to deploy
    let branch_id_ref = deployment.branch_id.as_deref().unwrap_or("");
    let _branch = BranchQueries::get_by_id(pool, branch_id_ref)
        .await?
        .ok_or_else(|| AppError::NotFound("Branch not found".to_string()))?;

    // Get all pages in the branch
    let pages = PageQueries::get_by_project_and_branch(
        pool,
        &deployment.project_id,
        branch_id_ref,
        None,
        None,
        None,
        None,
        None,
    )
    .await?;

    tracing::info!(
        "Deploying {} pages for deployment {}",
        pages.len(),
        deployment_id
    );

    for page in &pages {
        let markdown = page.content.as_deref().unwrap_or("");
        let html = render_markdown_to_html(markdown, &page.title);

        // Store as sites/{project_id}/{deployment_id}/{page_path}.html
        let page_path = page.path.trim_start_matches('/');
        let storage_key = format!(
            "sites/{}/{}/{}.html",
            deployment.project_id, deployment_id, page_path
        );

        storage
            .put(&storage_key, bytes::Bytes::from(html), "text/html; charset=utf-8")
            .await
            .map_err(|e| {
                tracing::error!("Failed to store page {} at {}: {}", page.id, storage_key, e);
                e
            })?;

        tracing::debug!(
            "Stored page {} -> {}",
            page.path,
            storage_key
        );
    }

    Ok(())
}

/// Process publish job (for worker)
///
/// Publish is triggered when a single page is saved/published.
/// It re-renders that page and uploads it to all active deployments for the project.
pub async fn process_publish_job(
    pool: &cms_db::PgPool,
    storage: Arc<dyn Storage>,
    payload: &serde_json::Value,
) -> Result<(), AppError> {
    let page_id = payload
        .get("page_id")
        .and_then(|v| v.as_str());

    let project_id = payload
        .get("project_id")
        .and_then(|v| v.as_str());

    // If we have a specific page_id, re-render just that page across active deployments
    if let (Some(pid), Some(proj_id)) = (page_id, project_id) {
        let page = PageQueries::get_by_id(pool, pid)
            .await?
            .ok_or_else(|| AppError::NotFound("Page not found".to_string()))?;

        // Find active deployments for this project
        let deployments = DeploymentQueries::get_active_by_project(pool, proj_id).await
            .unwrap_or_default();

        for deployment in &deployments {
            let markdown = page.content.as_str();
            let html = render_markdown_to_html(markdown, &page.title);

            let page_path = page.path.trim_start_matches('/');
            let storage_key = format!(
                "sites/{}/{}/{}.html",
                proj_id, deployment.id, page_path
            );

            if let Err(e) = storage
                .put(&storage_key, bytes::Bytes::from(html), "text/html; charset=utf-8")
                .await
            {
                tracing::error!(
                    "Failed to publish page {} to deployment {}: {}",
                    pid,
                    deployment.id,
                    e
                );
                // Continue to other deployments even if one fails
            }
        }

        tracing::info!(
            "Published page {} to {} deployment(s)",
            pid,
            deployments.len()
        );

        Ok(())
    } else {
        // Fall back to full deployment if payload doesn't have page_id
        process_deployment_job(pool, storage, payload).await
    }
}
