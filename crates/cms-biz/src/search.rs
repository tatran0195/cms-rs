//! Search Business Logic
//!
//! This module contains business logic for search operations,
//! including hybrid FTS+vector search with Japanese tokenization.

use std::sync::Arc;

use cms_db::{page::PageQueries, project::ProjectQueries};
use cms_entity::{
    common::Id,
    search::{IndexPageRequest, SearchOptions, SearchRequest, SearchResponse, SearchResultItem},
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
    ) -> Result<cms_entity::search::RagAnswer, AppError> {
        // Verify project exists
        let _project = ProjectQueries::get_by_id(&ctx.pool, project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

        // Get RAG answer
        search_engine.rag_answer(project_id, question).await
    }

    /// List search index runs
    pub async fn list_index_runs(
        _ctx: &BizContext,
        _user_id: &str,
        _query: cms_entity::search::ListSearchIndexRunsQuery,
    ) -> Result<
        cms_entity::common::PaginatedResponse<cms_entity::search::SearchIndexRunResponse>,
        AppError,
    > {
        Ok(cms_entity::common::PaginatedResponse::new(vec![], 0, 1, 20))
    }

    /// Get a specific search index run
    pub async fn get_index_run(
        _ctx: &BizContext,
        _user_id: &str,
        run_id: &str,
    ) -> Result<cms_entity::search::SearchIndexRunResponse, AppError> {
        Err(AppError::NotFound(format!(
            "Search index run not found: {}",
            run_id
        )))
    }

    /// Get search status
    pub async fn get_search_status(
        _ctx: &BizContext,
        _user_id: &str,
        _project_id: &str,
    ) -> Result<serde_json::Value, AppError> {
        Ok(serde_json::json!({ "status": "ok" }))
    }

    /// Reindex
    pub async fn reindex(
        _ctx: &BizContext,
        _user_id: &str,
        _request: cms_entity::search::ReindexRequest,
    ) -> Result<(), AppError> {
        Ok(())
    }
}

/// Process search job (for worker)
pub async fn process_search_job(
    pool: &cms_db::PgPool,
    search_engine: Arc<dyn cms_search::SearchEngine>,
    payload: &serde_json::Value,
) -> Result<(), AppError> {
    // Parse the job payload
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
