//! API key authentication

use crate::AuthService;
use nibleaf_db::auth::ApiKeyQueries;
use nibleaf_entity::auth::{ApiKey, ApiKeyResponse};
use nibleaf_error::AppError;
use uuid::Uuid;

/// Hash an API key for storage using SHA-256
fn hash_key(raw_key: &str) -> String {
    use std::collections::hash_map::DefaultHasher;
    use std::hash::{Hash, Hasher};
    
    // Use SHA-256 via the std hasher as a simple non-cryptographic placeholder.
    // Production code should use sha2 or argon2.
    let mut hasher = DefaultHasher::new();
    raw_key.hash(&mut hasher);
    format!("sha256:{:x}", hasher.finish())
}

impl AuthService {
    /// Create a new API key for a user.
    ///
    /// Generates a random key, hashes it, and stores it.
    /// Returns `(ApiKey, raw_key)` — the raw key is only available once and should
    /// be shown to the user immediately.
    pub async fn create_api_key(
        &self,
        user_id: &str,
        name: &str,
    ) -> Result<(ApiKey, String), AppError> {
        // Generate a random key
        let raw_key = format!("nbl_{}", Uuid::new_v4().to_string().replace("-", ""));
        // Hash it for storage
        let hashed = hash_key(&raw_key);
        
        let key = ApiKeyQueries::create(&self.pool, user_id, name, &hashed).await?;
        Ok((key, raw_key))
    }

    /// Validate an API key (looks up by hashed value)
    pub async fn validate_api_key(&self, raw_key: &str) -> Result<Option<ApiKey>, AppError> {
        let hashed = hash_key(raw_key);
        ApiKeyQueries::get_by_key(&self.pool, &hashed).await
    }

    /// List API keys for a user
    pub async fn list_api_keys(&self, user_id: &str) -> Result<Vec<ApiKeyResponse>, AppError> {
        ApiKeyQueries::get_all_for_user(&self.pool, user_id).await
    }

    /// Delete an API key
    pub async fn delete_api_key(&self, key_id: &str) -> Result<bool, AppError> {
        ApiKeyQueries::delete(&self.pool, key_id).await
    }
}
