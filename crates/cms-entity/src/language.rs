//! Language entity types

use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

use crate::common::{Id, PaginatedResponse, Timestamp};

/// Language entity
///
/// Note: Per the architecture decision (doc 04), the system is retargeted
/// from Arabic to Japanese. The RTL layout requirement is dropped since
/// Japanese is LTR.
#[derive(Debug, Clone, Serialize, Deserialize, utoipa::ToSchema)]
pub struct Language {
    pub id: Id,
    pub project_id: Id,
    pub code: String, // ISO 639-1 code (e.g., "en", "ja")
    pub name: String, // Human-readable name (e.g., "English", "Japanese")
    pub is_default: bool,
    pub is_rtl: bool, // Retained for generality, but Japanese is LTR
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

/// Language create request
#[derive(Debug, Clone, Deserialize, Serialize, utoipa::ToSchema)]
pub struct CreateLanguageRequest {
    pub project_id: Id,
    pub code: String,
    pub name: String,
    #[serde(default)]
    pub is_rtl: bool,
}

/// Language update request
#[derive(Debug, Clone, Deserialize, Serialize, utoipa::ToSchema)]
pub struct UpdateLanguageRequest {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub name: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub is_rtl: Option<bool>,
}

/// Language response
#[derive(Debug, Clone, Serialize, Deserialize, utoipa::ToSchema)]
pub struct LanguageResponse {
    pub id: Id,
    pub project_id: Id,
    pub code: String,
    pub name: String,
    pub is_default: bool,
    pub is_rtl: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl From<Language> for LanguageResponse {
    fn from(lang: Language) -> Self {
        Self {
            id: lang.id,
            project_id: lang.project_id,
            code: lang.code,
            name: lang.name,
            is_default: lang.is_default,
            is_rtl: lang.is_rtl,
            created_at: lang.created_at,
            updated_at: lang.updated_at,
        }
    }
}

/// Project translation entity
#[derive(Debug, Clone, Serialize, Deserialize, utoipa::ToSchema)]
pub struct ProjectTranslation {
    pub id: Id,
    pub project_id: Id,
    pub language_id: Id,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub name: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

/// Project translation response
#[derive(Debug, Clone, Serialize, Deserialize, utoipa::ToSchema)]
pub struct ProjectTranslationResponse {
    pub id: Id,
    pub project_id: Id,
    pub language_id: Id,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub name: Option<String>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub description: Option<String>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl From<ProjectTranslation> for ProjectTranslationResponse {
    fn from(trans: ProjectTranslation) -> Self {
        Self {
            id: trans.id,
            project_id: trans.project_id,
            language_id: trans.language_id,
            name: trans.name,
            description: trans.description,
            created_at: trans.created_at,
            updated_at: trans.updated_at,
        }
    }
}

/// List languages query parameters
#[derive(Debug, Clone, Deserialize, Serialize, utoipa::ToSchema)]
pub struct ListLanguagesQuery {
    pub project_id: Id,
}

/// List languages response
pub type ListLanguagesResponse = PaginatedResponse<LanguageResponse>;

/// Set default language request
#[derive(Debug, Clone, Deserialize, Serialize, utoipa::ToSchema)]
pub struct SetDefaultLanguageRequest {
    pub language_id: Id,
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_language_response_conversion() {
        let lang = Language {
            id: "lang-1".to_string(),
            project_id: "proj-1".to_string(),
            code: "ja".to_string(),
            name: "Japanese".to_string(),
            is_default: true,
            is_rtl: false,
            created_at: Utc::now(),
            updated_at: Utc::now(),
        };

        let response: LanguageResponse = lang.into();
        assert_eq!(response.code, "ja");
        assert_eq!(response.name, "Japanese");
        assert!(!response.is_rtl);
    }
}
