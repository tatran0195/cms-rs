//! Language database queries

use chrono::{DateTime, Utc};
use cms_entity::language::{
    Language, LanguageResponse, ProjectTranslation, ProjectTranslationResponse,
};
use cms_error::AppError;
use sqlx::{FromRow, PgPool, Postgres, QueryBuilder};
use uuid::Uuid;

/// Database representation of a language row
#[derive(Debug, FromRow)]
struct LanguageRow {
    id: String,
    project_id: String,
    code: String,
    name: String,
    is_default: bool,
    is_rtl: bool,
    created_at: DateTime<Utc>,
    updated_at: DateTime<Utc>,
}

/// Database representation of a project translation row
#[derive(Debug, FromRow)]
struct ProjectTranslationRow {
    id: String,
    project_id: String,
    language_id: String,
    name: Option<String>,
    description: Option<String>,
    created_at: DateTime<Utc>,
    updated_at: DateTime<Utc>,
}

impl From<LanguageRow> for Language {
    fn from(row: LanguageRow) -> Self {
        Self {
            id: row.id,
            project_id: row.project_id,
            code: row.code,
            name: row.name,
            is_default: row.is_default,
            is_rtl: row.is_rtl,
            created_at: row.created_at,
            updated_at: row.updated_at,
        }
    }
}

impl From<LanguageRow> for LanguageResponse {
    fn from(row: LanguageRow) -> Self {
        Self {
            id: row.id,
            project_id: row.project_id,
            code: row.code,
            name: row.name,
            is_default: row.is_default,
            is_rtl: row.is_rtl,
            created_at: row.created_at,
            updated_at: row.updated_at,
        }
    }
}

impl From<ProjectTranslationRow> for ProjectTranslation {
    fn from(row: ProjectTranslationRow) -> Self {
        Self {
            id: row.id,
            project_id: row.project_id,
            language_id: row.language_id,
            name: row.name,
            description: row.description,
            created_at: row.created_at,
            updated_at: row.updated_at,
        }
    }
}

impl From<ProjectTranslationRow> for ProjectTranslationResponse {
    fn from(row: ProjectTranslationRow) -> Self {
        Self {
            id: row.id,
            project_id: row.project_id,
            language_id: row.language_id,
            name: row.name,
            description: row.description,
            created_at: row.created_at,
            updated_at: row.updated_at,
        }
    }
}

/// Language queries
pub struct LanguageQueries;

impl LanguageQueries {
    /// Get a language by ID
    pub async fn get_by_id(pool: &PgPool, language_id: &str) -> Result<Option<Language>, AppError> {
        let row = sqlx::query_as::<_, LanguageRow>("SELECT * FROM \"Language\" WHERE id = $1")
            .bind(language_id)
            .fetch_optional(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;

        Ok(row.map(|r| r.into()))
    }

    /// Get a language by code
    pub async fn get_by_code(
        pool: &PgPool,
        project_id: &str,
        code: &str,
    ) -> Result<Option<Language>, AppError> {
        let row = sqlx::query_as::<_, LanguageRow>(
            "SELECT * FROM \"Language\" WHERE project_id = $1 AND code = $2",
        )
        .bind(project_id)
        .bind(code)
        .fetch_optional(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;

        Ok(row.map(|r| r.into()))
    }

    /// Get default language for a project
    pub async fn get_default(
        pool: &PgPool,
        project_id: &str,
    ) -> Result<Option<Language>, AppError> {
        let row = sqlx::query_as::<_, LanguageRow>(
            "SELECT * FROM \"Language\" WHERE project_id = $1 AND is_default = true LIMIT 1",
        )
        .bind(project_id)
        .fetch_optional(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;

        Ok(row.map(|r| r.into()))
    }

    /// Get languages by project
    pub async fn get_by_project(
        pool: &PgPool,
        project_id: &str,
        limit: Option<i64>,
        offset: Option<i64>,
    ) -> Result<Vec<Language>, AppError> {
        let mut query_builder: QueryBuilder<Postgres> =
            QueryBuilder::new("SELECT * FROM \"Language\" WHERE project_id = ");
        query_builder.push_bind(project_id);

        query_builder.push(" ORDER BY created_at DESC");

        if let Some(limit) = limit {
            query_builder.push(" LIMIT ");
            query_builder.push_bind(limit);
        }

        if let Some(offset) = offset {
            query_builder.push(" OFFSET ");
            query_builder.push_bind(offset);
        }

        let rows = query_builder
            .build_query_as::<LanguageRow>()
            .fetch_all(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;

        Ok(rows.into_iter().map(|r| r.into()).collect())
    }

    /// Count languages by project
    pub async fn count_by_project(pool: &PgPool, project_id: &str) -> Result<i64, AppError> {
        let count: i64 =
            sqlx::query_scalar("SELECT COUNT(*) FROM \"Language\" WHERE project_id = $1")
                .bind(project_id)
                .fetch_one(pool)
                .await
                .map_err(|e| AppError::Database(e.into()))?;

        Ok(count)
    }

    /// Create a new language
    pub async fn create(
        pool: &PgPool,
        project_id: &str,
        code: &str,
        name: &str,
        is_default: bool,
        is_rtl: bool,
    ) -> Result<Language, AppError> {
        let id = Uuid::new_v4().to_string();
        let now = Utc::now();

        // If this is the default language, clear any existing default
        if is_default {
            sqlx::query("UPDATE \"Language\" SET is_default = false WHERE project_id = $1")
                .bind(project_id)
                .execute(pool)
                .await
                .map_err(|e| AppError::Database(e.into()))?;
        }

        let row = sqlx::query_as::<_, LanguageRow>(
            r#"
            INSERT INTO "Language" (id, project_id, code, name, is_default, is_rtl, created_at, updated_at)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *
            "#
        )
        .bind(&id)
        .bind(project_id)
        .bind(code)
        .bind(name)
        .bind(is_default)
        .bind(is_rtl)
        .bind(now)
        .bind(now)
        .fetch_one(pool)
        .await
        .map_err(|e| {
            if e.to_string().contains("duplicate key") {
                AppError::Conflict("Language with this code already exists for this project".to_string())
            } else {
                AppError::Database(e.into())
            }
        })?;

        Ok(row.into())
    }

    /// Update a language
    pub async fn update(
        pool: &PgPool,
        language_id: &str,
        name: Option<&str>,
        is_rtl: Option<bool>,
    ) -> Result<Language, AppError> {
        let mut query_builder: QueryBuilder<Postgres> =
            QueryBuilder::new("UPDATE \"Language\" SET ");

        let mut has_updates = false;
        if let Some(name) = name {
            query_builder.push("name = ");
            query_builder.push_bind(name);
            has_updates = true;
        }
        if let Some(is_rtl) = is_rtl {
            if has_updates {
                query_builder.push(", ");
            }
            query_builder.push("is_rtl = ");
            query_builder.push_bind(is_rtl);
            has_updates = true;
        }

        if has_updates {
            query_builder.push(", updated_at = ");
            query_builder.push_bind(Utc::now());
        }

        query_builder.push(" WHERE id = ");
        query_builder.push_bind(language_id);
        query_builder.push(" RETURNING *");

        let row = query_builder
            .build_query_as::<LanguageRow>()
            .fetch_one(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;

        Ok(row.into())
    }

    /// Delete a language
    pub async fn delete(pool: &PgPool, language_id: &str) -> Result<bool, AppError> {
        let result = sqlx::query("DELETE FROM \"Language\" WHERE id = $1")
            .bind(language_id)
            .execute(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;

        Ok(result.rows_affected() > 0)
    }

    /// Set a language as default
    pub async fn set_default(pool: &PgPool, language_id: &str) -> Result<Language, AppError> {
        let language = LanguageQueries::get_by_id(pool, language_id)
            .await?
            .ok_or_else(|| AppError::NotFound("Language not found".to_string()))?;

        sqlx::query("UPDATE \"Language\" SET is_default = false WHERE project_id = $1")
            .bind(&language.project_id)
            .execute(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;

        let row = sqlx::query_as::<_, LanguageRow>(
            "UPDATE \"Language\" SET is_default = true, updated_at = $1 WHERE id = $2 RETURNING *",
        )
        .bind(Utc::now())
        .bind(language_id)
        .fetch_one(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;

        Ok(row.into())
    }
}

/// Project translation queries
pub struct ProjectTranslationQueries;

impl ProjectTranslationQueries {
    /// Get a translation by ID
    pub async fn get_by_id(
        pool: &PgPool,
        translation_id: &str,
    ) -> Result<Option<ProjectTranslation>, AppError> {
        let row = sqlx::query_as::<_, ProjectTranslationRow>(
            "SELECT * FROM \"ProjectTranslation\" WHERE id = $1",
        )
        .bind(translation_id)
        .fetch_optional(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;

        Ok(row.map(|r| r.into()))
    }

    /// Get translations by project
    pub async fn get_by_project(
        pool: &PgPool,
        project_id: &str,
    ) -> Result<Vec<ProjectTranslation>, AppError> {
        let rows = sqlx::query_as::<_, ProjectTranslationRow>(
            "SELECT * FROM \"ProjectTranslation\" WHERE project_id = $1",
        )
        .bind(project_id)
        .fetch_all(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;

        Ok(rows.into_iter().map(|r| r.into()).collect())
    }

    /// Get translation by language
    pub async fn get_by_language(
        pool: &PgPool,
        language_id: &str,
    ) -> Result<Option<ProjectTranslation>, AppError> {
        let row = sqlx::query_as::<_, ProjectTranslationRow>(
            "SELECT * FROM \"ProjectTranslation\" WHERE language_id = $1",
        )
        .bind(language_id)
        .fetch_optional(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;

        Ok(row.map(|r| r.into()))
    }

    /// Count translations by language
    pub async fn count_by_language(pool: &PgPool, language_id: &str) -> Result<i64, AppError> {
        let count: i64 = sqlx::query_scalar(
            "SELECT COUNT(*) FROM \"ProjectTranslation\" WHERE language_id = $1",
        )
        .bind(language_id)
        .fetch_one(pool)
        .await
        .map_err(|e| AppError::Database(e.into()))?;

        Ok(count)
    }

    /// Create or update a project translation
    pub async fn upsert(
        pool: &PgPool,
        project_id: &str,
        language_id: &str,
        name: Option<&str>,
        description: Option<&str>,
    ) -> Result<ProjectTranslation, AppError> {
        let existing = ProjectTranslationQueries::get_by_language(pool, language_id).await?;

        if let Some(translation) = existing {
            let mut query_builder: QueryBuilder<Postgres> =
                QueryBuilder::new("UPDATE \"ProjectTranslation\" SET ");

            let mut has_updates = false;
            if let Some(name) = name {
                query_builder.push("name = ");
                query_builder.push_bind(name);
                has_updates = true;
            }
            if let Some(description) = description {
                if has_updates {
                    query_builder.push(", ");
                }
                query_builder.push("description = ");
                query_builder.push_bind(description);
                has_updates = true;
            }

            if has_updates {
                query_builder.push(", updated_at = ");
                query_builder.push_bind(Utc::now());
            }

            query_builder.push(" WHERE id = ");
            query_builder.push_bind(&translation.id);
            query_builder.push(" RETURNING *");

            let row = query_builder
                .build_query_as::<ProjectTranslationRow>()
                .fetch_one(pool)
                .await
                .map_err(|e| AppError::Database(e.into()))?;

            Ok(row.into())
        } else {
            let id = Uuid::new_v4().to_string();
            let now = Utc::now();

            let row = sqlx::query_as::<_, ProjectTranslationRow>(
                r#"
                INSERT INTO "ProjectTranslation" (id, project_id, language_id, name, description, created_at, updated_at)
                VALUES ($1, $2, $3, $4, $5, $6, $7)
                RETURNING *
                "#
            )
            .bind(&id)
            .bind(project_id)
            .bind(language_id)
            .bind(name)
            .bind(description)
            .bind(now)
            .bind(now)
            .fetch_one(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;

            Ok(row.into())
        }
    }

    /// Delete a project translation
    pub async fn delete(pool: &PgPool, translation_id: &str) -> Result<bool, AppError> {
        let result = sqlx::query("DELETE FROM \"ProjectTranslation\" WHERE id = $1")
            .bind(translation_id)
            .execute(pool)
            .await
            .map_err(|e| AppError::Database(e.into()))?;

        Ok(result.rows_affected() > 0)
    }
}
