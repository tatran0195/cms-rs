//! Nibleaf Middleware
//!
//! This crate contains cross-cutting Tower layers for the Nibleaf API.
//! Following AppFlowy's pattern, middleware is organized as Tower layers.
//!
//! # Production-Ready Features
//!
//! All middleware components use established ecosystem crates:
//! - Rate limiting: `governor` crate (battle-tested, widely adopted)
//! - Metrics: `metrics` crate (lightweight, maintained by tracing authors)
//! - Security headers: `tower-http` with security-headers feature
//! - Admin origin: Custom domain-specific logic (CSRF protection)
//!
//! # Architecture Decisions
//!
//! ## Rate Limiting with Governor
//!
//! We use the `governor` crate instead of custom implementation because:
//! - Battle-tested in production (2M+ downloads)
//! - Handles edge cases (clock skew, timing attacks, etc.)
//! - Provides multiple algorithms (token bucket, fixed window, sliding window)
//! - Thread-safe and designed for async
//! - Standard interface with state inspection
//!
//! ## Metrics with metrics crate
//!
//! We use the `metrics` crate instead of custom implementation because:
//! - Extremely lightweight (~5KB compiled)
//! - Standard interface that works with various backends
//! - Maintained by the same team as `tracing`
//! - Zero-cost abstractions
//! - Future extensibility (can add Prometheus without code changes)
//!
//! ## Security Headers with tower-http
//!
//! We use `tower-http`'s built-in security headers feature:
//! - Already a dependency
//! - Well-tested
//! - Configurable

pub mod app_state;
pub mod rate_limit;
pub mod security_headers;
pub mod locale;
pub mod admin_origin;
pub mod observability;

// Re-export commonly used types
pub use app_state::AppState;
pub use rate_limit::{RateLimitConfig, RateLimitLayer, RateLimitMiddleware, RateLimiter, RateLimitResult, RateLimitMetrics, RateLimitClient};
pub use security_headers::{SecurityHeadersConfig, SecurityHeadersLayer, SecurityHeadersMiddleware, XFrameOptions, ReferrerPolicy, presets};
pub use locale::{Locale, LocaleExtractor, LocaleLayer, SetLocaleMiddleware};
pub use admin_origin::{AdminOriginConfig, AdminOriginValidation, AdminOriginExtractor, AdminOriginLayer, AdminOriginRejection, extract_origin_from_request, normalize_origin};
pub use observability::{
    init_tracing, init_tracing_json,
    ObservabilityLayer, ObservabilityConfig, ObservabilityService,
    REQUEST_ID_HEADER, RESPONSE_TIME_HEADER,
    generate_request_id, get_or_generate_request_id, ensure_request_id,
    add_request_id_to_error,
};
