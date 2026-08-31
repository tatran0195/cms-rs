//! Analytics database queries

use chrono::{DateTime, Utc};
use cms_entity::analytics::AnalyticsEvent;
use cms_error::AppError;
use sqlx::{FromRow, PgPool, QueryBuilder, Postgres, Row};
use uuid::Uuid;

// Note: AnalyticsEvent is already defined in usage.rs
// This module provides additional analytics-specific queries

/// Analytics queries
pub struct AnalyticsQueries;

impl AnalyticsQueries {
    /// Get page view count for a project
    pub async fn get_page_view_count(
        pool: &PgPool,
        project_id: &str,
        start_date: Option<DateTime<Utc>>,
        end_date: Option<DateTime<Utc>>,
    ) -> Result<i64, AppError> {
        let mut query_builder: QueryBuilder<Postgres> = QueryBuilder::new(
            "SELECT COUNT(*) as count FROM \"AnalyticsEvent\" WHERE project_id = $1 AND event_type = 'page_view'"
        );
        query_builder.push_bind(project_id);
        
        if let Some(start) = start_date {
            query_builder.push(" AND created_at >= ");
            query_builder.push_bind(start);
        }
        
        if let Some(end) = end_date {
            query_builder.push(" AND created_at <= ");
            query_builder.push_bind(end);
        }
        
        let count: i64 = query_builder
            .build()
            .fetch_one(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?
            .get::<i64, _>("count");
        
        Ok(count)
    }
    
    /// Get search count for a project
    pub async fn get_search_count(
        pool: &PgPool,
        project_id: &str,
        start_date: Option<DateTime<Utc>>,
        end_date: Option<DateTime<Utc>>,
    ) -> Result<i64, AppError> {
        let mut query_builder: QueryBuilder<Postgres> = QueryBuilder::new(
            "SELECT COUNT(*) as count FROM \"AnalyticsEvent\" WHERE project_id = $1 AND event_type = 'search'"
        );
        query_builder.push_bind(project_id);
        
        if let Some(start) = start_date {
            query_builder.push(" AND created_at >= ");
            query_builder.push_bind(start);
        }
        
        if let Some(end) = end_date {
            query_builder.push(" AND created_at <= ");
            query_builder.push_bind(end);
        }
        
        let count: i64 = query_builder
            .build()
            .fetch_one(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?
            .get::<i64, _>("count");
        
        Ok(count)
    }
    
    /// Get unique user count for a project
    pub async fn get_unique_user_count(
        pool: &PgPool,
        project_id: &str,
        start_date: Option<DateTime<Utc>>,
        end_date: Option<DateTime<Utc>>,
    ) -> Result<i64, AppError> {
        let mut query_builder: QueryBuilder<Postgres> = QueryBuilder::new(
            "SELECT COUNT(DISTINCT user_id) as count FROM \"AnalyticsEvent\" WHERE project_id = $1"
        );
        query_builder.push_bind(project_id);
        
        if let Some(start) = start_date {
            query_builder.push(" AND created_at >= ");
            query_builder.push_bind(start);
        }
        
        if let Some(end) = end_date {
            query_builder.push(" AND created_at <= ");
            query_builder.push_bind(end);
        }
        
        let count: i64 = query_builder
            .build()
            .fetch_one(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?
            .get::<i64, _>("count");
        
        Ok(count)
    }
    
    /// Get most viewed pages for a project
    pub async fn get_most_viewed_pages(
        pool: &PgPool,
        project_id: &str,
        limit: i64,
        start_date: Option<DateTime<Utc>>,
        end_date: Option<DateTime<Utc>>,
    ) -> Result<Vec<(String, i64)>, AppError> {
        // This would query a separate page_views table or parse metadata
        // For now, return a placeholder
        Ok(Vec::new())
    }
}

/// Analytics event queries (alias for AnalyticsQueries for API compatibility)
///
/// Provides CRUD operations for analytics events in the AnalyticsEvent table.
pub struct AnalyticsEventQueries;

impl AnalyticsEventQueries {
    /// Create an analytics event
    pub async fn create(
        pool: &PgPool,
        org_id: Option<&str>,
        project_id: Option<&str>,
        user_id: Option<&str>,
        event_type: &str,
        metadata: serde_json::Value,
        ip_address: Option<&str>,
        user_agent: Option<&str>,
    ) -> Result<cms_entity::analytics::AnalyticsEvent, AppError> {
        let id = Uuid::new_v4().to_string();
        let now = Utc::now();
        
        let row = sqlx::query_as::<_, AnalyticsEventRow>(
            r#"
            INSERT INTO "AnalyticsEvent" (id, organization_id, project_id, user_id, event_type, metadata, ip_address, user_agent, created_at)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RETURNING *
            "#
        )
        .bind(&id)
        .bind(org_id)
        .bind(project_id)
        .bind(user_id)
        .bind(event_type)
        .bind(metadata)
        .bind(ip_address)
        .bind(user_agent)
        .bind(now)
        .fetch_one(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(row.into())
    }
    
    /// List analytics events for a project
    pub async fn list_by_project(
        pool: &PgPool,
        project_id: &str,
        limit: Option<i64>,
        offset: Option<i64>,
    ) -> Result<Vec<cms_entity::analytics::AnalyticsEvent>, AppError> {
        let limit = limit.unwrap_or(100);
        let offset = offset.unwrap_or(0);
        
        let rows = sqlx::query_as::<_, AnalyticsEventRow>(
            r#"SELECT * FROM "AnalyticsEvent" WHERE project_id = $1 ORDER BY created_at DESC LIMIT $2 OFFSET $3"#
        )
        .bind(project_id)
        .bind(limit)
        .bind(offset)
        .fetch_all(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(rows.into_iter().map(|r| r.into()).collect())
    }

    /// Query analytics events with flexible filters
    pub async fn query(
        pool: &PgPool,
        project_id: Option<&str>,
        user_id: Option<&str>,
        event_type: Option<&str>,
        start_date: Option<chrono::DateTime<chrono::Utc>>,
        end_date: Option<chrono::DateTime<chrono::Utc>>,
        limit: i64,
        offset: i64,
    ) -> Result<Vec<cms_entity::analytics::AnalyticsEvent>, AppError> {
        let mut conditions: Vec<String> = Vec::new();
        let mut idx = 1usize;

        if project_id.is_some() { conditions.push(format!("project_id = ${}", idx)); idx += 1; }
        if user_id.is_some() { conditions.push(format!("user_id = ${}", idx)); idx += 1; }
        if event_type.is_some() { conditions.push(format!("event_type = ${}", idx)); idx += 1; }
        if start_date.is_some() { conditions.push(format!("created_at >= ${}", idx)); idx += 1; }
        if end_date.is_some() { conditions.push(format!("created_at <= ${}", idx)); idx += 1; }

        let where_clause = if conditions.is_empty() {
            String::new()
        } else {
            format!("WHERE {}", conditions.join(" AND "))
        };

        let sql = format!(
            r#"SELECT * FROM "AnalyticsEvent" {} ORDER BY created_at DESC LIMIT ${} OFFSET ${}"#,
            where_clause, idx, idx + 1
        );

        let mut q = sqlx::query_as::<_, AnalyticsEventRow>(&sql);
        if let Some(v) = project_id { q = q.bind(v); }
        if let Some(v) = user_id { q = q.bind(v); }
        if let Some(v) = event_type { q = q.bind(v); }
        if let Some(v) = start_date { q = q.bind(v); }
        if let Some(v) = end_date { q = q.bind(v); }
        q = q.bind(limit).bind(offset);

        let rows = q.fetch_all(pool).await.map_err(|e| AppError::Database(e.into()))?;
        Ok(rows.into_iter().map(|r| r.into()).collect())
    }
}


/// Analytics event row from the database
#[derive(Debug, sqlx::FromRow)]
struct AnalyticsEventRow {
    id: String,
    organization_id: Option<String>,
    project_id: Option<String>,
    user_id: Option<String>,
    event_type: String,
    metadata: serde_json::Value,
    ip_address: Option<String>,
    user_agent: Option<String>,
    created_at: DateTime<Utc>,
}

impl From<AnalyticsEventRow> for cms_entity::analytics::AnalyticsEvent {
    fn from(row: AnalyticsEventRow) -> Self {
        Self {
            id: row.id,
            organization_id: row.organization_id,
            project_id: row.project_id,
            user_id: row.user_id,
            event_type: row.event_type,
            metadata: row.metadata,
            ip_address: row.ip_address,
            user_agent: row.user_agent,
            created_at: row.created_at,
        }
    }
}

