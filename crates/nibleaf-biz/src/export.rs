//! Export Business Logic
//!
//! This module contains business logic for exporting projects and pages.

use crate::{BizContext, AppError};
use nibleaf_db::export::{ExportSnapshotQueries, ExportJobQueries, ExportArtifactQueries, ExportScheduleQueries};
use nibleaf_db::project::ProjectQueries;
use nibleaf_db::page::PageQueries;
use nibleaf_entity::export::{ExportFormat, ExportStatus, ExportSnapshot, ExportJob, ExportArtifact, ExportSchedule, CreateExportRequest};
use nibleaf_entity::common::{Id, PaginatedResponse, MemberRole};
use nibleaf_storage::Storage;
use std::sync::Arc;
use uuid::Uuid;
use chrono::Utc;
use bytes::Bytes;

/// Export service
pub struct ExportService;

impl ExportService {
    /// Create an export snapshot
    pub async fn create_export_snapshot(
        ctx: &BizContext,
        user_id: &str,
        request: CreateExportRequest,
    ) -> Result<ExportSnapshot, AppError> {
        // Verify project exists
        let project = ProjectQueries::get_by_id(&ctx.pool, &request.project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;
        
        // Check if user has access to the project
        ctx.access_control.require_project_role(
            user_id,
            &request.project_id,
            MemberRole::Viewer,
        ).await?;
        
        let snapshot = ExportSnapshotQueries::create(
            &ctx.pool,
            &request.project_id,
            request.branch_id.as_deref(),
            request.language_id.as_deref(),
        ).await?;
        
        Ok(snapshot)
    }
    
    /// Get an export snapshot
    pub async fn get_export_snapshot(
        ctx: &BizContext,
        user_id: &str,
        snapshot_id: &str,
    ) -> Result<ExportSnapshot, AppError> {
        let snapshot = ExportSnapshotQueries::get_by_id(&ctx.pool, snapshot_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Export snapshot not found".to_string()))?;
        
        // Check if user has access to the project
        ctx.access_control.require_project_role(
            user_id,
            &snapshot.project_id,
            MemberRole::Viewer,
        ).await?;
        
        Ok(snapshot)
    }
    
    /// List export snapshots for a project
    pub async fn list_export_snapshots(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
        page: u64,
        page_size: u64,
    ) -> Result<PaginatedResponse<ExportSnapshot>, AppError> {
        let _project = ProjectQueries::get_by_id(&ctx.pool, project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;
        
        // Check if user has access to the project
        ctx.access_control.require_project_role(
            user_id,
            project_id,
            MemberRole::Viewer,
        ).await?;
        
        let snapshots = ExportSnapshotQueries::get_by_project(
            &ctx.pool,
            project_id,
            Some(page as i64),
            Some(page_size as i64),
        ).await?;
        
        let total = ExportSnapshotQueries::count_by_project(&ctx.pool, project_id).await?;
        
        Ok(PaginatedResponse::new(
            snapshots,
            total as u64,
            page,
            page_size,
        ))
    }
    
    /// Create an export job
    pub async fn create_export_job(
        ctx: &BizContext,
        user_id: &str,
        snapshot_id: &str,
        format: ExportFormat,
    ) -> Result<ExportJob, AppError> {
        let snapshot = ExportSnapshotQueries::get_by_id(&ctx.pool, snapshot_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Export snapshot not found".to_string()))?;
        
        // Check if user has access to the project
        ctx.access_control.require_project_role(
            user_id,
            &snapshot.project_id,
            MemberRole::Viewer,
        ).await?;
        
        let job = ExportJobQueries::create(
            &ctx.pool,
            snapshot_id,
            format,
            ExportStatus::Pending,
        ).await?;
        
        // Queue the export job for processing
        // This would enqueue a job to the worker
        
        Ok(job)
    }
    
    /// Get an export job
    pub async fn get_export_job(
        ctx: &BizContext,
        user_id: &str,
        job_id: &str,
    ) -> Result<ExportJob, AppError> {
        let job = ExportJobQueries::get_by_id(&ctx.pool, job_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Export job not found".to_string()))?;
        
        let snapshot = ExportSnapshotQueries::get_by_id(&ctx.pool, &job.snapshot_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Export snapshot not found".to_string()))?;
        
        // Check if user has access to the project
        ctx.access_control.require_project_role(
            user_id,
            &snapshot.project_id,
            MemberRole::Viewer,
        ).await?;
        
        Ok(job)
    }
    
    /// List export jobs for a snapshot
    pub async fn list_export_jobs(
        ctx: &BizContext,
        user_id: &str,
        snapshot_id: &str,
        page: u64,
        page_size: u64,
    ) -> Result<PaginatedResponse<ExportJob>, AppError> {
        let snapshot = ExportSnapshotQueries::get_by_id(&ctx.pool, snapshot_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Export snapshot not found".to_string()))?;
        
        // Check if user has access to the project
        ctx.access_control.require_project_role(
            user_id,
            &snapshot.project_id,
            MemberRole::Viewer,
        ).await?;
        
        let jobs = ExportJobQueries::get_by_snapshot(
            &ctx.pool,
            snapshot_id,
            Some(page as i64),
            Some(page_size as i64),
        ).await?;
        
        let total = ExportJobQueries::count_by_snapshot(&ctx.pool, snapshot_id).await?;
        
        Ok(PaginatedResponse::new(
            jobs,
            total as u64,
            page,
            page_size,
        ))
    }
    
    /// Get export artifacts for a job
    pub async fn get_export_artifacts(
        ctx: &BizContext,
        user_id: &str,
        job_id: &str,
    ) -> Result<Vec<ExportArtifact>, AppError> {
        let job = ExportJobQueries::get_by_id(&ctx.pool, job_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Export job not found".to_string()))?;
        
        let snapshot = ExportSnapshotQueries::get_by_id(&ctx.pool, &job.snapshot_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Export snapshot not found".to_string()))?;
        
        // Check if user has access to the project
        ctx.access_control.require_project_role(
            user_id,
            &snapshot.project_id,
            MemberRole::Viewer,
        ).await?;
        
        ExportArtifactQueries::get_by_job(&ctx.pool, job_id).await
    }
    
    /// Create an export schedule
    pub async fn create_export_schedule(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
        format: ExportFormat,
        frequency: &str,
        day_of_week: Option<i32>,
        day_of_month: Option<i32>,
        time_of_day: &str,
    ) -> Result<ExportSchedule, AppError> {
        let _project = ProjectQueries::get_by_id(&ctx.pool, project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;
        
        // Check if user has admin role in the project
        ctx.access_control.require_project_role(
            user_id,
            project_id,
            MemberRole::Admin,
        ).await?;
        
        let schedule = ExportScheduleQueries::create(
            &ctx.pool,
            project_id,
            format,
            frequency,
            day_of_week,
            day_of_month,
            time_of_day,
            true,
        ).await?;
        
        Ok(schedule)
    }
    
    /// Delete an export schedule
    pub async fn delete_export_schedule(
        ctx: &BizContext,
        user_id: &str,
        schedule_id: &str,
    ) -> Result<bool, AppError> {
        let schedule = ExportScheduleQueries::get_by_id(&ctx.pool, schedule_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Export schedule not found".to_string()))?;
        
        // Check if user has admin role in the project
        ctx.access_control.require_project_role(
            user_id,
            &schedule.project_id,
            MemberRole::Admin,
        ).await?;
        
        ExportScheduleQueries::delete(&ctx.pool, schedule_id).await
    }

    /// Get download url for export job
    pub async fn get_download_url(
        ctx: &BizContext,
        user_id: &str,
        job_id: &str,
    ) -> Result<String, AppError> {
        let artifacts = Self::get_export_artifacts(ctx, user_id, job_id).await?;
        let artifact = artifacts.into_iter().next()
            .ok_or_else(|| AppError::NotFound("Export artifact not found".to_string()))?;
        Ok(artifact.download_url.unwrap_or_else(|| format!("/api/export/download/{}", artifact.id)))
    }

    /// List export schedules for a project
    pub async fn list_export_schedules(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
    ) -> Result<Vec<ExportSchedule>, AppError> {
        ctx.access_control.require_project_role(
            user_id,
            project_id,
            MemberRole::Viewer,
        ).await?;
        ExportScheduleQueries::get_by_project(&ctx.pool, project_id).await
    }

    /// Update export schedule
    pub async fn update_export_schedule(
        ctx: &BizContext,
        user_id: &str,
        schedule_id: &str,
        request: nibleaf_entity::export::UpdateExportScheduleRequest,
    ) -> Result<ExportSchedule, AppError> {
        let schedule = ExportScheduleQueries::get_by_id(&ctx.pool, schedule_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Export schedule not found".to_string()))?;
        ctx.access_control.require_project_role(
            user_id,
            &schedule.project_id,
            MemberRole::Admin,
        ).await?;
        let updated = ExportScheduleQueries::update(
            &ctx.pool,
            schedule_id,
            request.is_active,
            request.time_of_day.as_deref(),
        ).await?;
        Ok(updated)
    }
}

/// Process export job (for worker)
pub async fn process_export_job(
    pool: &nibleaf_db::PgPool,
    storage: Arc<dyn Storage>,
    payload: &serde_json::Value,
) -> Result<(), AppError> {
    let job_id = payload.get("job_id").and_then(|v| v.as_str())
        .ok_or_else(|| AppError::InvalidInput("Missing job_id".to_string()))?;
    
    let mut job = ExportJobQueries::get_by_id(pool, job_id)
        .await?
        .ok_or_else(|| AppError::NotFound("Export job not found".to_string()))?;
    
    // Update job status to processing
    job = ExportJobQueries::update_status(pool, job_id, ExportStatus::Processing).await?;
    
    let snapshot = ExportSnapshotQueries::get_by_id(pool, &job.snapshot_id)
        .await?
        .ok_or_else(|| AppError::NotFound("Export snapshot not found".to_string()))?;
    
    // Get all pages for the snapshot
    let pages = if let Some(branch_id) = &snapshot.branch_id {
        PageQueries::get_by_project_and_branch(
            pool,
            &snapshot.project_id,
            branch_id,
            None,
            None,
            None,
            None,
            None,
        ).await?
    } else {
        // Get default branch
        let default_branch = nibleaf_db::branch::BranchQueries::get_default(pool, &snapshot.project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Default branch not found".to_string()))?;
        
        PageQueries::get_by_project_and_branch(
            pool,
            &snapshot.project_id,
            &default_branch.id,
            None,
            None,
            None,
            None,
            None,
        ).await?
    };
    
    // Generate export content based on format
    let content = match job.format {
        ExportFormat::HTML | ExportFormat::Html =>
            generate_html_export(&pages, &snapshot.project_id).await,
        ExportFormat::PDF | ExportFormat::Pdf =>
            generate_pdf_export(&pages, &snapshot.project_id).await,
        ExportFormat::MARKDOWN | ExportFormat::Markdown =>
            generate_markdown_export(&pages).await,
        ExportFormat::EPUB | ExportFormat::Epub =>
            generate_epub_export(&pages, &snapshot.project_id).await,
    };
    
    // Store the export artifact
    let storage_key = format!("exports/{}/{}/{}.{}", 
        snapshot.project_id, 
        job.id, 
        Utc::now().timestamp(),
        match &job.format {
            ExportFormat::HTML | ExportFormat::Html => "html",
            ExportFormat::PDF | ExportFormat::Pdf => "pdf",
            ExportFormat::MARKDOWN | ExportFormat::Markdown => "md",
            ExportFormat::EPUB | ExportFormat::Epub => "epub",
        }
    );
    
    let content_len = content.len() as i64;
    storage.put(&storage_key, content.into(), "application/octet-stream").await?;
    
    // Create artifact record
    let artifact = ExportArtifactQueries::create(
        pool,
        job_id,
        &format!("export.{}", match &job.format {
            ExportFormat::HTML | ExportFormat::Html => "html",
            ExportFormat::PDF | ExportFormat::Pdf => "pdf",
            ExportFormat::MARKDOWN | ExportFormat::Markdown => "md",
            ExportFormat::EPUB | ExportFormat::Epub => "epub",
        }),
        content_len,
        &storage_key,
        None, // download_url
    ).await?;
    
    // Update job status to completed
    ExportJobQueries::update_status(pool, job_id, ExportStatus::Completed).await?;
    ExportJobQueries::update_output_path(pool, job_id, &storage_key).await?;
    
    Ok(())
}

/// Generate HTML export
async fn generate_html_export(
    pages: &[nibleaf_entity::page::PageListItem],
    _project_id: &str,
) -> Bytes {
    // Simplified HTML generation
    // In practice, this would use a proper HTML templating system
    use bytes::Bytes;
    
    let mut html = String::from("<html><head><title>Export</title></head><body>");
    
    for page in pages {
        html.push_str(&format!("<h1>{}</h1>", page.title));
        html.push_str(&format!("<div>{}</div>", page.content.as_deref().unwrap_or("")));
    }
    
    html.push_str("</body></html>");
    
    Bytes::from(html)
}

/// Generate Markdown export
async fn generate_markdown_export(
    pages: &[nibleaf_entity::page::PageListItem],
) -> Bytes {
    use bytes::Bytes;
    
    let mut md = String::new();
    
    for page in pages {
        md.push_str(&format!("# {}\n\n", page.title));
        md.push_str(&format!("{}\n\n", page.content.as_deref().unwrap_or("")));
        md.push_str("---\n\n");
    }
    
    Bytes::from(md)
}

/// Generate PDF export (placeholder)
async fn generate_pdf_export(
    _pages: &[nibleaf_entity::page::PageListItem],
    _project_id: &str,
) -> Bytes {
    // In practice, this would use a PDF generation library
    // For now, return an empty PDF
    use bytes::Bytes;
    Bytes::from("%PDF-1.4\n")
}

/// Generate EPUB export (placeholder)
async fn generate_epub_export(
    _pages: &[nibleaf_entity::page::PageListItem],
    _project_id: &str,
) -> Bytes {
    // In practice, this would use an EPUB generation library
    // For now, return an empty EPUB
    use bytes::Bytes;
    Bytes::from("PK\x03\x04")
}
