//! Domain Business Logic
//!
//! This module contains business logic for custom domains.
//! Note: Most domain logic is in the deployment module, this is for
//! domain-specific operations that don't involve deployments.

use cms_db::{domain::DomainQueries, project::ProjectQueries};
use cms_entity::{
    common::{Id, MemberRole},
    domain::{Domain, DomainResponse},
};

use crate::{AppError, BizContext};

/// Domain service
pub struct DomainService;

impl DomainService {
    /// Verify domain ownership
    pub async fn verify_domain_ownership(
        ctx: &BizContext,
        user_id: &str,
        domain_id: &str,
        verification_token: &str,
    ) -> Result<bool, AppError> {
        let domain = DomainQueries::get_by_id(&ctx.pool, domain_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Domain not found".to_string()))?;

        let deployment =
            cms_db::deployment::DeploymentQueries::get_by_id(&ctx.pool, &domain.deployment_id)
                .await?
                .ok_or_else(|| AppError::NotFound("Deployment not found".to_string()))?;

        // Check if user has access to the project
        ctx.authz
            .require_project_role(user_id, &deployment.project_id, MemberRole::Admin)
            .await?;

        // In a real implementation, this would verify DNS records
        // For now, we'll just mark it as verified
        DomainQueries::verify(&ctx.pool, domain_id).await?;

        Ok(true)
    }

    /// Check if a domain is available
    pub async fn is_domain_available(ctx: &BizContext, hostname: &str) -> Result<bool, AppError> {
        let domain = DomainQueries::get_by_hostname(&ctx.pool, hostname).await?;
        Ok(domain.is_none())
    }

    /// Get domain by hostname
    pub async fn get_domain_by_hostname(
        ctx: &BizContext,
        hostname: &str,
    ) -> Result<Option<DomainResponse>, AppError> {
        let domain = DomainQueries::get_by_hostname(&ctx.pool, hostname).await?;
        Ok(domain.map(|d| d.into()))
    }

    /// List domains
    pub async fn list_domains(
        ctx: &BizContext,
        user_id: &str,
        deployment_id: Option<&str>,
        _is_primary: Option<bool>,
        _is_verified: Option<bool>,
    ) -> Result<Vec<DomainResponse>, AppError> {
        let deployment_id = deployment_id.unwrap_or("");
        crate::deployment::DeploymentService::list_domains(ctx, user_id, deployment_id).await
    }

    /// Create domain
    pub async fn create_domain(
        ctx: &BizContext,
        user_id: &str,
        request: cms_entity::domain::CreateDomainRequest,
    ) -> Result<DomainResponse, AppError> {
        let deployment_id = request.deployment_id.clone();
        crate::deployment::DeploymentService::create_domain(ctx, user_id, &deployment_id, request)
            .await
    }

    /// Get domain
    pub async fn get_domain(
        ctx: &BizContext,
        user_id: &str,
        domain_id: &str,
    ) -> Result<DomainResponse, AppError> {
        crate::deployment::DeploymentService::get_domain(ctx, user_id, domain_id).await
    }

    /// Update domain
    pub async fn update_domain(
        ctx: &BizContext,
        user_id: &str,
        domain_id: &str,
        request: cms_entity::domain::UpdateDomainRequest,
    ) -> Result<DomainResponse, AppError> {
        crate::deployment::DeploymentService::update_domain(ctx, user_id, domain_id, request).await
    }

    /// Delete domain
    pub async fn delete_domain(
        ctx: &BizContext,
        user_id: &str,
        domain_id: &str,
    ) -> Result<bool, AppError> {
        crate::deployment::DeploymentService::delete_domain(ctx, user_id, domain_id).await
    }

    /// Verify domain
    pub async fn verify_domain(
        ctx: &BizContext,
        user_id: &str,
        domain_id: &str,
        verification_token: &str,
    ) -> Result<cms_entity::domain::DomainVerificationResult, AppError> {
        let verified =
            Self::verify_domain_ownership(ctx, user_id, domain_id, verification_token).await?;
        let domain = DomainQueries::get_by_id(&ctx.pool, domain_id).await?;
        let hostname = domain.map(|d| d.hostname).unwrap_or_default();
        Ok(cms_entity::domain::DomainVerificationResult {
            domain_id: domain_id.to_string(),
            hostname,
            is_verified: verified,
            verification_token: Some(verification_token.to_string()),
        })
    }

    /// Set primary domain
    pub async fn set_primary_domain(
        ctx: &BizContext,
        user_id: &str,
        deployment_id: &str,
        domain_id: &str,
    ) -> Result<DomainResponse, AppError> {
        let deployment = cms_db::deployment::DeploymentQueries::get_by_id(&ctx.pool, deployment_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Deployment not found".to_string()))?;
        ctx.authz
            .require_project_role(user_id, &deployment.project_id, MemberRole::Admin)
            .await?;
        let updated =
            DomainQueries::update(&ctx.pool, domain_id, None, Some(true), None, None).await?;
        Ok(updated.into())
    }
}
