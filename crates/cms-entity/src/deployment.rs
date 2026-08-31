//! Deployment entity types

use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

use crate::common::{Id, Timestamp};

/// Deployment status
#[derive(Debug, Clone, Serialize, Deserialize, sqlx::Type)]
#[sqlx(type_name = "DeploymentStatus", rename_all = "lowercase")]
pub enum DeploymentStatus {
    Pending,
    Building,
    Deploying,
    Active,
    Failed,
    Deleted,
}

/// Deployment entity
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Deployment {
    pub id: Id,
    pub project_id: Id,
    pub branch_id: Option<Id>,
    pub status: DeploymentStatus,
    pub build_logs: Option<String>,
    pub error_message: Option<String>,
    pub deployed_at: Option<DateTime<Utc>>,
    pub created_at: Timestamp,
    pub updated_at: Timestamp,
}

/// Deployment response
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeploymentResponse {
    pub id: Id,
    pub project_id: Id,
    pub branch_id: Option<Id>,
    pub status: DeploymentStatus,
    pub build_logs: Option<String>,
    pub error_message: Option<String>,
    pub deployed_at: Option<DateTime<Utc>>,
    pub created_at: Timestamp,
    pub updated_at: Timestamp,
}

impl From<Deployment> for DeploymentResponse {
    fn from(deployment: Deployment) -> Self {
        Self {
            id: deployment.id,
            project_id: deployment.project_id,
            branch_id: deployment.branch_id,
            status: deployment.status,
            build_logs: deployment.build_logs,
            error_message: deployment.error_message,
            deployed_at: deployment.deployed_at,
            created_at: deployment.created_at,
            updated_at: deployment.updated_at,
        }
    }
}

/// Create deployment request
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct CreateDeploymentRequest {
    pub project_id: Id,
    #[serde(default)]
    pub branch_id: Option<Id>,
}

/// Update deployment request
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct UpdateDeploymentRequest {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub status: Option<DeploymentStatus>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub build_logs: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub branch_id: Option<Id>,
}

/// List deployments query
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct ListDeploymentsQuery {
    #[serde(default)]
    pub project_id: Option<Id>,
    #[serde(default)]
    pub status: Option<DeploymentStatus>,
    #[serde(default)]
    pub limit: Option<i64>,
    #[serde(default)]
    pub offset: Option<i64>,
}
