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
    #[serde(default)]
    pub project_id: Id,
    pub code: String,
    #[serde(alias = "label", default)]
    pub name: String,
    #[serde(alias = "isRtl", default)]
    pub is_rtl: bool,
    #[serde(default)]
    pub direction: Option<String>,
    #[serde(alias = "isDefault", default)]
    pub is_default: Option<bool>,
    #[serde(default)]
    pub enabled: Option<bool>,
}

/// Language update request
#[derive(Debug, Clone, Deserialize, Serialize, utoipa::ToSchema)]
pub struct UpdateLanguageRequest {
    #[serde(alias = "label", skip_serializing_if = "Option::is_none")]
    pub name: Option<String>,
    #[serde(alias = "isRtl", skip_serializing_if = "Option::is_none")]
    pub is_rtl: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub direction: Option<String>,
    #[serde(alias = "isDefault", skip_serializing_if = "Option::is_none")]
    pub is_default: Option<bool>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub enabled: Option<bool>,
}

/// Language response
#[derive(Debug, Clone, Deserialize, utoipa::ToSchema)]
pub struct LanguageResponse {
    pub id: Id,
    #[serde(alias = "projectId")]
    pub project_id: Id,
    pub code: String,
    #[serde(alias = "label")]
    pub name: String,
    #[serde(alias = "isDefault")]
    pub is_default: bool,
    #[serde(alias = "isRtl", default)]
    pub is_rtl: bool,
    #[serde(alias = "createdAt")]
    pub created_at: DateTime<Utc>,
    #[serde(alias = "updatedAt")]
    pub updated_at: DateTime<Utc>,
}

impl serde::Serialize for LanguageResponse {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::Serializer,
    {
        use serde::ser::SerializeMap;
        let mut map = serializer.serialize_map(None)?;
        map.serialize_entry("id", &self.id)?;
        map.serialize_entry("projectId", &self.project_id)?;
        map.serialize_entry("project_id", &self.project_id)?;
        map.serialize_entry("code", &self.code)?;
        map.serialize_entry("label", &self.name)?;
        map.serialize_entry("name", &self.name)?;
        map.serialize_entry("isDefault", &self.is_default)?;
        map.serialize_entry("is_default", &self.is_default)?;
        map.serialize_entry("direction", if self.is_rtl { "RTL" } else { "LTR" })?;
        map.serialize_entry("is_rtl", &self.is_rtl)?;
        map.serialize_entry("enabled", &true)?;
        map.serialize_entry("position", &0)?;
        map.serialize_entry("config", &Option::<serde_json::Value>::None)?;
        map.serialize_entry("translation", &Option::<serde_json::Value>::None)?;
        map.serialize_entry("coverage", &Option::<serde_json::Value>::None)?;
        map.serialize_entry("createdAt", &self.created_at)?;
        map.serialize_entry("created_at", &self.created_at)?;
        map.serialize_entry("updatedAt", &self.updated_at)?;
        map.serialize_entry("updated_at", &self.updated_at)?;
        map.end()
    }
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

    #[test]
    fn test_create_language_request_from_frontend_json() {
        let json_str = r#"{"code":"ja","label":"Japanese","direction":"LTR"}"#;
        let req: Result<CreateLanguageRequest, _> = serde_json::from_str(json_str);
        assert!(req.is_ok(), "Expected frontend JSON to deserialize into CreateLanguageRequest");
        let req = req.unwrap();
        assert_eq!(req.code, "ja");
        assert_eq!(req.name, "Japanese");
        assert_eq!(req.direction, Some("LTR".to_string()));
    }

    #[test]
    fn test_update_language_request_from_frontend_json() {
        let json_str = r#"{"isDefault":true}"#;
        let req: Result<UpdateLanguageRequest, _> = serde_json::from_str(json_str);
        assert!(req.is_ok());
        assert_eq!(req.unwrap().is_default, Some(true));
    }

    #[test]
    fn test_language_response_serialization() {
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
        let val = serde_json::to_value(&response).unwrap();
        assert_eq!(val["projectId"], "proj-1");
        assert_eq!(val["label"], "Japanese");
        assert_eq!(val["direction"], "LTR");
        assert_eq!(val["isDefault"], true);
        assert_eq!(val["enabled"], true);
    }
}
