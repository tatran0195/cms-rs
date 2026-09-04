//! Host resolution
//!
//! This module handles resolving request hosts to projects and deployments.

use std::{
    collections::HashMap,
    sync::RwLock,
    time::{Duration, Instant},
};

use axum::http::{header, HeaderMap};
use cms_db::{deployment::DeploymentQueries, domain::DomainQueries, project::ProjectQueries};
use cms_entity::common::Id;
use cms_error::AppError;
use sqlx::PgPool;

/// Host resolution result
#[derive(Debug, Clone)]
pub struct HostResolutionResult {
    pub project_id: Id,
    pub deployment_id: Option<Id>,
    pub domain_id: Option<Id>,
    pub is_custom_domain: bool,
    pub hostname: String,
}

/// Cache entry for host resolution
#[derive(Debug, Clone)]
struct HostCacheEntry {
    pub result: Option<HostResolutionResult>,
    pub expires_at: Instant,
}

/// Host resolver with caching
pub struct HostResolver {
    pool: PgPool,
    default_host: String,
    cache: RwLock<HashMap<String, HostCacheEntry>>,
    cache_ttl: Duration,
}

impl HostResolver {
    pub fn new(pool: PgPool, default_host: String) -> Self {
        Self {
            pool,
            default_host,
            cache: RwLock::new(HashMap::new()),
            cache_ttl: Duration::from_secs(300), // 5 minutes
        }
    }

    /// Resolve host to project
    pub async fn resolve(
        &self,
        headers: &HeaderMap,
    ) -> Result<Option<HostResolutionResult>, AppError> {
        // Get Host header
        let host = self.get_host(headers)?;

        // Check cache first
        if let Some(entry) = self.cache.read().unwrap().get(&host) {
            if entry.expires_at > Instant::now() {
                return Ok(entry.result.clone());
            }
        }

        // Try to find domain by hostname
        let result = self.resolve_from_database(&host).await?;

        // Cache the result
        self.cache.write().unwrap().insert(
            host.clone(),
            HostCacheEntry {
                result: result.clone(),
                expires_at: Instant::now() + self.cache_ttl,
            },
        );

        Ok(result)
    }

    /// Get host from headers
    fn get_host(&self, headers: &HeaderMap) -> Result<String, AppError> {
        // Get from X-Forwarded-Host (for reverse proxy)
        if let Some(forwarded_host) = headers.get("X-Forwarded-Host") {
            if let Ok(host) = forwarded_host.to_str() {
                return Ok(host.to_string());
            }
        }

        // Get from Host header
        if let Some(host) = headers.get(header::HOST) {
            if let Ok(host_str) = host.to_str() {
                // Remove port if present
                let host_without_port = host_str.split(':').next().unwrap_or(host_str);
                return Ok(host_without_port.to_string());
            }
        }

        // Fall back to default host
        Ok(self.default_host.clone())
    }

    /// Resolve host from database
    async fn resolve_from_database(
        &self,
        host: &str,
    ) -> Result<Option<HostResolutionResult>, AppError> {
        // Try to find domain by hostname
        if let Some(domain) = DomainQueries::get_by_hostname(&self.pool, host).await? {
            // Get deployment for this domain
            if let Some(deployment) =
                DeploymentQueries::get_by_id(&self.pool, &domain.deployment_id).await?
            {
                // Get project for this deployment
                if let Some(project) =
                    ProjectQueries::get_by_id(&self.pool, &deployment.project_id).await?
                {
                    return Ok(Some(HostResolutionResult {
                        project_id: project.id,
                        deployment_id: Some(deployment.id),
                        domain_id: Some(domain.id),
                        is_custom_domain: true,
                        hostname: domain.hostname,
                    }));
                }
            }
        }

        // If no custom domain found, check if it's the default app domain.
        let bare_default = self
            .default_host
            .trim_start_matches("https://")
            .trim_start_matches("http://")
            .split(':')
            .next()
            .unwrap_or(&self.default_host)
            .to_string();
        if host == self.default_host
            || host == bare_default
            || host.ends_with(".cms.app")
            || host.ends_with(".cms.com")
            || host.ends_with(".cms.dev")
            || (bare_default.contains('.') && host.ends_with(&format!(".{}", bare_default)))
        {
            // Extract project from subdomain
            if let Some(project_slug) = self.extract_subdomain(host) {
                if let Some(project) =
                    ProjectQueries::get_by_slug_global(&self.pool, &project_slug).await?
                {
                    return Ok(Some(HostResolutionResult {
                        project_id: project.id,
                        deployment_id: None,
                        domain_id: None,
                        is_custom_domain: false,
                        hostname: host.to_string(),
                    }));
                }
            }
        }

        Ok(None)
    }

    /// Extract subdomain from host
    fn extract_subdomain(&self, host: &str) -> Option<String> {
        let host = host.strip_suffix(':').unwrap_or(host);

        // Normalize default_host to its bare host part (strip port & scheme).
        let default_host = self
            .default_host
            .trim_start_matches("https://")
            .trim_start_matches("http://");
        let bare_default = default_host.split(':').next().unwrap_or(default_host);

        if host == default_host || host == bare_default {
            return None;
        }

        // Split by dots
        let parts: Vec<&str> = host.split('.').collect();

        // If we have at least 3 parts (e.g., project.cms.app), the first part is the subdomain
        if parts.len() >= 3 {
            // Check if the last two parts match our default host
            let last_two = format!("{}.{}", parts[parts.len() - 2], parts[parts.len() - 1]);
            if last_two == bare_default {
                return Some(parts[0].to_string());
            }

            // Check for .cms.app or .cms.com (legacy app-brand domains).
            if (parts[parts.len() - 1] == "app" || parts[parts.len() - 1] == "com")
                && parts.len() >= 2
                && parts[parts.len() - 2] == "cms"
            {
                return Some(parts[0].to_string());
            }
        }

        // If only 2 parts, the first part might be the subdomain
        if parts.len() == 2 && parts[1] == bare_default {
            return Some(parts[0].to_string());
        }

        None
    }

    /// Clear cache
    pub fn clear_cache(&self) {
        self.cache.write().unwrap().clear();
    }

    /// Get cache size
    pub fn cache_size(&self) -> usize {
        self.cache.read().unwrap().len()
    }
}

/// Default host resolver
pub fn create_host_resolver(pool: PgPool) -> HostResolver {
    HostResolver::new(pool, "cms.app".to_string())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn test_extract_subdomain() {
        let resolver = HostResolver::new(
            sqlx::PgPool::connect_lazy("postgres://user:pass@localhost/db").unwrap(),
            "cms.app".to_string(),
        );

        assert_eq!(
            resolver.extract_subdomain("myproject.cms.app"),
            Some("myproject".to_string())
        );
        assert_eq!(resolver.extract_subdomain("cms.app"), None);
        assert_eq!(resolver.extract_subdomain("localhost:3000"), None);
        assert_eq!(
            resolver.extract_subdomain("myproject.cms.com"),
            Some("myproject".to_string())
        );
    }
}
