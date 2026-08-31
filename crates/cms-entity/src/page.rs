//! Page entity types

use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use validator::Validate;

use crate::common::{Id, PaginatedResponse, Timestamp};

/// Page entity (simplified from Prisma Page model)
///
/// The page tree structure is maintained through parent/child relationships
/// with materialized path for efficient querying.
#[derive(Debug, Clone, Serialize, Deserialize, utoipa::ToSchema)]
pub struct Page {
    pub id: Id,
    pub project_id: Id,
    pub branch_id: Id,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub parent_id: Option<Id>,
    pub path: String, // Materialized path (e.g., "/docs/getting-started")
    pub slug: String,
    pub title: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,
    pub content: String, // Markdown/MDX content
    pub position: i32,   // Position in the tree for ordering
    #[serde(default)]
    pub is_published: bool,
    #[serde(default)]
    pub is_indexed: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

/// Page create request
#[derive(Debug, Clone, Deserialize, Serialize, Validate, utoipa::ToSchema)]
pub struct CreatePageRequest {
    #[validate(length(min = 1, message = "Project ID is required"))]
    pub project_id: String,
    #[validate(length(min = 1, message = "Branch ID is required"))]
    pub branch_id: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub parent_id: Option<Id>,
    #[validate(length(
        min = 1,
        max = 100,
        message = "Slug must be between 1 and 100 characters"
    ))]
    pub slug: String,
    #[validate(length(
        min = 1,
        max = 200,
        message = "Title must be between 1 and 200 characters"
    ))]
    pub title: String,
    #[serde(default)]
    #[validate(length(max = 500, message = "Description must be at most 500 characters"))]
    pub description: Option<String>,
    #[serde(default)]
    pub content: Option<String>,
    #[serde(default = "default_is_published")]
    pub is_published: bool,
}

fn default_is_published() -> bool {
    true
}

/// Page update request
#[derive(Debug, Clone, Deserialize, Serialize, utoipa::ToSchema)]
pub struct UpdatePageRequest {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub parent_id: Option<Id>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub slug: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub title: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub content: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub is_published: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub position: Option<i32>,
}

/// Page response (full page with all fields)
#[derive(Debug, Clone, Serialize, Deserialize, utoipa::ToSchema)]
pub struct PageResponse {
    pub id: Id,
    pub project_id: Id,
    pub branch_id: Id,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub parent_id: Option<Id>,
    pub path: String,
    pub slug: String,
    pub title: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,
    pub content: String,
    pub position: i32,
    pub is_published: bool,
    pub is_indexed: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl From<Page> for PageResponse {
    fn from(page: Page) -> Self {
        Self {
            id: page.id,
            project_id: page.project_id,
            branch_id: page.branch_id,
            parent_id: page.parent_id,
            path: page.path,
            slug: page.slug,
            title: page.title,
            description: page.description,
            content: page.content,
            position: page.position,
            is_published: page.is_published,
            is_indexed: page.is_indexed,
            created_at: page.created_at,
            updated_at: page.updated_at,
        }
    }
}

/// Page tree node (for tree listing)
#[derive(Debug, Clone, Serialize, Deserialize, utoipa::ToSchema)]
pub struct PageTreeNode {
    pub id: Id,
    pub project_id: Id,
    pub branch_id: Id,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub parent_id: Option<Id>,
    pub path: String,
    pub slug: String,
    pub title: String,
    pub position: i32,
    pub is_published: bool,
    pub has_children: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub children: Option<Vec<PageTreeNode>>,
}

/// Page list item (for flat listings)
#[derive(Debug, Clone, Serialize, Deserialize, utoipa::ToSchema)]
pub struct PageListItem {
    pub id: Id,
    pub project_id: Id,
    pub branch_id: Id,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub parent_id: Option<Id>,
    pub path: String,
    pub slug: String,
    pub title: String,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub content: Option<String>,
    pub position: i32,
    pub is_published: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

/// Page reorder request
#[derive(Debug, Clone, Deserialize, Serialize, utoipa::ToSchema)]
pub struct ReorderPagesRequest {
    pub page_ids: Vec<Id>,
}

/// List pages query parameters
#[derive(Debug, Clone, Deserialize, Serialize, utoipa::ToSchema)]
pub struct ListPagesQuery {
    pub project_id: Id,
    pub branch_id: Id,
    #[serde(default)]
    pub parent_id: Option<Id>,
    #[serde(default)]
    pub search: Option<String>,
    #[serde(default)]
    pub is_published: Option<bool>,
    #[serde(default = "default_tree")]
    pub tree: bool,
}

fn default_tree() -> bool {
    false
}

/// List pages response
pub type ListPagesResponse = PaginatedResponse<PageListItem>;

/// Get page tree response
pub type GetPageTreeResponse = Vec<PageTreeNode>;

/// Comment on a page
#[derive(Debug, Clone, Deserialize, Serialize, utoipa::ToSchema)]
pub struct PageComment {
    pub id: Id,
    pub page_id: Id,
    pub content: String,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_page_response_conversion() {
        let page = Page {
            id: "page-1".to_string(),
            project_id: "proj-1".to_string(),
            branch_id: "branch-1".to_string(),
            parent_id: None,
            path: "/docs/getting-started".to_string(),
            slug: "getting-started".to_string(),
            title: "Getting Started".to_string(),
            description: Some("Welcome to CMS".to_string()),
            content: "# Getting Started\n\nWelcome!".to_string(),
            position: 0,
            is_published: true,
            is_indexed: true,
            created_at: Utc::now(),
            updated_at: Utc::now(),
        };

        let response: PageResponse = page.into();
        assert_eq!(response.id, "page-1");
        assert_eq!(response.path, "/docs/getting-started");
    }
}
