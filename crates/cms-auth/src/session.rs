//! Session management
//!
//! This module provides session creation, validation, and management.

use chrono::{DateTime, Duration, Utc};
use cms_db::{
    auth::{SessionQueries, UserQueries},
    PgPool,
};
use cms_entity::auth::{Session, SessionResponse, User};
use cms_error::AppError;
use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

use super::AuthService;

/// Session claims for JWT
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SessionClaims {
    pub sub: String, // User ID
    pub session_id: String,
    pub iat: i64,
    pub exp: i64,
    pub nbf: i64,
}

impl SessionClaims {
    pub fn new(user_id: &str, session_id: &str, expires_at: DateTime<Utc>) -> Self {
        let now = Utc::now();

        Self {
            sub: user_id.to_string(),
            session_id: session_id.to_string(),
            iat: now.timestamp(),
            exp: expires_at.timestamp(),
            nbf: now.timestamp(),
        }
    }
}

/// Session service
pub struct SessionService;

impl SessionService {
    /// Create a new session for a user
    pub async fn create(
        pool: &PgPool,
        user_id: &str,
        auth_service: &AuthService,
    ) -> Result<SessionWithToken, AppError> {
        let session_id = Uuid::new_v4().to_string();
        let session_token = Uuid::new_v4().to_string();
        let expires_at =
            Utc::now() + Duration::hours(auth_service.config().session_expiration_hours);

        // Create the session in the database
        let session = SessionQueries::create(pool, user_id, &session_token, expires_at).await?;

        // Create JWT token
        let claims = SessionClaims::new(user_id, &session_id, expires_at);

        let header = Header {
            kid: None,
            alg: jsonwebtoken::Algorithm::HS256,
            ..Default::default()
        };

        let token = encode(&header, &claims, auth_service.encoding_key()).map_err(|e| {
            AppError::Internal(anyhow::anyhow!("Failed to encode session token: {}", e))
        })?;

        Ok(SessionWithToken {
            session: SessionResponse {
                id: session.id,
                user_id: session.user_id,
                expires_at: session.expires_at,
                created_at: session.created_at,
            },
            token,
        })
    }

    /// Validate a session token
    pub async fn validate(
        pool: &PgPool,
        token: &str,
        auth_service: &AuthService,
    ) -> Result<Session, AppError> {
        // Decode the JWT
        let claims: SessionClaims = decode::<SessionClaims>(
            token,
            auth_service.decoding_key(),
            &auth_service.jwt_validation(),
        )
        .map(|td| td.claims)
        .map_err(|e| {
            tracing::debug!("Session token decode failed: {}", e);
            AppError::InvalidSession
        })?;

        // Get the session from the database
        let session = SessionQueries::get_by_id(pool, &claims.session_id)
            .await?
            .ok_or(AppError::InvalidSession)?;

        // Verify the session token matches
        if session.session_token != token {
            return Err(AppError::InvalidSession);
        }

        // Verify the session hasn't expired
        if session.expires_at < Utc::now() {
            return Err(AppError::TokenExpired);
        }

        Ok(session)
    }

    /// Invalidate a session (logout)
    pub async fn invalidate(pool: &PgPool, session_id: &str) -> Result<bool, AppError> {
        SessionQueries::delete(pool, session_id).await
    }

    /// Invalidate all sessions for a user
    pub async fn invalidate_all_for_user(pool: &PgPool, user_id: &str) -> Result<u64, AppError> {
        SessionQueries::delete_all_for_user(pool, user_id).await
    }

    /// Get session by token
    pub async fn get_by_token(pool: &PgPool, token: &str) -> Result<Option<Session>, AppError> {
        SessionQueries::get_by_token(pool, token).await
    }
}

/// Session with token (for response)
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SessionWithToken {
    pub session: SessionResponse,
    pub token: String,
}

#[cfg(test)]
mod tests {
    use chrono::Utc;

    use super::*;

    #[test]
    fn test_session_claims_creation() {
        let user_id = "user-123";
        let session_id = "session-456";
        let expires_at = Utc::now() + Duration::hours(24);

        let claims = SessionClaims::new(user_id, session_id, expires_at);

        assert_eq!(claims.sub, user_id);
        assert_eq!(claims.session_id, session_id);
    }
}
