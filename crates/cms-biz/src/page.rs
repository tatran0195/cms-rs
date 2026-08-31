//! Page Business Logic
//!
//! This module contains business logic for pages, including the page tree structure,
//! path materialization, cycle detection, and reordering.

use cms_db::{branch::BranchQueries, page::PageQueries, project::ProjectQueries, PgPool};
use cms_entity::{
    common::{Id, PaginatedResponse},
    page::{
        CreatePageRequest, GetPageTreeResponse, ListPagesQuery, ListPagesResponse, Page,
        PageListItem, PageResponse, PageTreeNode, ReorderPagesRequest, UpdatePageRequest,
    },
};
use uuid::Uuid;

use crate::{AppError, BizContext};

/// Page service
pub struct PageService;

impl PageService {
    /// Create a new page
    pub async fn create_page(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
        branch_id: &str,
        request: CreatePageRequest,
    ) -> Result<PageResponse, AppError> {
        // Verify project and branch exist
        let _project = ProjectQueries::get_by_id(&ctx.pool, project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

        let _branch = BranchQueries::get_by_id(&ctx.pool, branch_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Branch not found".to_string()))?;

        // Check if user has access to the project
        ctx.authz
            .require_project_role(user_id, project_id, cms_entity::common::MemberRole::Member)
            .await?;

        // Check if parent exists (if specified)
        if let Some(parent_id) = &request.parent_id {
            if !parent_id.is_empty() {
                let _parent = PageQueries::get_by_id(&ctx.pool, parent_id)
                    .await?
                    .ok_or_else(|| AppError::NotFound("Parent page not found".to_string()))?;

                // Check if adding this page would create a cycle
                if PageQueries::would_create_cycle(&ctx.pool, parent_id, Some(parent_id)).await? {
                    return Err(AppError::Conflict(
                        "Cannot create page: would create a cycle in the page tree".to_string(),
                    ));
                }
            }
        }

        // Check if slug is available
        if !PageQueries::is_slug_available(&ctx.pool, project_id, branch_id, &request.slug, None)
            .await?
        {
            return Err(AppError::Conflict(
                "Page with this slug already exists in this branch".to_string(),
            ));
        }

        // Determine position
        let position = if let Some(parent_id) = &request.parent_id {
            if parent_id.is_empty() {
                // Root level - get max position for root pages in this branch
                let max_position =
                    PageQueries::get_max_position(&ctx.pool, project_id, branch_id, None).await?;
                max_position + 1
            } else {
                // Under a parent - get max position for children of this parent
                let max_position = PageQueries::get_max_position(
                    &ctx.pool,
                    project_id,
                    branch_id,
                    Some(parent_id),
                )
                .await?;
                max_position + 1
            }
        } else {
            // No parent specified - root level
            let max_position =
                PageQueries::get_max_position(&ctx.pool, project_id, branch_id, None).await?;
            max_position + 1
        };

        let page = PageQueries::create(
            &ctx.pool,
            project_id,
            branch_id,
            request.parent_id.as_deref(),
            &request.slug,
            &request.title,
            request.description.as_deref(),
            request.content.as_deref(),
            position,
            request.is_published,
        )
        .await?;

        Ok(page.into())
    }

    /// Get a page by ID
    pub async fn get_page(
        ctx: &BizContext,
        user_id: &str,
        page_id: &str,
    ) -> Result<PageResponse, AppError> {
        let page = PageQueries::get_by_id(&ctx.pool, page_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Page not found".to_string()))?;

        // Check if user has access to the project
        ctx.authz
            .require_project_role(
                user_id,
                &page.project_id,
                cms_entity::common::MemberRole::Viewer,
            )
            .await?;

        Ok(page.into())
    }

    /// Get a page by path
    pub async fn get_page_by_path(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
        branch_id: &str,
        path: &str,
    ) -> Result<PageResponse, AppError> {
        // Verify project and branch exist
        let _project = ProjectQueries::get_by_id(&ctx.pool, project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

        let _branch = BranchQueries::get_by_id(&ctx.pool, branch_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Branch not found".to_string()))?;

        // Check if user has access to the project
        ctx.authz
            .require_project_role(user_id, project_id, cms_entity::common::MemberRole::Viewer)
            .await?;

        let page = PageQueries::get_by_path(&ctx.pool, project_id, branch_id, path)
            .await?
            .ok_or_else(|| AppError::NotFound("Page not found".to_string()))?;

        Ok(page.into())
    }

    /// List pages in a project and branch
    pub async fn list_pages(
        ctx: &BizContext,
        user_id: &str,
        query: ListPagesQuery,
        page: u64,
        page_size: u64,
    ) -> Result<ListPagesResponse, AppError> {
        // Verify project and branch exist
        let project = ProjectQueries::get_by_id(&ctx.pool, &query.project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

        let _branch = BranchQueries::get_by_id(&ctx.pool, &query.branch_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Branch not found".to_string()))?;

        // Check if user has access to the project
        ctx.authz
            .require_project_role(
                user_id,
                &query.project_id,
                cms_entity::common::MemberRole::Viewer,
            )
            .await?;

        let pages = PageQueries::get_by_project_and_branch(
            &ctx.pool,
            &query.project_id,
            &query.branch_id,
            query.parent_id.as_deref(),
            query.is_published,
            query.search.as_deref(),
            Some(page as i64),
            Some(page_size as i64),
        )
        .await?;

        let total = PageQueries::count_by_project_and_branch(
            &ctx.pool,
            &query.project_id,
            &query.branch_id,
            query.parent_id.as_deref(),
            query.is_published,
            query.search.as_deref(),
        )
        .await?;

        Ok(PaginatedResponse::new(pages, total as u64, page, page_size))
    }

    /// Get the full page tree for a project and branch
    pub async fn get_page_tree(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
        branch_id: &str,
        is_published: Option<bool>,
    ) -> Result<GetPageTreeResponse, AppError> {
        // Verify project and branch exist
        let _project = ProjectQueries::get_by_id(&ctx.pool, project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

        let _branch = BranchQueries::get_by_id(&ctx.pool, branch_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Branch not found".to_string()))?;

        // Check if user has access to the project
        ctx.authz
            .require_project_role(user_id, project_id, cms_entity::common::MemberRole::Viewer)
            .await?;

        let tree = PageQueries::get_tree(&ctx.pool, project_id, branch_id, is_published).await?;

        Ok(tree)
    }

    /// Update a page
    pub async fn update_page(
        ctx: &BizContext,
        user_id: &str,
        page_id: &str,
        request: UpdatePageRequest,
    ) -> Result<PageResponse, AppError> {
        let page = PageQueries::get_by_id(&ctx.pool, page_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Page not found".to_string()))?;

        // Check if user has access to edit the page
        ctx.authz
            .require_project_role(
                user_id,
                &page.project_id,
                cms_entity::common::MemberRole::Editor,
            )
            .await?;

        // If parent is changing, check for cycles
        if let Some(new_parent_id) = &request.parent_id {
            if new_parent_id != page.parent_id.as_deref().unwrap_or("")
                && PageQueries::would_create_cycle(&ctx.pool, page_id, Some(new_parent_id)).await?
            {
                return Err(AppError::Conflict(
                    "Cannot move page: would create a cycle in the page tree".to_string(),
                ));
            }
        }

        // If slug is changing, check for conflicts
        if let Some(new_slug) = &request.slug {
            if new_slug != &page.slug
                && !PageQueries::is_slug_available(
                    &ctx.pool,
                    &page.project_id,
                    &page.branch_id,
                    new_slug,
                    Some(page_id),
                )
                .await?
            {
                return Err(AppError::Conflict(
                    "Page with this slug already exists in this branch".to_string(),
                ));
            }
        }

        let updated = PageQueries::update(
            &ctx.pool,
            page_id,
            request.parent_id.as_deref(),
            request.slug.as_deref(),
            request.title.as_deref(),
            request.description.as_deref(),
            request.content.as_deref(),
            request.position,
            request.is_published,
        )
        .await?;

        Ok(updated.into())
    }

    /// Delete a page
    pub async fn delete_page(
        ctx: &BizContext,
        user_id: &str,
        page_id: &str,
    ) -> Result<bool, AppError> {
        let page = PageQueries::get_by_id(&ctx.pool, page_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Page not found".to_string()))?;

        // Check if user has access to delete the page
        ctx.authz
            .require_project_role(
                user_id,
                &page.project_id,
                cms_entity::common::MemberRole::Editor,
            )
            .await?;

        // Check if page has children - if so, we need to handle them
        // For now, we'll just delete the page (cascade will handle children in the database)
        // In a real implementation, we might want to reparent children or return an error
        PageQueries::delete(&ctx.pool, page_id).await
    }

    /// Reorder pages
    pub async fn reorder_pages(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
        branch_id: &str,
        request: ReorderPagesRequest,
    ) -> Result<Vec<PageResponse>, AppError> {
        // Verify all pages belong to the same project and branch
        let page_id_refs: Vec<&str> = request.page_ids.iter().map(|s| s.as_str()).collect();
        let pages = PageQueries::get_by_ids(&ctx.pool, &page_id_refs).await?;

        for page in &pages {
            if page.project_id != project_id || page.branch_id != branch_id {
                return Err(AppError::Conflict(
                    "All pages must belong to the same project and branch".to_string(),
                ));
            }
        }

        // Check if user has access to edit pages in this project
        ctx.authz
            .require_project_role(user_id, project_id, cms_entity::common::MemberRole::Editor)
            .await?;

        let reordered = PageQueries::reorder(&ctx.pool, &request.page_ids).await?;

        Ok(reordered.into_iter().map(|p| p.into()).collect())
    }

    /// Recompute materialized paths for a branch
    ///
    /// This is called when the page tree structure changes and we need to ensure
    /// all paths are correct. In practice, this is handled automatically during
    /// create/update operations, but this function can be called explicitly if needed.
    pub async fn recompute_paths(
        ctx: &BizContext,
        project_id: &str,
        branch_id: &str,
    ) -> Result<u64, AppError> {
        // Get all pages in this branch
        let pages = PageQueries::get_by_project_and_branch(
            &ctx.pool, project_id, branch_id, None, None, None, None, None,
        )
        .await?;

        let mut count = 0u64;

        // Process root pages first
        let root_pages: Vec<_> = pages.iter().filter(|p| p.parent_id.is_none()).collect();

        for root_page in root_pages {
            count += Self::recompute_path_for_page(&ctx.pool, root_page.id.as_str()).await?;
        }

        Ok(count)
    }

    /// Recompute path for a single page and its descendants
    async fn recompute_path_for_page(pool: &PgPool, start_page_id: &str) -> Result<u64, AppError> {
        use cms_db::page::PageQueries;

        let mut count = 0u64;
        let mut queue = vec![start_page_id.to_string()];

        while let Some(page_id) = queue.pop() {
            let page = PageQueries::get_by_id(pool, &page_id)
                .await?
                .ok_or_else(|| AppError::NotFound("Page not found".to_string()))?;

            // If this is a root page, path is just /slug
            // Otherwise, path is parent_path/slug
            let new_path = if let Some(parent_id) = &page.parent_id {
                let parent = PageQueries::get_by_id(pool, parent_id)
                    .await?
                    .ok_or_else(|| AppError::NotFound("Parent page not found".to_string()))?;
                format!("{}/{}", parent.path.trim_end_matches('/'), page.slug)
            } else {
                format!("/{}", page.slug)
            };

            // Update the path if it changed
            if new_path != page.path {
                PageQueries::update_path(pool, &page_id, &new_path).await?;
            }
            count += 1;

            // Process children
            let children =
                PageQueries::get_by_parent(pool, &page.project_id, &page.branch_id, &page_id)
                    .await?;
            for child in children {
                queue.push(child.id.to_string());
            }
        }

        Ok(count)
    }

    /// Helper to resolve public project by org slug and project slug
    async fn resolve_public_project(
        pool: &PgPool,
        org_slug: &str,
        project_slug: &str,
    ) -> Result<cms_entity::project::Project, AppError> {
        use cms_db::org::OrganizationQueries;

        let org = OrganizationQueries::get_by_slug(pool, org_slug)
            .await?
            .ok_or_else(|| AppError::NotFound("Organization not found".to_string()))?;

        let project = ProjectQueries::get_by_slug(pool, &org.id, project_slug)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

        if !project.is_public {
            return Err(AppError::Forbidden);
        }

        Ok(project)
    }

    /// Get a public page by path
    pub async fn get_public_page(
        ctx: &BizContext,
        org_slug: &str,
        project_slug: &str,
        page_path: &str,
    ) -> Result<PageResponse, AppError> {
        let project = Self::resolve_public_project(&ctx.pool, org_slug, project_slug).await?;

        let default_branch = BranchQueries::get_default(&ctx.pool, &project.id).await?;
        let branch_id = default_branch
            .map(|b| b.id)
            .ok_or_else(|| AppError::NotFound("Default branch not found".to_string()))?;

        let normalized_path = if page_path.starts_with('/') {
            page_path.to_string()
        } else {
            format!("/{}", page_path)
        };

        let page =
            PageQueries::get_by_path(&ctx.pool, &project.id, &branch_id, &normalized_path).await?;

        let page = match page {
            Some(p) => p,
            None => PageQueries::get_by_id(&ctx.pool, page_path)
                .await?
                .ok_or_else(|| AppError::NotFound("Page not found".to_string()))?,
        };

        if !page.is_published {
            return Err(AppError::NotFound("Page not found".to_string()));
        }

        Ok(page.into())
    }

    /// List public pages
    pub async fn list_public_pages(
        ctx: &BizContext,
        org_slug: &str,
        project_slug: &str,
    ) -> Result<Vec<PageResponse>, AppError> {
        let project = Self::resolve_public_project(&ctx.pool, org_slug, project_slug).await?;

        let default_branch = BranchQueries::get_default(&ctx.pool, &project.id).await?;
        let branch_id = default_branch.map(|b| b.id).unwrap_or_default();

        let all_pages = PageQueries::get_by_project(&ctx.pool, &project.id).await?;
        let published_pages = all_pages
            .into_iter()
            .filter(|p| p.is_published && (branch_id.is_empty() || p.branch_id == branch_id))
            .map(|p| p.into())
            .collect();

        Ok(published_pages)
    }

    /// Search public pages
    pub async fn search_public_pages(
        ctx: &BizContext,
        org_slug: &str,
        project_slug: &str,
        search_term: &str,
    ) -> Result<Vec<PageResponse>, AppError> {
        let project = Self::resolve_public_project(&ctx.pool, org_slug, project_slug).await?;

        let default_branch = BranchQueries::get_default(&ctx.pool, &project.id).await?;
        let branch_id = default_branch.map(|b| b.id).unwrap_or_default();

        let all_pages = PageQueries::get_by_project(&ctx.pool, &project.id).await?;
        let search_lower = search_term.to_lowercase();

        let results = all_pages
            .into_iter()
            .filter(|p| {
                p.is_published
                    && (branch_id.is_empty() || p.branch_id == branch_id)
                    && (p.title.to_lowercase().contains(&search_lower)
                        || p.content.to_lowercase().contains(&search_lower)
                        || p.slug.to_lowercase().contains(&search_lower))
            })
            .map(|p| p.into())
            .collect();

        Ok(results)
    }

    /// Get project sitemap
    pub async fn get_project_sitemap(
        ctx: &BizContext,
        org_slug: &str,
        project_slug: &str,
    ) -> Result<serde_json::Value, AppError> {
        let project = Self::resolve_public_project(&ctx.pool, org_slug, project_slug).await?;

        let default_branch = BranchQueries::get_default(&ctx.pool, &project.id).await?;
        let branch_id = default_branch.map(|b| b.id).unwrap_or_default();

        let all_pages = PageQueries::get_by_project(&ctx.pool, &project.id).await?;
        let urls: Vec<serde_json::Value> = all_pages
            .into_iter()
            .filter(|p| p.is_published && (branch_id.is_empty() || p.branch_id == branch_id))
            .map(|p| {
                serde_json::json!({
                    "loc": format!("/{}/{}{}", org_slug, project_slug, p.path),
                    "lastmod": p.updated_at.to_rfc3339(),
                    "title": p.title,
                })
            })
            .collect();

        Ok(serde_json::json!({ "urls": urls }))
    }
}
