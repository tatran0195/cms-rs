//! Domain database queries

use chrono::{DateTime, Utc};
use cms_entity::domain::{Domain, DomainResponse};
use cms_error::AppError;
use sqlx::{FromRow, PgPool, Postgres, QueryBuilder};
use uuid::Uuid;

// ============================================
// Domain
// ============================================

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

/// Domain queries
pub struct DomainQueries;

impl DomainQueries {
    /// Get domain by ID
    pub async fn get_by_id(pool: &PgPool, domain_id: &str) -> Result<Option<Domain>, AppError> {
        let row = sqlx::query_as::<_, DomainRow>("SELECT * FROM \"Domain\" WHERE id = $1")
            .bind(domain_id)
            .fetch_optional(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;

        Ok(row.map(|r| r.into()))
    }

    /// Get domain by hostname
    pub async fn get_by_hostname(
        pool: &PgPool,
        hostname: &str,
    ) -> Result<Option<Domain>, AppError> {
        let row = sqlx::query_as::<_, DomainRow>("SELECT * FROM \"Domain\" WHERE hostname = $1")
            .bind(hostname)
            .fetch_optional(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;

        Ok(row.map(|r| r.into()))
    }

    /// Get domains by deployment ID
    pub async fn get_by_deployment(
        pool: &PgPool,
        deployment_id: &str,
    ) -> Result<Vec<Domain>, AppError> {
        let rows = sqlx::query_as::<_, DomainRow>(
            "SELECT * FROM \"Domain\" WHERE deployment_id = $1 ORDER BY is_primary DESC, \
             created_at ASC",
        )
        .bind(deployment_id)
        .fetch_all(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;

        Ok(rows.into_iter().map(|r| r.into()).collect())
    }

    /// Create a new domain
    pub async fn create(
        pool: &PgPool,
        deployment_id: &str,
        hostname: &str,
        is_primary: bool,
    ) -> Result<Domain, AppError> {
        let id = Uuid::new_v4().to_string();
        let now = Utc::now();

        let row = sqlx::query_as::<_, DomainRow>(
            r#"
            INSERT INTO "Domain" (id, deployment_id, hostname, is_primary, created_at, updated_at)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING *
            "#,
        )
        .bind(&id)
        .bind(deployment_id)
        .bind(hostname)
        .bind(is_primary)
        .bind(now)
        .bind(now)
        .fetch_one(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;

        Ok(row.into())
    }

    /// Update a domain
    pub async fn update(
        pool: &PgPool,
        domain_id: &str,
        hostname: Option<&str>,
        is_primary: Option<bool>,
        ssl_certificate: Option<&str>,
        ssl_certificate_expires_at: Option<DateTime<Utc>>,
    ) -> Result<Domain, AppError> {
        let mut query_builder: QueryBuilder<Postgres> = QueryBuilder::new("UPDATE \"Domain\" SET ");

        let mut has_updates = false;
        if let Some(hostname) = hostname {
            query_builder.push("hostname = ");
            query_builder.push_bind(hostname);
            has_updates = true;
        }
        if let Some(is_primary) = is_primary {
            if has_updates {
                query_builder.push(", ");
            }
            query_builder.push("is_primary = ");
            query_builder.push_bind(is_primary);
            has_updates = true;
        }
        if let Some(ssl_certificate) = ssl_certificate {
            if has_updates {
                query_builder.push(", ");
            }
            query_builder.push("ssl_certificate = ");
            query_builder.push_bind(ssl_certificate);
            has_updates = true;
        }
        if let Some(ssl_certificate_expires_at) = ssl_certificate_expires_at {
            if has_updates {
                query_builder.push(", ");
            }
            query_builder.push("ssl_certificate_expires_at = ");
            query_builder.push_bind(ssl_certificate_expires_at);
            has_updates = true;
        }

        if has_updates {
            query_builder.push(", ");
        }
        query_builder.push("updated_at = ");
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
            "UPDATE \"Domain\" SET verified_at = $1, updated_at = $2 WHERE id = $3 RETURNING *",
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

    /// Check if a hostname is available (not taken by another domain)
    pub async fn is_hostname_available(
        pool: &PgPool,
        hostname: &str,
        exclude_domain_id: Option<&str>,
    ) -> Result<bool, AppError> {
        let count: i64 = if let Some(domain_id) = exclude_domain_id {
            sqlx::query_scalar(r#"SELECT COUNT(*) FROM "Domain" WHERE hostname = $1 AND id != $2"#)
                .bind(hostname)
                .bind(domain_id)
                .fetch_one(pool)
                .await
                .map_err(|e| AppError::Database(e.into()))?
        } else {
            sqlx::query_scalar(r#"SELECT COUNT(*) FROM "Domain" WHERE hostname = $1"#)
                .bind(hostname)
                .fetch_one(pool)
                .await
                .map_err(|e| AppError::Database(e.into()))?
        };

        Ok(count == 0)
    }

    /// Get primary domain for a deployment
    pub async fn get_primary_by_deployment(
        pool: &PgPool,
        deployment_id: &str,
    ) -> Result<Option<Domain>, AppError> {
        let row = sqlx::query_as::<_, DomainRow>(
            "SELECT * FROM \"Domain\" WHERE deployment_id = $1 AND is_primary = true LIMIT 1",
        )
        .bind(deployment_id)
        .fetch_optional(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;

        Ok(row.map(|r| r.into()))
    }
}
