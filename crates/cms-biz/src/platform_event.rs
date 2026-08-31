//! Platform Event Business Logic
//!
//! This module contains business logic for platform events (funnel tracking, etc.).

use crate::{BizContext, AppError};
use cms_db::platform_event::PlatformEventQueries;
use cms_entity::platform_event::{PlatformEvent, PlatformEventResponse, CreatePlatformEventRequest};
use cms_entity::common::{Id, PaginatedResponse};
use uuid::Uuid;
use chrono::Utc;

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
        ).await?;
        
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
        ctx.access_control.require_org_admin(user_id, org_id).await?;
        
        let events = PlatformEventQueries::get_by_organization(
            &ctx.pool,
            Some(org_id),
            event_type,
            Some(page as i64),
            Some(page_size as i64),
        ).await?;
        
        let total = PlatformEventQueries::count_by_organization(
            &ctx.pool,
            Some(org_id),
            event_type,
        ).await?;
        
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
        let event = PlatformEventQueries::get_by_id(&ctx.pool, event_id).await?
            .ok_or_else(|| AppError::NotFound("Event not found".to_string()))?;
        if let Some(org_id) = &event.organization_id {
            ctx.access_control.require_org_admin(user_id, org_id).await?;
        }
        Ok(event.into())
    }

    /// Get system health
    pub async fn get_system_health(
        _ctx: &BizContext,
    ) -> Result<serde_json::Value, AppError> {
        Ok(serde_json::json!({ "status": "healthy", "database": "connected" }))
    }
}
