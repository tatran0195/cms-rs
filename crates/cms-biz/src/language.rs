//! Language Business Logic
//!
//! This module contains business logic for languages and project translations.
//! 
//! Note: Per the architecture decision (doc 04), the system is retargeted
//! from Arabic to Japanese. The RTL layout requirement is dropped since
//! Japanese is LTR.

use crate::{BizContext, AppError};
use cms_db::language::{LanguageQueries, ProjectTranslationQueries};
use cms_db::project::ProjectQueries;
use cms_entity::language::{
    Language, LanguageResponse, CreateLanguageRequest, UpdateLanguageRequest,
    ProjectTranslation, ProjectTranslationResponse,
    ListLanguagesQuery, ListLanguagesResponse, SetDefaultLanguageRequest,
};
use cms_entity::common::{Id, PaginatedResponse, MemberRole};
use uuid::Uuid;

/// Language service
pub struct LanguageService;

impl LanguageService {
    /// Create a new language for a project
    pub async fn create_language(
        ctx: &BizContext,
        user_id: &str,
        request: CreateLanguageRequest,
    ) -> Result<LanguageResponse, AppError> {
        // Verify project exists
        let _project = ProjectQueries::get_by_id(&ctx.pool, &request.project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;
        
        // Check if user has admin role in the project
        ctx.access_control.require_project_role(
            user_id,
            &request.project_id,
            MemberRole::Admin,
        ).await?;
        
        // Check if language code is valid
        // For now, we'll just accept any code
        // In production, we might validate against known ISO 639-1 codes
        
        // Check if this language already exists for the project
        let existing = LanguageQueries::get_by_code(
            &ctx.pool,
            &request.project_id,
            &request.code,
        ).await?;
        
        if existing.is_some() {
            return Err(AppError::Conflict("Language with this code already exists for this project".to_string()));
        }
        
        // Determine if this should be the default language
        let is_default = {
            let count = LanguageQueries::count_by_project(&ctx.pool, &request.project_id).await?;
            count == 0 // First language is default
        };
        
        let language = LanguageQueries::create(
            &ctx.pool,
            &request.project_id,
            &request.code,
            &request.name,
            is_default,
            request.is_rtl,
        ).await?;
        
        Ok(language.into())
    }
    
    /// Get a language by ID
    pub async fn get_language(
        ctx: &BizContext,
        user_id: &str,
        language_id: &str,
    ) -> Result<LanguageResponse, AppError> {
        let language = LanguageQueries::get_by_id(&ctx.pool, language_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Language not found".to_string()))?;
        
        // Check if user has access to the project
        ctx.access_control.require_project_role(
            user_id,
            &language.project_id,
            MemberRole::Viewer,
        ).await?;
        
        Ok(language.into())
    }
    
    /// Update a language
    pub async fn update_language(
        ctx: &BizContext,
        user_id: &str,
        language_id: &str,
        request: UpdateLanguageRequest,
    ) -> Result<LanguageResponse, AppError> {
        let language = LanguageQueries::get_by_id(&ctx.pool, language_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Language not found".to_string()))?;
        
        // Check if user has admin role in the project
        ctx.access_control.require_project_role(
            user_id,
            &language.project_id,
            MemberRole::Admin,
        ).await?;
        
        // Cannot change the default language's code
        // (This would require updating all content that references this language)
        
        let updated = LanguageQueries::update(
            &ctx.pool,
            language_id,
            request.name.as_deref(),
            request.is_rtl,
        ).await?;
        
        Ok(updated.into())
    }
    
    /// Delete a language
    pub async fn delete_language(
        ctx: &BizContext,
        user_id: &str,
        language_id: &str,
    ) -> Result<bool, AppError> {
        let language = LanguageQueries::get_by_id(&ctx.pool, language_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Language not found".to_string()))?;
        
        // Check if user has admin role in the project
        ctx.access_control.require_project_role(
            user_id,
            &language.project_id,
            MemberRole::Admin,
        ).await?;
        
        // Cannot delete the default language
        if language.is_default {
            return Err(AppError::AccessDenied("Cannot delete the default language".to_string()));
        }
        
        // Check if there are translations using this language
        // If so, we might want to handle them (delete, reassign, etc.)
        let translation_count = ProjectTranslationQueries::count_by_language(
            &ctx.pool,
            language_id,
        ).await?;
        
        if translation_count > 0 {
            return Err(AppError::Conflict("Cannot delete a language with translations. Delete or reassign translations first.".to_string()));
        }
        
        LanguageQueries::delete(&ctx.pool, language_id).await
    }
    
    /// List languages for a project
    pub async fn list_languages(
        ctx: &BizContext,
        user_id: &str,
        query: ListLanguagesQuery,
        page: u64,
        page_size: u64,
    ) -> Result<ListLanguagesResponse, AppError> {
        let _project = ProjectQueries::get_by_id(&ctx.pool, &query.project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;
        
        // Check if user has access to the project
        ctx.access_control.require_project_role(
            user_id,
            &query.project_id,
            MemberRole::Viewer,
        ).await?;
        
        let languages = LanguageQueries::get_by_project(
            &ctx.pool,
            &query.project_id,
            Some(page as i64),
            Some(page_size as i64),
        ).await?;
        
        let total = LanguageQueries::count_by_project(&ctx.pool, &query.project_id).await?;
        
        Ok(PaginatedResponse::new(
            languages.into_iter().map(|l| l.into()).collect(),
            total as u64,
            page,
            page_size,
        ))
    }
    
    /// Set the default language for a project
    pub async fn set_default_language(
        ctx: &BizContext,
        user_id: &str,
        request: SetDefaultLanguageRequest,
    ) -> Result<LanguageResponse, AppError> {
        let language = LanguageQueries::get_by_id(&ctx.pool, &request.language_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Language not found".to_string()))?;
        
        // Check if user has admin role in the project
        ctx.access_control.require_project_role(
            user_id,
            &language.project_id,
            MemberRole::Admin,
        ).await?;
        
        let updated = LanguageQueries::set_default(&ctx.pool, &request.language_id).await?;
        
        Ok(updated.into())
    }
    
    /// Get project translations
    pub async fn get_project_translations(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
    ) -> Result<Vec<ProjectTranslationResponse>, AppError> {
        let _project = ProjectQueries::get_by_id(&ctx.pool, project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;
        
        // Check if user has access to the project
        ctx.access_control.require_project_role(
            user_id,
            project_id,
            MemberRole::Viewer,
        ).await?;
        
        let translations = ProjectTranslationQueries::get_by_project(&ctx.pool, project_id).await?;
        
        Ok(translations.into_iter().map(|t| t.into()).collect())
    }
    
    /// Create or update a project translation
    pub async fn upsert_project_translation(
        ctx: &BizContext,
        user_id: &str,
        project_id: &str,
        language_id: &str,
        name: Option<&str>,
        description: Option<&str>,
    ) -> Result<ProjectTranslationResponse, AppError> {
        let _project = ProjectQueries::get_by_id(&ctx.pool, project_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;
        
        // Check if user has admin role in the project
        ctx.access_control.require_project_role(
            user_id,
            project_id,
            MemberRole::Admin,
        ).await?;
        
        // Verify language belongs to this project
        let language = LanguageQueries::get_by_id(&ctx.pool, language_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Language not found".to_string()))?;
        
        if language.project_id != project_id {
            return Err(AppError::Conflict("Language does not belong to this project".to_string()));
        }
        
        let translation = ProjectTranslationQueries::upsert(
            &ctx.pool,
            project_id,
            language_id,
            name,
            description,
        ).await?;
        
        Ok(translation.into())
    }
    
    /// Delete a project translation
    pub async fn delete_project_translation(
        ctx: &BizContext,
        user_id: &str,
        translation_id: &str,
    ) -> Result<bool, AppError> {
        let translation = ProjectTranslationQueries::get_by_id(&ctx.pool, translation_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Translation not found".to_string()))?;
        
        // Check if user has admin role in the project
        ctx.access_control.require_project_role(
            user_id,
            &translation.project_id,
            MemberRole::Admin,
        ).await?;
        
        ProjectTranslationQueries::delete(&ctx.pool, translation_id).await
    }
}


