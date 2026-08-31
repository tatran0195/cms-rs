//! Deployment database queries

use chrono::{DateTime, Utc};
use nibleaf_entity::deployment::{Deployment, DeploymentResponse, DeploymentStatus};
use nibleaf_entity::domain::{Domain, DomainResponse};
use nibleaf_error::AppError;
use sqlx::{FromRow, PgPool, QueryBuilder, Postgres, Row};
use uuid::Uuid;

/// Database representation of a deployment row
#[derive(Debug, FromRow)]
struct DeploymentRow {
    id: String,
    project_id: String,
    branch_id: Option<String>,
    status: DeploymentStatus,
    build_logs: Option<String>,
    error_message: Option<String>,
    deployed_at: Option<DateTime<Utc>>,
    created_at: DateTime<Utc>,
    updated_at: DateTime<Utc>,
}

/// Database representation of a domain row
#[derive(Debug, FromRow)]
struct DomainRow {
    id: String,
    deployment_id: String,
    hostname: String,
    is_primary: bool,
    ssl_certificate: Option<String>,
    ssl_certificate_expires_at: Option<DateTime<Utc>>,
    verified_at: Option<DateTime<Utc>>,
    created_at: DateTime<Utc>,
    updated_at: DateTime<Utc>,
}

impl From<DeploymentRow> for Deployment {
    fn from(row: DeploymentRow) -> Self {
        Self {
            id: row.id,
            project_id: row.project_id,
            branch_id: row.branch_id,
            status: row.status,
            build_logs: row.build_logs,
            error_message: row.error_message,
            deployed_at: row.deployed_at,
            created_at: row.created_at,
            updated_at: row.updated_at,
        }
    }
}

impl From<DeploymentRow> for DeploymentResponse {
    fn from(row: DeploymentRow) -> Self {
        Self {
            id: row.id,
            project_id: row.project_id,
            branch_id: row.branch_id,
            status: row.status,
            build_logs: row.build_logs,
            error_message: row.error_message,
            deployed_at: row.deployed_at,
            created_at: row.created_at,
            updated_at: row.updated_at,
        }
    }
}

impl From<DomainRow> for Domain {
    fn from(row: DomainRow) -> Self {
        Self {
            id: row.id,
            deployment_id: row.deployment_id,
            hostname: row.hostname,
            is_primary: row.is_primary,
            ssl_certificate: row.ssl_certificate,
            ssl_certificate_expires_at: row.ssl_certificate_expires_at,
            verified_at: row.verified_at,
            created_at: row.created_at,
            updated_at: row.updated_at,
        }
    }
}

impl From<DomainRow> for DomainResponse {
    fn from(row: DomainRow) -> Self {
        Self {
            id: row.id,
            deployment_id: row.deployment_id,
            hostname: row.hostname,
            is_primary: row.is_primary,
            ssl_certificate: row.ssl_certificate,
            ssl_certificate_expires_at: row.ssl_certificate_expires_at,
            verified_at: row.verified_at,
            is_verified: row.verified_at.is_some(),
            created_at: row.created_at,
            updated_at: row.updated_at,
        }
    }
}

/// Deployment queries
pub struct DeploymentQueries;

impl DeploymentQueries {
    /// Get a deployment by ID
    pub async fn get_by_id(pool: &PgPool, deployment_id: &str) -> Result<Option<Deployment>, AppError> {
        let row = sqlx::query_as::<_, DeploymentRow>(
            "SELECT * FROM \"Deployment\" WHERE id = $1"
        )
        .bind(deployment_id)
        .fetch_optional(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(row.map(|r| r.into()))
    }
    
    /// Get deployments by project
    pub async fn get_by_project(
        pool: &PgPool,
        project_id: &str,
        limit: Option<i64>,
        offset: Option<i64>,
    ) -> Result<Vec<Deployment>, AppError> {
        let mut query_builder: QueryBuilder<Postgres> = QueryBuilder::new(
            "SELECT * FROM \"Deployment\" WHERE project_id = "
        );
        query_builder.push_bind(project_id);
        
        query_builder.push(" ORDER BY created_at DESC");
        
        if let Some(limit) = limit {
            query_builder.push(" LIMIT ");
            query_builder.push_bind(limit);
        }
        
        if let Some(offset) = offset {
            query_builder.push(" OFFSET ");
            query_builder.push_bind(offset);
        }
        
        let rows = query_builder
            .build_query_as::<DeploymentRow>()
            .fetch_all(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(rows.into_iter().map(|r| r.into()).collect())
    }
    
    /// Count deployments by project
    pub async fn count_by_project(pool: &PgPool, project_id: &str) -> Result<i64, AppError> {
        let count: i64 = sqlx::query_scalar(
            "SELECT COUNT(*) FROM \"Deployment\" WHERE project_id = $1"
        )
        .bind(project_id)
        .fetch_one(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(count)
    }
    
    /// Create a new deployment
    pub async fn create(
        pool: &PgPool,
        project_id: &str,
        branch_id: &str,
        status: DeploymentStatus,
    ) -> Result<Deployment, AppError> {
        let id = Uuid::new_v4().to_string();
        let now = Utc::now();
        
        let row = sqlx::query_as::<_, DeploymentRow>(
            r#"
            INSERT INTO "Deployment" (id, project_id, branch_id, status, created_at, updated_at)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
            "#
        )
        .bind(&id)
        .bind(project_id)
        .bind(branch_id)
        .bind(status)
        .bind(now)
        .bind(now)
        .fetch_one(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(row.into())
    }
    
    /// Update a deployment
    pub async fn update(
        pool: &PgPool,
        deployment_id: &str,
        branch_id: Option<&str>,
    ) -> Result<Deployment, AppError> {
        let mut query_builder: QueryBuilder<Postgres> = QueryBuilder::new(
            "UPDATE \"Deployment\" SET "
        );
        
        if let Some(branch_id) = branch_id {
            query_builder.push("branch_id = ");
            query_builder.push_bind(branch_id);
        }
        
        query_builder.push(", updated_at = ");
        query_builder.push_bind(Utc::now());
        query_builder.push(" WHERE id = ");
        query_builder.push_bind(deployment_id);
        query_builder.push(" RETURNING *");
        
        let row = query_builder
            .build_query_as::<DeploymentRow>()
            .fetch_one(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(row.into())
    }
    
    /// Update deployment status
    pub async fn update_status(
        pool: &PgPool,
        deployment_id: &str,
        status: DeploymentStatus,
    ) -> Result<Deployment, AppError> {
        let row = sqlx::query_as::<_, DeploymentRow>(
            "UPDATE \"Deployment\" SET status = $1, updated_at = $2 WHERE id = $3 RETURNING *"
        )
        .bind(status)
        .bind(Utc::now())
        .bind(deployment_id)
        .fetch_one(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(row.into())
    }
    
    /// Update deployment with error
    pub async fn update_error(
        pool: &PgPool,
        deployment_id: &str,
        error_message: &str,
    ) -> Result<Deployment, AppError> {
        let row = sqlx::query_as::<_, DeploymentRow>(
            "UPDATE \"Deployment\" SET error_message = $1, status = $2, updated_at = $3 WHERE id = $4 RETURNING *"
        )
        .bind(error_message)
        .bind(DeploymentStatus::Failed)
        .bind(Utc::now())
        .bind(deployment_id)
        .fetch_one(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(row.into())
    }
    
    /// Update deployment as deployed
    pub async fn update_deployed_at(pool: &PgPool, deployment_id: &str) -> Result<Deployment, AppError> {
        let row = sqlx::query_as::<_, DeploymentRow>(
            "UPDATE \"Deployment\" SET deployed_at = $1, status = $2, updated_at = $3 WHERE id = $4 RETURNING *"
        )
        .bind(Utc::now())
        .bind(DeploymentStatus::Active)
        .bind(Utc::now())
        .bind(deployment_id)
        .fetch_one(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(row.into())
    }
    
    /// Update deployment build logs
    pub async fn update_build_logs(
        pool: &PgPool,
        deployment_id: &str,
        logs: &str,
    ) -> Result<Deployment, AppError> {
        let row = sqlx::query_as::<_, DeploymentRow>(
            "UPDATE \"Deployment\" SET build_logs = $1, updated_at = $2 WHERE id = $3 RETURNING *"
        )
        .bind(logs)
        .bind(Utc::now())
        .bind(deployment_id)
        .fetch_one(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(row.into())
    }
    
    /// Delete a deployment
    pub async fn delete(pool: &PgPool, deployment_id: &str) -> Result<bool, AppError> {
        let result = sqlx::query("DELETE FROM \"Deployment\" WHERE id = $1")
            .bind(deployment_id)
            .execute(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(result.rows_affected() > 0)
    }
}

/// Domain queries
pub struct DomainQueries;

impl DomainQueries {
    /// Get a domain by ID
    pub async fn get_by_id(pool: &PgPool, domain_id: &str) -> Result<Option<Domain>, AppError> {
        let row = sqlx::query_as::<_, DomainRow>(
            "SELECT * FROM \"Domain\" WHERE id = $1"
        )
        .bind(domain_id)
        .fetch_optional(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(row.map(|r| r.into()))
    }
    
    /// Get a domain by hostname
    pub async fn get_by_hostname(pool: &PgPool, hostname: &str) -> Result<Option<Domain>, AppError> {
        let row = sqlx::query_as::<_, DomainRow>(
            "SELECT * FROM \"Domain\" WHERE hostname = $1"
        )
        .bind(hostname)
        .fetch_optional(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(row.map(|r| r.into()))
    }
    
    /// Get domains by deployment
    pub async fn get_by_deployment(pool: &PgPool, deployment_id: &str) -> Result<Vec<Domain>, AppError> {
        let rows = sqlx::query_as::<_, DomainRow>(
            "SELECT * FROM \"Domain\" WHERE deployment_id = $1"
        )
        .bind(deployment_id)
        .fetch_all(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(rows.into_iter().map(|r| r.into()).collect())
    }
    
    /// Get primary domain for a deployment
    pub async fn get_primary_by_deployment(
        pool: &PgPool,
        deployment_id: &str,
    ) -> Result<Option<Domain>, AppError> {
        let row = sqlx::query_as::<_, DomainRow>(
            "SELECT * FROM \"Domain\" WHERE deployment_id = $1 AND is_primary = true LIMIT 1"
        )
        .bind(deployment_id)
        .fetch_optional(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(row.map(|r| r.into()))
    }
    
    /// Create a new domain
    pub async fn create(
        pool: &PgPool,
        deployment_id: &str,
        hostname: &str,
        is_primary: bool,
    ) -> Result<Domain, AppError> {
        // If this is the primary domain, clear any existing primary
        if is_primary {
            sqlx::query("UPDATE \"Domain\" SET is_primary = false WHERE deployment_id = $1")
                .bind(deployment_id)
                .execute(pool)
                .await
                .map_err(|e| AppError::Database(e.into()))?;
        }
        
        let id = Uuid::new_v4().to_string();
        let now = Utc::now();
        
        let row = sqlx::query_as::<_, DomainRow>(
            r#"
            INSERT INTO "Domain" (id, deployment_id, hostname, is_primary, created_at, updated_at)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
            "#
        )
        .bind(&id)
        .bind(deployment_id)
        .bind(hostname)
        .bind(is_primary)
        .bind(now)
        .bind(now)
        .fetch_one(pool)
        .await
        .map_err(|e| {
            if e.to_string().contains("duplicate key") {
                AppError::Conflict("Domain already exists".to_string())
            } else {
                AppError::Database(e.into())
            }
        })?;
        
        Ok(row.into())
    }
    
    /// Update a domain
    pub async fn update(
        pool: &PgPool,
        domain_id: &str,
        is_primary: Option<bool>,
    ) -> Result<Domain, AppError> {
        let mut query_builder: QueryBuilder<Postgres> = QueryBuilder::new(
            "UPDATE \"Domain\" SET "
        );
        
        if let Some(is_primary) = is_primary {
            query_builder.push("is_primary = ");
            query_builder.push_bind(is_primary);
        }
        
        query_builder.push(", updated_at = ");
        query_builder.push_bind(Utc::now());
        query_builder.push(" WHERE id = ");
        query_builder.push_bind(domain_id);
        query_builder.push(" RETURNING *");
        
        let row = query_builder
            .build_query_as::<DomainRow>()
            .fetch_one(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(row.into())
    }
    
    /// Verify a domain
    pub async fn verify(pool: &PgPool, domain_id: &str) -> Result<Domain, AppError> {
        let row = sqlx::query_as::<_, DomainRow>(
            "UPDATE \"Domain\" SET verified_at = $1, updated_at = $2 WHERE id = $3 RETURNING *"
        )
        .bind(Utc::now())
        .bind(Utc::now())
        .bind(domain_id)
        .fetch_one(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(row.into())
    }
    
    /// Delete a domain
    pub async fn delete(pool: &PgPool, domain_id: &str) -> Result<bool, AppError> {
        let result = sqlx::query("DELETE FROM \"Domain\" WHERE id = $1")
            .bind(domain_id)
            .execute(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(result.rows_affected() > 0)
    }
}
