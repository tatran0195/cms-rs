//! Nibleaf Business Logic Layer
//!
//! This crate contains the business logic (use cases) for Nibleaf, organized by domain.
//! Following AppFlowy's pattern, biz functions take already-resolved dependencies
//! (pool, identity, access-control) as parameters, making them unit-testable
//! without the web framework.
//!
//! Each domain module contains functions that orchestrate multi-step operations,
//! calling several database functions in sequence. This is not a behavior change
//! from the TypeScript actions, only a crate-boundary change.

pub mod org;
pub mod project;
pub mod page;
pub mod branch;
pub mod language;
pub mod git;
pub mod integration;
pub mod deployment;
pub mod domain;
pub mod reader_access;
pub mod comment;
pub mod search;
pub mod export;
pub mod openapi;
pub mod usage;
pub mod entitlement;
pub mod notification;
pub mod asset;
pub mod analytics;
pub mod theme;
pub mod platform_event;
pub mod mcp;
pub mod auth;
pub mod email;
pub mod queue;

// Re-export commonly used types
pub use nibleaf_db::PgPool;
pub use nibleaf_entity::*;
pub use nibleaf_error::AppError;

/// Business context passed to most biz functions
/// 
/// This struct contains the common dependencies needed by business logic functions.
#[derive(Clone)]
pub struct BizContext {
    pub pool: PgPool,
    pub access_control: std::sync::Arc<dyn nibleaf_access_control::AccessControl>,
}

impl BizContext {
    /// Create a new BizContext
    pub fn new(
        pool: PgPool,
        access_control: std::sync::Arc<dyn nibleaf_access_control::AccessControl>,
    ) -> Self {
        Self {
            pool,
            access_control,
        }
    }
}
