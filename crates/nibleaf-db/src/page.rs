//! Page database queries
//!
//! This module contains all database queries related to pages,
//! including the page tree structure with parent/child relationships.

use chrono::{DateTime, Utc};
use nibleaf_entity::page::{Page, PageListItem, PageTreeNode};
use nibleaf_error::AppError;
use sqlx::{FromRow, PgPool, QueryBuilder, Postgres, Row};
use uuid::Uuid;

/// Database representation of a page row
#[derive(Debug, FromRow)]
struct PageRow {
    id: String,
    project_id: String,
    branch_id: String,
    parent_id: Option<String>,
    path: String,
    slug: String,
    title: String,
    description: Option<String>,
    content: String,
    position: i32,
    is_published: bool,
    is_indexed: bool,
    created_at: DateTime<Utc>,
    updated_at: DateTime<Utc>,
}

/// Database representation of a page tree node for hierarchical queries
#[derive(Debug, FromRow)]
struct PageTreeRow {
    id: String,
    project_id: String,
    branch_id: String,
    parent_id: Option<String>,
    path: String,
    slug: String,
    title: String,
    position: i32,
    is_published: bool,
}

impl From<PageRow> for Page {
    fn from(row: PageRow) -> Self {
        Self {
            id: row.id,
            project_id: row.project_id,
            branch_id: row.branch_id,
            parent_id: row.parent_id,
            path: row.path,
            slug: row.slug,
            title: row.title,
            description: row.description,
            content: row.content,
            position: row.position,
            is_published: row.is_published,
            is_indexed: row.is_indexed,
            created_at: row.created_at,
            updated_at: row.updated_at,
        }
    }
}

impl From<PageRow> for PageListItem {
    fn from(row: PageRow) -> Self {
        Self {
            id: row.id,
            project_id: row.project_id,
            branch_id: row.branch_id,
            parent_id: row.parent_id,
            path: row.path,
            slug: row.slug,
            title: row.title,
            description: row.description.clone(),
            content: Some(row.content.clone()),
            position: row.position,
            is_published: row.is_published,
            created_at: row.created_at,
            updated_at: row.updated_at,
        }
    }
}

/// Page queries
pub struct PageQueries;

impl PageQueries {
    /// Get a page by ID
    pub async fn get_by_id(pool: &PgPool, page_id: &str) -> Result<Option<Page>, AppError> {
        let row = sqlx::query_as::<_, PageRow>(
            "SELECT * FROM \"Page\" WHERE id = $1"
        )
        .bind(page_id)
        .fetch_optional(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(row.map(|r| r.into()))
    }
    
    /// Get a page by path
    pub async fn get_by_path(
        pool: &PgPool,
        project_id: &str,
        branch_id: &str,
        path: &str,
    ) -> Result<Option<Page>, AppError> {
        let row = sqlx::query_as::<_, PageRow>(
            "SELECT * FROM \"Page\" WHERE project_id = $1 AND branch_id = $2 AND path = $3"
        )
        .bind(project_id)
        .bind(branch_id)
        .bind(path)
        .fetch_optional(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(row.map(|r| r.into()))
    }
    
    /// Get pages by project and branch
    pub async fn get_by_project_and_branch(
        pool: &PgPool,
        project_id: &str,
        branch_id: &str,
        parent_id: Option<&str>,
        is_published: Option<bool>,
        search: Option<&str>,
        limit: Option<i64>,
        offset: Option<i64>,
    ) -> Result<Vec<PageListItem>, AppError> {
        let mut query_builder: QueryBuilder<Postgres> = QueryBuilder::new(
            "SELECT id, project_id, branch_id, parent_id, path, slug, title, position, is_published, created_at, updated_at FROM \"Page\" WHERE project_id = "
        );
        query_builder.push_bind(project_id);
        query_builder.push(" AND branch_id = ");
        query_builder.push_bind(branch_id);
        
        if let Some(parent_id) = parent_id {
            if parent_id.is_empty() {
                query_builder.push(" AND parent_id IS NULL");
            } else {
                query_builder.push(" AND parent_id = ");
                query_builder.push_bind(parent_id);
            }
        }
        
        if let Some(is_published) = is_published {
            query_builder.push(" AND is_published = ");
            query_builder.push_bind(is_published);
        }
        
        if let Some(search) = search {
            query_builder.push(" AND (title ILIKE ");
            query_builder.push_bind(format!("%{}%", search));
            query_builder.push(" OR content ILIKE ");
            query_builder.push_bind(format!("%{}%", search));
            query_builder.push(")");
        }
        
        query_builder.push(" ORDER BY position ASC, created_at DESC");
        
        if let Some(limit) = limit {
            query_builder.push(" LIMIT ");
            query_builder.push_bind(limit);
        }
        
        if let Some(offset) = offset {
            query_builder.push(" OFFSET ");
            query_builder.push_bind(offset);
        }
        
        let rows = query_builder
            .build_query_as::<PageRow>()
            .fetch_all(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(rows.into_iter().map(|r| PageListItem {
            id: r.id,
            project_id: r.project_id,
            branch_id: r.branch_id,
            parent_id: r.parent_id,
            path: r.path,
            slug: r.slug,
            title: r.title,
            description: r.description.clone(),
            content: None,
            position: r.position,
            is_published: r.is_published,
            created_at: r.created_at,
            updated_at: r.updated_at,
        }).collect())
    }
    
    /// Count pages by project and branch
    pub async fn count_by_project_and_branch(
        pool: &PgPool,
        project_id: &str,
        branch_id: &str,
        parent_id: Option<&str>,
        is_published: Option<bool>,
        search: Option<&str>,
    ) -> Result<i64, AppError> {
        let mut query_builder: QueryBuilder<Postgres> = QueryBuilder::new(
            "SELECT COUNT(*) as count FROM \"Page\" WHERE project_id = "
        );
        query_builder.push_bind(project_id);
        query_builder.push(" AND branch_id = ");
        query_builder.push_bind(branch_id);
        
        if let Some(parent_id) = parent_id {
            if parent_id.is_empty() {
                query_builder.push(" AND parent_id IS NULL");
            } else {
                query_builder.push(" AND parent_id = ");
                query_builder.push_bind(parent_id);
            }
        }
        
        if let Some(is_published) = is_published {
            query_builder.push(" AND is_published = ");
            query_builder.push_bind(is_published);
        }
        
        if let Some(search) = search {
            query_builder.push(" AND (title ILIKE ");
            query_builder.push_bind(format!("%{}%", search));
            query_builder.push(" OR content ILIKE ");
            query_builder.push_bind(format!("%{}%", search));
            query_builder.push(")");
        }
        
        let count: i64 = query_builder
            .build()
            .fetch_one(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?
            .get::<i64, _>("count");
        
        Ok(count)
    }
    
    /// Get the full page tree for a project and branch
    pub async fn get_tree(
        pool: &PgPool,
        project_id: &str,
        branch_id: &str,
        is_published: Option<bool>,
    ) -> Result<Vec<PageTreeNode>, AppError> {
        // Get all pages that match the criteria
        let mut query_builder: QueryBuilder<Postgres> = QueryBuilder::new(
            "SELECT id, project_id, branch_id, parent_id, path, slug, title, position, is_published FROM \"Page\" WHERE project_id = "
        );
        query_builder.push_bind(project_id);
        query_builder.push(" AND branch_id = ");
        query_builder.push_bind(branch_id);
        
        if let Some(is_published) = is_published {
            query_builder.push(" AND is_published = ");
            query_builder.push_bind(is_published);
        }
        
        query_builder.push(" ORDER BY position ASC");
        
        let rows = query_builder
            .build_query_as::<PageRow>()
            .fetch_all(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;
        
        // Build the tree structure from flat rows
        let mut nodes: Vec<PageTreeNode> = rows.into_iter().map(|r| PageTreeNode {
            id: r.id,
            project_id: r.project_id,
            branch_id: r.branch_id,
            parent_id: r.parent_id,
            path: r.path,
            slug: r.slug,
            title: r.title,
            position: r.position,
            is_published: r.is_published,
            has_children: false,
            children: None,
        }).collect();
        
        // Build parent→children map using node IDs
        let mut parent_children: std::collections::HashMap<String, Vec<String>> = std::collections::HashMap::new();
        let mut root_ids: Vec<String> = Vec::new();
        
        for node in &nodes {
            if let Some(parent_id) = &node.parent_id {
                parent_children.entry(parent_id.clone()).or_default().push(node.id.clone());
            } else {
                root_ids.push(node.id.clone());
            }
        }
        
        // Convert nodes to a HashMap for lookup
        let mut node_lookup: std::collections::HashMap<String, PageTreeNode> = nodes
            .into_iter()
            .map(|n| (n.id.clone(), n))
            .collect();
        
        // Mark nodes that have children
        for (parent_id, children) in &parent_children {
            if let Some(parent) = node_lookup.get_mut(parent_id) {
                parent.has_children = true;
                parent.children = Some(Vec::new());
            }
        }
        
        // Recursive function to attach children
        fn attach_children(
            id: &str,
            node_lookup: &mut std::collections::HashMap<String, PageTreeNode>,
            parent_children: &std::collections::HashMap<String, Vec<String>>,
        ) -> Option<PageTreeNode> {
            let mut node = node_lookup.remove(id)?;
            if let Some(child_ids) = parent_children.get(id) {
                let mut children: Vec<PageTreeNode> = child_ids.iter()
                    .filter_map(|cid| attach_children(cid, node_lookup, parent_children))
                    .collect();
                children.sort_by(|a, b| a.position.cmp(&b.position));
                node.children = Some(children);
                node.has_children = true;
            }
            Some(node)
        }
        
        let mut root_nodes: Vec<PageTreeNode> = root_ids.iter()
            .filter_map(|id| attach_children(id, &mut node_lookup, &parent_children))
            .collect();
        
        // Add any orphaned nodes to root
        root_nodes.extend(node_lookup.into_values());
        
        // Sort children by position
        fn sort_children(node: &mut PageTreeNode) {
            if let Some(children) = &mut node.children {
                children.sort_by(|a, b| a.position.cmp(&b.position));
                for child in children {
                    sort_children(child);
                }
            }
        }
        
        for node in &mut root_nodes {
            sort_children(node);
        }
        
        Ok(root_nodes)
    }
    
    /// Create a new page
    pub async fn create(
        pool: &PgPool,
        project_id: &str,
        branch_id: &str,
        parent_id: Option<&str>,
        slug: &str,
        title: &str,
        description: Option<&str>,
        content: Option<&str>,
        position: i32,
        is_published: bool,
    ) -> Result<Page, AppError> {
        let id = Uuid::new_v4().to_string();
        
        // Calculate the path based on parent
        let path = if let Some(parent_id) = parent_id {
            // Get parent path
            let parent_path: Option<String> = sqlx::query_scalar(
                "SELECT path FROM \"Page\" WHERE id = $1"
            )
            .bind(parent_id)
            .fetch_one(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;
            
            if let Some(parent_path) = parent_path {
                format!("{}/{}", parent_path.trim_end_matches('/'), slug)
            } else {
                format!("/{}", slug)
            }
        } else {
            format!("/{}", slug)
        };
        
        let now = Utc::now();
        
        let row = sqlx::query_as::<_, PageRow>(
            r#"
            INSERT INTO "Page" (id, project_id, branch_id, parent_id, path, slug, title, description, content, position, is_published, is_indexed, created_at, updated_at)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
            RETURNING *
            "#
        )
        .bind(&id)
        .bind(project_id)
        .bind(branch_id)
        .bind(parent_id)
        .bind(&path)
        .bind(slug)
        .bind(title)
        .bind(description)
        .bind(content.unwrap_or(""))
        .bind(position)
        .bind(is_published)
        .bind(is_published) // is_indexed mirrors is_published by default
        .bind(now)
        .bind(now)
        .fetch_one(pool)
        .await
        .map_err(|e| {
            if e.to_string().contains("duplicate key") {
                AppError::Conflict("Page with this slug already exists in this branch".to_string())
            } else {
                AppError::Database(e.into())
            }
        })?;
        
        Ok(row.into())
    }
    
    /// Update a page
    pub async fn update(
        pool: &PgPool,
        page_id: &str,
        parent_id: Option<&str>,
        slug: Option<&str>,
        title: Option<&str>,
        description: Option<&str>,
        content: Option<&str>,
        position: Option<i32>,
        is_published: Option<bool>,
    ) -> Result<Page, AppError> {
        // If parent or slug is changing, we need to recalculate the path
        let current_page: Option<PageRow> = sqlx::query_as::<_, PageRow>(
            "SELECT * FROM \"Page\" WHERE id = $1"
        )
        .bind(page_id)
        .fetch_optional(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        let new_path = if let Some(current) = &current_page {
            let parent_changed = parent_id != current.parent_id.as_deref();
            let slug_changed = slug != Some(current.slug.as_str());
            
            if parent_changed || slug_changed {
                if let Some(parent_id) = parent_id {
                    if parent_id.is_empty() {
                        // Root level
                        format!("/{}", slug.unwrap_or(&current.slug))
                    } else {
                        let parent_path: Option<String> = sqlx::query_scalar(
                            "SELECT path FROM \"Page\" WHERE id = $1"
                        )
                        .bind(parent_id)
                        .fetch_one(pool)
                        .await
                        .map_err(|e| AppError::Database(e.into()))?;
                        
                        if let Some(parent_path) = parent_path {
                            format!("{}/{}", parent_path.trim_end_matches('/'), slug.unwrap_or(&current.slug))
                        } else {
                            format!("/{}", slug.unwrap_or(&current.slug))
                        }
                    }
                } else {
                    format!("/{}", slug.unwrap_or(&current.slug))
                }
            } else {
                current.path.clone()
            }
        } else {
            // Page doesn't exist, but we'll let the update fail below
            String::new()
        };
        
        let mut query_builder: QueryBuilder<Postgres> = QueryBuilder::new(
            "UPDATE \"Page\" SET "
        );
        
        let mut has_updates = false;
        if let Some(parent_id) = parent_id {
            if parent_id.is_empty() {
                query_builder.push("parent_id = NULL");
            } else {
                query_builder.push("parent_id = ");
                query_builder.push_bind(parent_id);
            }
            has_updates = true;
        }
        if let Some(slug) = slug {
            if has_updates {
                query_builder.push(", ");
            }
            query_builder.push("slug = ");
            query_builder.push_bind(slug);
            has_updates = true;
        }
        if !new_path.is_empty() {
            if has_updates {
                query_builder.push(", ");
            }
            query_builder.push("path = ");
            query_builder.push_bind(&new_path);
            has_updates = true;
        }
        if let Some(title) = title {
            if has_updates {
                query_builder.push(", ");
            }
            query_builder.push("title = ");
            query_builder.push_bind(title);
            has_updates = true;
        }
        if let Some(description) = description {
            if has_updates {
                query_builder.push(", ");
            }
            query_builder.push("description = ");
            query_builder.push_bind(description);
            has_updates = true;
        }
        if let Some(content) = content {
            if has_updates {
                query_builder.push(", ");
            }
            query_builder.push("content = ");
            query_builder.push_bind(content);
            has_updates = true;
        }
        if let Some(position) = position {
            if has_updates {
                query_builder.push(", ");
            }
            query_builder.push("position = ");
            query_builder.push_bind(position);
            has_updates = true;
        }
        if let Some(is_published) = is_published {
            if has_updates {
                query_builder.push(", ");
            }
            query_builder.push("is_published = ");
            query_builder.push_bind(is_published);
            // Also update is_indexed to match
            query_builder.push(", is_indexed = ");
            query_builder.push_bind(is_published);
            has_updates = true;
        }
        
        if has_updates {
            query_builder.push(", updated_at = ");
            query_builder.push_bind(Utc::now());
        }
        
        query_builder.push(" WHERE id = ");
        query_builder.push_bind(page_id);
        query_builder.push(" RETURNING *");
        
        let row = query_builder
            .build_query_as::<PageRow>()
            .fetch_one(pool)
            .await
            .map_err(|e| {
                if e.to_string().contains("duplicate key") {
                    AppError::Conflict("Page with this slug already exists in this branch".to_string())
                } else {
                    AppError::Database(e.into())
                }
            })?;
        
        Ok(row.into())
    }
    
    /// Delete a page
    pub async fn delete(pool: &PgPool, page_id: &str) -> Result<bool, AppError> {
        let result = sqlx::query("DELETE FROM \"Page\" WHERE id = $1")
            .bind(page_id)
            .execute(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(result.rows_affected() > 0)
    }
    
    /// Reorder pages (update positions atomically)
    pub async fn reorder(
        pool: &PgPool,
        page_ids: &[String],
    ) -> Result<Vec<Page>, AppError> {
        let mut transaction = pool.begin().await.map_err(|e| AppError::Database(e.into()))?;
        
        for (index, page_id) in page_ids.iter().enumerate() {
            let position = index as i32;
            
            sqlx::query("UPDATE \"Page\" SET position = $1, updated_at = $2 WHERE id = $3")
                .bind(position)
                .bind(Utc::now())
                .bind(page_id)
                .execute(&mut *transaction)
                .await
                .map_err(|e| AppError::Database(e.into()))?;
        }
        
        transaction.commit().await.map_err(|e| AppError::Database(e.into()))?;
        
        // Return the reordered pages
        let pages = sqlx::query_as::<_, PageRow>(
            "SELECT * FROM \"Page\" WHERE id = ANY($1) ORDER BY position ASC"
        )
        .bind(page_ids)
        .fetch_all(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        
        Ok(pages.into_iter().map(|r| r.into()).collect())
    }
    
    /// Check if a slug is available in a branch
    pub async fn is_slug_available(
        pool: &PgPool,
        project_id: &str,
        branch_id: &str,
        slug: &str,
        exclude_page_id: Option<&str>,
    ) -> Result<bool, AppError> {
        let mut query_builder: QueryBuilder<Postgres> = QueryBuilder::new(
            "SELECT COUNT(*) FROM \"Page\" WHERE project_id = "
        );
        query_builder.push_bind(project_id);
        query_builder.push(" AND branch_id = ");
        query_builder.push_bind(branch_id);
        query_builder.push(" AND slug = ");
        query_builder.push_bind(slug);
        
        if let Some(exclude_id) = exclude_page_id {
            query_builder.push(" AND id != ");
            query_builder.push_bind(exclude_id);
        }
        
        let count: i64 = query_builder
            .build()
            .fetch_one(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?
            .get::<i64, _>(0);
        
        Ok(count == 0)
    }
    
    /// Detect if moving a page would create a cycle in the tree
    pub async fn would_create_cycle(
        pool: &PgPool,
        page_id: &str,
        new_parent_id: Option<&str>,
    ) -> Result<bool, AppError> {
        if new_parent_id.is_none() {
            // Moving to root can't create a cycle
            return Ok(false);
        }
        
        let new_parent_id = new_parent_id.unwrap();
        
        // Check if new_parent would be a descendant of page_id
        // We do this by checking if any ancestor of new_parent is page_id
        let mut current_id = new_parent_id.to_string();
        let mut visited = std::collections::HashSet::new();
        
        loop {
            if current_id == page_id {
                return Ok(true); // Would create cycle
            }
            
            if visited.contains(&current_id) {
                break; // Prevent infinite loops
            }
            visited.insert(current_id.clone());
            
            let parent_id: Option<String> = sqlx::query_scalar(
                "SELECT parent_id FROM \"Page\" WHERE id = $1"
            )
            .bind(&current_id)
            .fetch_one(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;
            
            if let Some(parent) = parent_id {
                current_id = parent;
            } else {
                break;
            }
        }
        
        Ok(false)
    }

    /// Get the maximum sort position among sibling pages
    pub async fn get_max_position(
        pool: &PgPool,
        project_id: &str,
        branch_id: &str,
        parent_id: Option<&str>,
    ) -> Result<i32, AppError> {
        let count: Option<i32> = match parent_id {
            Some(pid) => sqlx::query_scalar(
                "SELECT MAX(sort_order) FROM \"Page\" WHERE project_id = $1 AND branch_id = $2 AND parent_id = $3"
            )
            .bind(project_id)
            .bind(branch_id)
            .bind(pid)
            .fetch_one(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?,
            None => sqlx::query_scalar(
                "SELECT MAX(sort_order) FROM \"Page\" WHERE project_id = $1 AND branch_id = $2 AND parent_id IS NULL"
            )
            .bind(project_id)
            .bind(branch_id)
            .fetch_one(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?,
        };
        Ok(count.unwrap_or(0))
    }

    /// Get multiple pages by IDs
    pub async fn get_by_ids(pool: &PgPool, page_ids: &[&str]) -> Result<Vec<Page>, AppError> {
        if page_ids.is_empty() {
            return Ok(vec![]);
        }
        let rows = sqlx::query_as::<_, PageRow>(
            "SELECT * FROM \"Page\" WHERE id = ANY($1) ORDER BY sort_order ASC"
        )
        .bind(page_ids)
        .fetch_all(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        Ok(rows.into_iter().map(|r| r.into()).collect())
    }

    /// Update a page's path (slug/breadcrumb)
    pub async fn update_path(pool: &PgPool, page_id: &str, path: &str) -> Result<Page, AppError> {
        let row = sqlx::query_as::<_, PageRow>(
            "UPDATE \"Page\" SET slug = $1, updated_at = $2 WHERE id = $3 RETURNING *"
        )
        .bind(path)
        .bind(Utc::now())
        .bind(page_id)
        .fetch_one(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        Ok(row.into())
    }

    /// Get child pages of a parent
    pub async fn get_by_parent(
        pool: &PgPool,
        project_id: &str,
        branch_id: &str,
        parent_id: &str,
    ) -> Result<Vec<Page>, AppError> {
        let rows = sqlx::query_as::<_, PageRow>(
            "SELECT * FROM \"Page\" WHERE project_id = $1 AND branch_id = $2 AND parent_id = $3 ORDER BY sort_order ASC"
        )
        .bind(project_id)
        .bind(branch_id)
        .bind(parent_id)
        .fetch_all(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        Ok(rows.into_iter().map(|r| r.into()).collect())
    }

    /// Count pages in a branch
    pub async fn count_by_branch(pool: &PgPool, branch_id: &str) -> Result<i64, AppError> {
        let row = sqlx::query("SELECT COUNT(*) as count FROM \"Page\" WHERE branch_id = $1")
            .bind(branch_id)
            .fetch_one(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;
        Ok(row.get::<i64, _>("count"))
    }

    /// Get all pages in a project (for reindexing)
    pub async fn get_by_project(pool: &PgPool, project_id: &str) -> Result<Vec<Page>, AppError> {
        let rows = sqlx::query_as::<_, PageRow>(
            "SELECT * FROM \"Page\" WHERE project_id = $1 ORDER BY created_at ASC"
        )
        .bind(project_id)
        .fetch_all(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;
        Ok(rows.into_iter().map(|r| r.into()).collect())
    }
}

