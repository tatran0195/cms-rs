//! Queue Business Logic
//!
//! This module contains business logic for job queue operations.

use crate::{BizContext, AppError};
use cms_queue::{JobQueue, JobEnvelope, JobType, JobStatus, JobId};
use std::sync::Arc;
use uuid::Uuid;

/// Queue service
pub struct QueueService;

impl QueueService {
    /// Enqueue a job
    pub async fn enqueue_job(
        queue: Arc<dyn JobQueue>,
        job_type: JobType,
        payload: serde_json::Value,
        delay: Option<std::time::Duration>,
    ) -> Result<JobId, AppError> {
        if let Some(delay) = delay {
            queue.enqueue_delayed(JobEnvelope {
                id: JobId(Uuid::new_v4().to_string()),
                job_type,
                payload,
                status: JobStatus::Pending,
                created_at: chrono::Utc::now(),
                started_at: None,
                completed_at: None,
                error_message: None,
                retry_count: 0,
            }, delay).await
        } else {
            queue.enqueue(JobEnvelope {
                id: JobId(Uuid::new_v4().to_string()),
                job_type,
                payload,
                status: JobStatus::Pending,
                created_at: chrono::Utc::now(),
                started_at: None,
                completed_at: None,
                error_message: None,
                retry_count: 0,
            }).await
        }
    }
    
    /// Get job status
    pub async fn get_job_status(
        queue: Arc<dyn JobQueue>,
        job_id: JobId,
    ) -> Result<Option<JobEnvelope>, AppError> {
        queue.get_job(job_id).await
    }
    
    /// List jobs
    pub async fn list_jobs(
        queue: Arc<dyn JobQueue>,
        status: Option<JobStatus>,
        job_type: Option<JobType>,
        limit: Option<usize>,
        offset: Option<usize>,
    ) -> Result<Vec<JobEnvelope>, AppError> {
        queue.list_jobs(status, job_type, limit, offset).await
    }
    
    /// Retry a failed job
    pub async fn retry_job(
        queue: Arc<dyn JobQueue>,
        job_id: JobId,
    ) -> Result<(), AppError> {
        queue.retry_job(job_id).await
    }
    
    /// Delete a job
    pub async fn delete_job(
        queue: Arc<dyn JobQueue>,
        job_id: JobId,
    ) -> Result<bool, AppError> {
        queue.delete_job(job_id).await
    }
}

/// Process reaper job (for worker)
pub async fn process_reaper_job(
    pool: &cms_db::PgPool,
    payload: &serde_json::Value,
) -> Result<(), AppError> {
    // The reaper job cleans up stale jobs
    // In a real implementation, this would:
    // 1. Find jobs that have been pending for too long
    // 2. Find jobs that have failed too many times
    // 3. Clean them up
    
    // For now, this is a no-op
    Ok(())
}
