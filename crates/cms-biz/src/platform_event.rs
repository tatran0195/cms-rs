//! Platform Event Business Logic
//!
//! This module contains business logic for platform events (funnel tracking, etc.).

use chrono::Utc;
use cms_db::platform_event::PlatformEventQueries;
use cms_entity::{
    common::{Id, PaginatedResponse},
    platform_event::{CreatePlatformEventRequest, PlatformEvent, PlatformEventResponse},
};
use uuid::Uuid;

use crate::{AppError, BizContext};

/// Platform event service
pub struct PlatformEventService;

impl PlatformEventService {
    /// Create a platform event
    pub async fn create_event(
        ctx: &BizContext,
        org_id: Option<&str>,
        user_id: Option<&str>,
        request: CreatePlatformEventRequest,
    ) -> Result<PlatformEventResponse, AppError> {
        let event = PlatformEventQueries::create(
            &ctx.pool,
            org_id,
            user_id,
            &request.event_type,
            request.metadata,
        )
        .await?;

        Ok(event.into())
    }

    /// List platform events
    pub async fn list_events(
        ctx: &BizContext,
        user_id: &str,
        org_id: &str,
        event_type: Option<&str>,
        page: u64,
        page_size: u64,
    ) -> Result<PaginatedResponse<PlatformEventResponse>, AppError> {
        // Check if user has admin role in the organization
        ctx.authz
            .require_org_admin(user_id, org_id)
            .await?;

        let events = PlatformEventQueries::get_by_organization(
            &ctx.pool,
            Some(org_id),
            event_type,
            Some(page as i64),
            Some(page_size as i64),
        )
        .await?;

        let total =
            PlatformEventQueries::count_by_organization(&ctx.pool, Some(org_id), event_type)
                .await?;

        Ok(PaginatedResponse::new(
            events.into_iter().map(|e| e.into()).collect(),
            total as u64,
            page,
            page_size,
        ))
    }

    /// Get a platform event by ID
    pub async fn get_event(
        ctx: &BizContext,
        user_id: &str,
        event_id: &str,
    ) -> Result<PlatformEventResponse, AppError> {
        let event = PlatformEventQueries::get_by_id(&ctx.pool, event_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Event not found".to_string()))?;
        if let Some(org_id) = &event.organization_id {
            ctx.authz
                .require_org_admin(user_id, org_id)
                .await?;
        }
        Ok(event.into())
    }

    /// Get system health
    pub async fn get_system_health(ctx: &BizContext) -> Result<serde_json::Value, AppError> {
        let start = std::time::Instant::now();
        let db_status = match cms_db::sqlx::query("SELECT 1").execute(&ctx.pool).await {
            Ok(_) => "connected",
            Err(e) => {
                tracing::error!("Database health check failed: {}", e);
                "disconnected"
            }
        };
        let latency_ms = start.elapsed().as_millis();
        let status = if db_status == "connected" {
            "healthy"
        } else {
            "degraded"
        };

        Ok(serde_json::json!({
            "status": status,
            "database": db_status,
            "database_latency_ms": latency_ms,
            "timestamp": Utc::now().to_rfc3339()
        }))
    }
}
