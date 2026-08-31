//! Search Business Logic
//!
//! This module contains business logic for search operations,
//! including hybrid FTS+vector search with Japanese tokenization.

use std::sync::Arc;

use cms_db::{page::PageQueries, project::ProjectQueries, search_index::SearchIndexRunQueries};
use cms_entity::{
    common::{Id, MemberRole, PaginatedResponse},
    search::{
        IndexPageRequest, ListSearchIndexRunsQuery, RagAnswer, ReindexRequest, SearchIndexRun,
        SearchIndexRunResponse, SearchIndexRunStatus, SearchOptions, SearchRequest, SearchResponse,
        SearchResultItem,
    },
};

use crate::{AppError, BizContext};

/// Search service
pub struct SearchService;

impl SearchService {
    /// Search for pages in a project
    pub async fn search(
        ctx: &BizContext,
        search_engine: Arc<dyn cms_search::SearchEngine>,
        project_id: &str,
        request: SearchRequest,
    ) -> Result<SearchResponse, AppError> {
        // Verify project exists
        let _project = ProjectQueries::get_by_id(&ctx.pool, project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

        // Build search options
        let opts = SearchOptions {
            limit: request.limit as usize,
            min_score: 0.0,
            fts_weight: 0.5,
        };

        // Perform the search
        let hits = search_engine
            .hybrid_query(project_id, &request.query, opts)
            .await?;

        // Convert SearchHit to SearchResultItem
        let total = hits.len() as i64;
        let results: Vec<SearchResultItem> = hits
            .into_iter()
            .map(|h| SearchResultItem {
                page_id: h.page_id,
                project_id: h.project_id,
                title: h.title,
                path: h.path,
                score: h.score,
                chunk_text: h.chunk_text,
                chunk_index: h.chunk_index,
                metadata: h.metadata,
            })
            .collect();

        Ok(SearchResponse {
            query: request.query.clone(),
            results,
            total,
            limit: request.limit,
            offset: request.offset.unwrap_or(0),
        })
    }

    /// Index a page for search
    pub async fn index_page(
        ctx: &BizContext,
        search_engine: Arc<dyn cms_search::SearchEngine>,
        request: IndexPageRequest,
    ) -> Result<(), AppError> {
        // Verify page exists
        let page = PageQueries::get_by_id(&ctx.pool, &request.page_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Page not found".to_string()))?;

        // Index the page
        search_engine.index_page(&page).await?;

        Ok(())
    }

    /// Remove a page from the search index
    pub async fn remove_page_from_index(
        ctx: &BizContext,
        search_engine: Arc<dyn cms_search::SearchEngine>,
        page_id: &str,
    ) -> Result<(), AppError> {
        // Verify page exists
        let _page = PageQueries::get_by_id(&ctx.pool, page_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Page not found".to_string()))?;

        // Remove from index
        search_engine.remove_page(page_id).await?;

        Ok(())
    }

    /// Get RAG answer for a question
    pub async fn get_rag_answer(
        ctx: &BizContext,
        search_engine: Arc<dyn cms_search::SearchEngine>,
        project_id: &str,
        question: &str,
    ) -> Result<RagAnswer, AppError> {
        // Verify project exists
        let _project = ProjectQueries::get_by_id(&ctx.pool, project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

        // Get RAG answer
        search_engine.rag_answer(project_id, question).await
    }

    /// List search index runs
    pub async fn list_index_runs(
        ctx: &BizContext,
        user_id: &str,
        query: ListSearchIndexRunsQuery,
    ) -> Result<PaginatedResponse<SearchIndexRunResponse>, AppError> {
        let project_id = query.project_id.as_deref().ok_or_else(|| {
            AppError::InvalidInput("project_id query param is required".to_string())
        })?;

        ctx.access_control
            .require_project_role(user_id, project_id, MemberRole::Viewer)
            .await?;

        let runs =
            SearchIndexRunQueries::get_by_project(&ctx.pool, project_id, query.limit, query.offset)
                .await?;

        let total = SearchIndexRunQueries::count_by_project(&ctx.pool, project_id).await?;

        let limit = query.limit.unwrap_or(20) as u64;
        let offset = query.offset.unwrap_or(0) as u64;
        let page = offset.checked_div(limit).map_or(1, |d| d + 1);

        Ok(PaginatedResponse::new(
            runs.into_iter().map(|r| r.into()).collect(),
            total as u64,
            page,
            limit,
        ))
    }

    /// Get a specific search index run
    pub async fn get_index_run(
        ctx: &BizContext,
        user_id: &str,
        run_id: &str,
    ) -> Result<SearchIndexRunResponse, AppError> {
        let run = SearchIndexRunQueries::get_by_id(&ctx.pool, run_id)
            .await?
            .ok_or_else(|| AppError::NotFound(format!("Search index run not found: {}", run_id)))?;

        ctx.access_control
            .require_project_role(user_id, &run.project_id, MemberRole::Viewer)
            .await?;

        Ok(run.into())
    }

    /// Get search status for a project
    pub async fn get_search_status(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
    ) -> Result<serde_json::Value, AppError> {
        ctx.access_control
            .require_project_role(user_id, project_id, MemberRole::Viewer)
            .await?;

        let latest_run =
            SearchIndexRunQueries::get_latest_by_project(&ctx.pool, project_id).await?;
        let total_runs = SearchIndexRunQueries::count_by_project(&ctx.pool, project_id).await?;

        Ok(serde_json::json!({
            "status": "ready",
            "project_id": project_id,
            "total_index_runs": total_runs,
            "latest_run": latest_run.map(|r| serde_json::json!({
                "id": r.id,
                "status": format!("{:?}", r.status).to_lowercase(),
                "pages_indexed": r.pages_indexed,
                "completed_at": r.completed_at,
            })),
        }))
    }

    /// Reindex all pages for a project into the search engine
    pub async fn reindex(
        ctx: &BizContext,
        search_engine: Arc<dyn cms_search::SearchEngine>,
        user_id: &str,
        request: ReindexRequest,
    ) -> Result<SearchIndexRunResponse, AppError> {
        ctx.access_control
            .require_project_role(user_id, &request.project_id, MemberRole::Admin)
            .await?;

        let branch_id = request.branch_id.as_deref().unwrap_or("");

        // Create a new SearchIndexRun
        let run = SearchIndexRunQueries::create(
            &ctx.pool,
            &request.project_id,
            request.branch_id.as_deref(),
            request.language_id.as_deref(),
            SearchIndexRunStatus::Processing,
        )
        .await?;

        // Retrieve pages to index
        let pages = if !branch_id.is_empty() {
            PageQueries::get_by_project_and_branch(
                &ctx.pool,
                &request.project_id,
                branch_id,
                None,
                Some(true), // only published pages
                None,
                None,
                None,
            )
            .await?
        } else {
            // Retrieve default branch
            let default_branch =
                cms_db::branch::BranchQueries::get_default(&ctx.pool, &request.project_id).await?;
            if let Some(b) = default_branch {
                PageQueries::get_by_project_and_branch(
                    &ctx.pool,
                    &request.project_id,
                    &b.id,
                    None,
                    Some(true),
                    None,
                    None,
                    None,
                )
                .await?
            } else {
                vec![]
            }
        };

        let mut indexed_count = 0;
        for page_item in pages {
            if let Some(page) = PageQueries::get_by_id(&ctx.pool, &page_item.id).await? {
                if search_engine.index_page(&page).await.is_ok() {
                    indexed_count += 1;
                }
            }
        }

        let completed =
            SearchIndexRunQueries::mark_completed(&ctx.pool, &run.id, indexed_count).await?;

        tracing::info!(
            "Reindex completed for project {}: {} page(s) indexed",
            request.project_id,
            indexed_count
        );

        Ok(completed.into())
    }
}

/// Process search job (for worker)
pub async fn process_search_job(
    pool: &cms_db::PgPool,
    search_engine: Arc<dyn cms_search::SearchEngine>,
    payload: &serde_json::Value,
) -> Result<(), AppError> {
    let job_type = payload.get("type").and_then(|v| v.as_str());
    let _project_id = payload
        .get("project_id")
        .and_then(|v| v.as_str())
        .ok_or_else(|| AppError::InvalidInput("Missing project_id".to_string()))?;

    match job_type {
        Some("index_page") => {
            let page_id = payload
                .get("page_id")
                .and_then(|v| v.as_str())
                .ok_or_else(|| AppError::InvalidInput("Missing page_id".to_string()))?;

            let page = PageQueries::get_by_id(pool, page_id)
                .await?
                .ok_or_else(|| AppError::NotFound("Page not found".to_string()))?;

            search_engine.index_page(&page).await?;
        }
        Some("remove_page") => {
            let page_id = payload
                .get("page_id")
                .and_then(|v| v.as_str())
                .ok_or_else(|| AppError::InvalidInput("Missing page_id".to_string()))?;

            search_engine.remove_page(page_id).await?;
        }
        _ => {
            return Err(AppError::InvalidInput(
                "Unknown search job type".to_string(),
            ))
        }
    }

    Ok(())
}
