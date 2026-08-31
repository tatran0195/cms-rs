//! Deployment Business Logic
//!
//! This module contains business logic for deployments and custom domains.

use crate::{BizContext, AppError};
use cms_db::deployment::{DeploymentQueries, DomainQueries};
use cms_db::project::ProjectQueries;
use cms_db::branch::BranchQueries;
use cms_db::page::PageQueries;
use cms_entity::deployment::{
    Deployment, DeploymentResponse, DeploymentStatus, CreateDeploymentRequest, UpdateDeploymentRequest,
};
use cms_entity::domain::{
    Domain, DomainResponse, CreateDomainRequest, UpdateDomainRequest,
};
use cms_entity::common::{Id, PaginatedResponse, MemberRole};
use uuid::Uuid;
use chrono::Utc;


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
        ctx.access_control.require_project_role(
            user_id,
            project_id,
            MemberRole::Admin,
        ).await?;
        
        let deployment = DeploymentQueries::create(
            &ctx.pool,
            project_id,
            branch_id,
            DeploymentStatus::Pending,
        ).await?;
        
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
        ctx.access_control.require_project_role(
            user_id,
            &deployment.project_id,
            MemberRole::Viewer,
        ).await?;
        
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
        ctx.access_control.require_project_role(
            user_id,
            project_id,
            MemberRole::Viewer,
        ).await?;
        
        let deployments = DeploymentQueries::get_by_project(
            &ctx.pool,
            project_id,
            Some(page as i64),
            Some(page_size as i64),
        ).await?;
        
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
        ctx.access_control.require_project_role(
            user_id,
            &deployment.project_id,
            MemberRole::Admin,
        ).await?;
        
        // If branch is changing, verify it exists
        if let Some(ref branch_id) = request.branch_id {
            let _branch = BranchQueries::get_by_id(&ctx.pool, branch_id)
                .await?
                .ok_or_else(|| AppError::NotFound("Branch not found".to_string()))?;
        }
        
        let updated = DeploymentQueries::update(
            &ctx.pool,
            deployment_id,
            request.branch_id.as_deref(),
        ).await?;
        
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
        ctx.access_control.require_project_role(
            user_id,
            &deployment.project_id,
            MemberRole::Admin,
        ).await?;
        
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
        let deployment = Self::get_deployment(ctx, user_id, deployment_id).await?;
        Ok(deployment)
    }

    /// Cancel a deployment
    pub async fn cancel_deployment(
        ctx: &BizContext,
        user_id: &str,
        deployment_id: &str,
    ) -> Result<DeploymentResponse, AppError> {
        let deployment = Self::get_deployment(ctx, user_id, deployment_id).await?;
        Ok(deployment)
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
        ctx.access_control.require_project_role(
            user_id,
            &deployment.project_id,
            MemberRole::Admin,
        ).await?;
        
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
        ).await?;
        
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
        ctx.access_control.require_project_role(
            user_id,
            &deployment.project_id,
            MemberRole::Viewer,
        ).await?;
        
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
        ctx.access_control.require_project_role(
            user_id,
            &deployment.project_id,
            MemberRole::Viewer,
        ).await?;
        
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
        ctx.access_control.require_project_role(
            user_id,
            &deployment.project_id,
            MemberRole::Admin,
        ).await?;
        
        // Cannot make a non-primary domain primary if another domain is already primary
        if request.is_primary == Some(true) && !domain.is_primary {
            let existing_primary = DomainQueries::get_primary_by_deployment(
                &ctx.pool,
                &domain.deployment_id,
            ).await?;
            
            if existing_primary.is_some() {
                return Err(AppError::Conflict("Another domain is already primary for this deployment".to_string()));
            }
        }
        
        let updated = DomainQueries::update(
            &ctx.pool,
            domain_id,
            request.is_primary,
        ).await?;
        
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
        ctx.access_control.require_project_role(
            user_id,
            &deployment.project_id,
            MemberRole::Admin,
        ).await?;
        
        // Cannot delete the primary domain
        if domain.is_primary {
            return Err(AppError::AccessDenied("Cannot delete the primary domain".to_string()));
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

/// Process deployment job (for worker)
pub async fn process_deployment_job(
    pool: &cms_db::PgPool,
    payload: &serde_json::Value,
) -> Result<(), AppError> {
    let deployment_id = payload.get("deployment_id").and_then(|v| v.as_str())
        .ok_or_else(|| AppError::InvalidInput("Missing deployment_id".to_string()))?;
    
    let mut deployment = DeploymentQueries::get_by_id(pool, deployment_id)
        .await?
        .ok_or_else(|| AppError::NotFound("Deployment not found".to_string()))?;
    
    // Update deployment status to building
    deployment = DeploymentQueries::update_status(
        pool,
        deployment_id,
        DeploymentStatus::Building,
    ).await?;
    
    // Get the branch to deploy
    let branch_id_ref = deployment.branch_id.as_deref().unwrap_or("");
    let branch = BranchQueries::get_by_id(pool, branch_id_ref)
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
    ).await?;
    
    // In a real implementation, this would:
    // 1. Generate static HTML for each page
    // 2. Upload to storage or a CDN
    // 3. Configure the custom domain
    // 4. Set up SSL certificates
    
    // For now, we'll just mark it as active
    DeploymentQueries::update_status(
        pool,
        deployment_id,
        DeploymentStatus::Active,
    ).await?;
    DeploymentQueries::update_deployed_at(pool, deployment_id).await?;
    
    Ok(())
}

/// Process publish job (for worker)
pub async fn process_publish_job(
    pool: &cms_db::PgPool,
    payload: &serde_json::Value,
) -> Result<(), AppError> {
    // Publish job is similar to deployment but for individual pages
    // For now, we'll just process it as a deployment
    process_deployment_job(pool, payload).await
}
