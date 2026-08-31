//! Nibleaf Database Layer
//!
//! This crate provides hand-written SQLx queries organized by domain,
//! matching AppFlowy's libs/database pattern.
//!
//! Each domain has its own module with query functions that return
//! either row structs from nibleaf-entity or Result<T, AppError>.

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
pub mod search_index;
pub mod export;
pub mod asset;
pub mod usage;
pub mod notification;
pub mod platform_event;
pub mod analytics;
pub mod theme;
pub mod mcp;
pub mod auth;
pub mod openapi;

use nibleaf_error::AppError;
use sqlx::postgres::PgPoolOptions;

/// Database connection pool type
pub type PgPool = sqlx::PgPool;

/// Create a new database connection pool
pub async fn create_pool(database_url: &str) -> Result<PgPool, AppError> {
    let pool = PgPoolOptions::new()
        .max_connections(20)
        .connect(database_url)
        .await
        .map_err(|_e| AppError::DatabaseConnectionFailed)?;
    
    Ok(pool)
}

/// Run database migrations
/// 
/// This uses SQLx's migration runner. During the transition from Prisma,
/// we can use the existing Prisma migrations (which are plain SQL files)
/// or create new SQLx migrations.
pub async fn run_migrations(pool: &PgPool) -> Result<(), AppError> {
    sqlx::migrate!("../../migrations")
        .run(pool)
        .await
        .map_err(|e| {
            tracing::error!("Migration failed: {}", e);
            AppError::Database(e.into())
        })?;
    
    Ok(())
}

/// Test database connection
pub async fn test_connection(pool: &PgPool) -> Result<(), AppError> {
    sqlx::query("SELECT 1")
        .fetch_one(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
    
    Ok(())
}
