//! Nibleaf Entity Types
//!
//! This crate contains wire-shape DTOs (request/response types) with zero
//! database dependency, following AppFlowy's database-entity pattern.
//!
//! Unlike AppFlowy which has two DTO layers (database-entity for storage
//! shape and shared-entity for wire shape), Nibleaf uses a single crate
//! since the Prisma-generated types already serve as both storage and API
//! shapes with no friction.
//!
//! This crate exists so that nibleaf-api and any future codegen tooling
//! can depend on the same types without pulling in the database crate.

pub mod auth;
pub mod common;
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
pub mod notification;
pub mod asset;
pub mod analytics;
pub mod theme;
pub mod platform_event;
pub mod mcp;
pub mod email;

// Re-export commonly used types
pub use common::*;
pub use auth::*;
pub use org::*;
pub use project::*;
pub use page::*;
pub use branch::*;
pub use language::*;
pub use git::*;
pub use integration::*;
pub use deployment::*;
pub use domain::*;
pub use reader_access::*;
pub use comment::*;
pub use search::*;
pub use export::*;
pub use openapi::*;
pub use usage::*;
pub use notification::*;
pub use asset::*;
pub use analytics::*;
pub use theme::*;
pub use platform_event::*;
pub use mcp::*;
pub use email::*;

