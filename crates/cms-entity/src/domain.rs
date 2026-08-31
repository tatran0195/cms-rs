//! Domain entity types

use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use validator::Validate;

use crate::common::{Id, Timestamp};

/// Domain entity
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Domain {
    pub id: Id,
    pub deployment_id: Id,
    pub hostname: String,
    pub is_primary: bool,
    pub ssl_certificate: Option<String>,
    pub ssl_certificate_expires_at: Option<DateTime<Utc>>,
    pub verified_at: Option<DateTime<Utc>>,
    pub created_at: Timestamp,
    pub updated_at: Timestamp,
}

/// Domain response
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DomainResponse {
    pub id: Id,
    pub deployment_id: Id,
    pub hostname: String,
    pub is_primary: bool,
    pub ssl_certificate: Option<String>,
    pub ssl_certificate_expires_at: Option<DateTime<Utc>>,
    pub verified_at: Option<DateTime<Utc>>,
    pub is_verified: bool,
    pub created_at: Timestamp,
    pub updated_at: Timestamp,
}

impl From<Domain> for DomainResponse {
    fn from(domain: Domain) -> Self {
        Self {
            id: domain.id,
            deployment_id: domain.deployment_id,
            hostname: domain.hostname,
            is_primary: domain.is_primary,
            ssl_certificate: domain.ssl_certificate,
            ssl_certificate_expires_at: domain.ssl_certificate_expires_at,
            verified_at: domain.verified_at,
            is_verified: domain.verified_at.is_some(),
            created_at: domain.created_at,
            updated_at: domain.updated_at,
        }
    }
}

/// Create domain request
#[derive(Debug, Clone, Deserialize, Serialize, Validate)]
pub struct CreateDomainRequest {
    #[validate(length(min = 1, message = "Deployment ID is required"))]
    pub deployment_id: String,
    #[validate(length(min = 1, max = 253, message = "Hostname must be between 1 and 253 characters"))]
    pub hostname: String,
    #[serde(default)]
    pub is_primary: bool,
}

/// Update domain request
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct UpdateDomainRequest {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub hostname: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub is_primary: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub ssl_certificate: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub ssl_certificate_expires_at: Option<DateTime<Utc>>,
}

/// Verify domain request
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct VerifyDomainRequest {
    pub verification_token: String,
}

/// List domains query
#[derive(Debug, Clone, Deserialize, Serialize)]
pub struct ListDomainsQuery {
    #[serde(default)]
    pub deployment_id: Option<Id>,
    #[serde(default)]
    pub is_primary: Option<bool>,
    #[serde(default)]
    pub is_verified: Option<bool>,
}

/// Domain verification result
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DomainVerificationResult {
    pub domain_id: Id,
    pub hostname: String,
    pub is_verified: bool,
    pub verification_token: Option<String>,
}
