//! Common types used across the application

use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

/// Base identifier type for most entities
pub type Id = String;

/// Timestamp type
pub type Timestamp = DateTime<Utc>;

/// UUID type alias
pub type UuidString = String;

/// Pagination request
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct PaginationRequest {
    #[serde(default = "default_page")]
    pub page: u64,
    #[serde(default = "default_page_size")]
    pub page_size: u64,
}

fn default_page() -> u64 { 1 }
fn default_page_size() -> u64 { 20 }

/// Paginated response wrapper
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PaginatedResponse<T> {
    pub data: Vec<T>,
    pub total: u64,
    pub page: u64,
    pub page_size: u64,
    pub total_pages: u64,
}

impl<T> PaginatedResponse<T> {
    pub fn new(data: Vec<T>, total: u64, page: u64, page_size: u64) -> Self {
        let total_pages = if page_size > 0 {
            (total + page_size - 1) / page_size
        } else {
            0
        };
        
        Self {
            data,
            total,
            page,
            page_size,
            total_pages,
        }
    }
}

/// Sort order
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
#[serde(rename_all = "lowercase")]
pub enum SortOrder {
    Asc,
    Desc,
}

impl Default for SortOrder {
    fn default() -> Self {
        SortOrder::Asc
    }
}

/// Sort direction for queries
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SortRequest {
    pub field: String,
    #[serde(default)]
    pub order: SortOrder,
}

/// Health check response
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct HealthResponse {
    pub status: String,
    pub timestamp: Timestamp,
    pub version: String,
}

impl HealthResponse {
    pub fn ok(version: &str) -> Self {
        Self {
            status: "ok".to_string(),
            timestamp: Utc::now(),
            version: version.to_string(),
        }
    }
}

/// API response envelope (for non-paginated responses)
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ApiResponse<T> {
    pub data: T,
}

impl<T> ApiResponse<T> {
    pub fn new(data: T) -> Self {
        Self { data }
    }
}

/// Empty response for DELETE and other operations that don't return data
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EmptyResponse;

/// Success message response
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SuccessResponse {
    pub success: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub message: Option<String>,
}

impl SuccessResponse {
    pub fn ok() -> Self {
        Self {
            success: true,
            message: None,
        }
    }
    
    pub fn with_message(message: impl Into<String>) -> Self {
        Self {
            success: true,
            message: Some(message.into()),
        }
    }
}

/// Member role in an organization
#[derive(Debug, Clone, Copy, Serialize, Deserialize, PartialEq, Eq, PartialOrd, Ord, sqlx::Type)]
#[serde(rename_all = "lowercase")]
#[sqlx(type_name = "member_role", rename_all = "lowercase")]
pub enum MemberRole {
    Guest,
    /// Viewer = read-only access (alias for Guest level in access checks)
    Viewer,
    /// Editor = full content edit (alias for Member level in access checks)
    Editor,
    Member,
    Admin,
    Owner,
}


impl Default for MemberRole {
    fn default() -> Self {
        MemberRole::Member
    }
}

/// Project role
#[derive(Debug, Clone, Copy, Serialize, Deserialize, PartialEq, Eq)]
#[serde(rename_all = "lowercase")]
pub enum ProjectRole {
    Admin,
    Editor,
    Viewer,
}

impl Default for ProjectRole {
    fn default() -> Self {
        ProjectRole::Viewer
    }
}

/// Entity audit information
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AuditInfo {
    pub created_at: Timestamp,
    pub updated_at: Timestamp,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub created_by: Option<Id>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub updated_by: Option<Id>,
}

impl AuditInfo {
    pub fn new(created_by: Option<Id>, updated_by: Option<Id>) -> Self {
        let now = Utc::now();
        Self {
            created_at: now,
            updated_at: now,
            created_by,
            updated_by,
        }
    }
}

/// Filter operators for query parameters
#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq)]
#[serde(rename_all = "lowercase")]
pub enum FilterOperator {
    Eq,
    Ne,
    Gt,
    Gte,
    Lt,
    Lte,
    Contains,
    StartsWith,
    EndsWith,
    In,
    NotIn,
    IsNull,
    IsNotNull,
}

/// Filter condition for queries
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct FilterCondition {
    pub field: String,
    pub operator: FilterOperator,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub value: Option<serde_json::Value>,
}

#[cfg(test)]
mod tests {
    use super::*;
    
    #[test]
    fn test_pagination() {
        let items: Vec<i32> = (0..100).collect();
        let response = PaginatedResponse::new(items, 100, 1, 10);
        
        assert_eq!(response.total, 100);
        assert_eq!(response.page, 1);
        assert_eq!(response.page_size, 10);
        assert_eq!(response.total_pages, 10);
    }
    
    #[test]
    fn test_member_role_serialization() {
        let role = MemberRole::Owner;
        let json = serde_json::to_string(&role).unwrap();
        assert_eq!(json, "\"owner\"");
        
        let deserialized: MemberRole = serde_json::from_str(&json).unwrap();
        assert_eq!(deserialized, MemberRole::Owner);
    }
}
