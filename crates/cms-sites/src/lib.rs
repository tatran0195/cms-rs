//! CMS Sites
//!
//! This crate handles serving published documentation sites and marketing pages.
//! It provides host resolution, Markdown to HTML rendering, SEO/machine files,
//! and security headers for published sites.
//!
//! This replaces the functionality in `apps/app/src/server.ts` from the original
//! TypeScript monorepo.

pub mod host_resolution;
pub mod markdown_renderer;
pub mod security;
pub mod seo;
pub mod static_files;

use std::sync::Arc;

use axum::{
    extract::{Path, State},
    http::{HeaderMap, StatusCode},
    response::{Html, Response},
    Router,
};
use cms_db::{page::PageQueries, project::ProjectQueries};
use cms_error::AppError;
use cms_middleware::app_state::AppState;
use host_resolution::{HostResolutionResult, HostResolver};
use markdown_renderer::{HighlightTheme, MarkdownRenderer, MarkdownRendererConfig};
use security::SiteSecurityHeaders;
use seo::{SeoGenerator, SitemapGenerator};
use static_files::StaticFileServer;

/// AppState for sites - this will be provided by the binary crate
pub type SitesAppState = AppState;

/// Create the sites router
pub fn create_sites_router(state: Arc<SitesAppState>) -> Router {
    create_router(state)
}

/// Alias for create_sites_router (for compatibility with main.rs)
pub fn sites_router(state: Arc<SitesAppState>) -> Router {
    create_sites_router(state)
}

/// Create the full router with all site routes
fn create_router(state: Arc<SitesAppState>) -> Router {
    use axum::routing::get;

    Router::new()
        // Main site handler - resolves host and serves appropriate content
        .route("/", get(root_handler))
        .route("/*path", get(wildcard_handler))
        // SEO files
        .route("/robots.txt", get(robots_txt_handler))
        .route("/sitemap.xml", get(sitemap_xml_handler))
        .route("/.well-known/security.txt", get(security_txt_handler))
        .route("/.well-known/pgp-key.txt", get(pgp_key_handler))
        // Static assets for published sites
        .route("/assets/*path", get(asset_handler))
        .route("/css/*path", get(css_handler))
        .route("/js/*path", get(js_handler))
        .route("/fonts/*path", get(font_handler))
        .route("/images/*path", get(image_handler))
        // Favicon
        .route("/favicon.ico", get(favicon_handler))
        .route("/favicon-32x32.png", get(favicon_32_handler))
        .route("/favicon-16x16.png", get(favicon_16_handler))
        .route("/apple-touch-icon.png", get(apple_touch_icon_handler))
        // Manifest
        .route("/site.webmanifest", get(manifest_handler))
        .with_state(state)
}

/// Get host resolver from app state
fn get_host_resolver(state: &Arc<SitesAppState>) -> HostResolver {
    HostResolver::new(state.biz_context.pool.clone(), "cms.app".to_string())
}

/// Get markdown renderer from app state
fn get_markdown_renderer(_state: &Arc<SitesAppState>) -> MarkdownRenderer {
    let config = MarkdownRendererConfig {
        enable_syntax_highlighting: true,
        enable_toc: true,
        enable_footnotes: true,
        enable_task_lists: true,
        enable_strikethrough: true,
        enable_emoji: true,
        highlight_theme: HighlightTheme::default(),
        enable_heading_ids: true,
        base_url: "/".to_string(),
    };
    MarkdownRenderer::new(config)
}

/// Get SEO generator from app state
fn get_seo_generator(_state: &Arc<SitesAppState>) -> SeoGenerator {
    SeoGenerator::new("https://cms.app".to_string())
}

/// Get sitemap generator from app state
fn get_sitemap_generator(_state: &Arc<SitesAppState>) -> SitemapGenerator {
    SitemapGenerator::new("https://cms.app".to_string())
}

/// Root handler - resolves host and serves appropriate content
async fn root_handler(
    State(state): State<Arc<SitesAppState>>,
    headers: HeaderMap,
) -> Result<Html<String>, AppError> {
    let host_resolver = get_host_resolver(&state);

    // Resolve host to project
    let resolution = host_resolver.resolve(&headers).await?;

    match resolution {
        Some(result) => serve_project_index(&state, &result).await,
        None => serve_not_found(),
    }
}

/// Wildcard handler for all paths
async fn wildcard_handler(
    State(state): State<Arc<SitesAppState>>,
    headers: HeaderMap,
    Path(path): Path<String>,
) -> Result<Html<String>, AppError> {
    let host_resolver = get_host_resolver(&state);

    // Resolve host to project
    let resolution = host_resolver.resolve(&headers).await?;

    match resolution {
        Some(result) => serve_page(&state, &result, &path).await,
        None => serve_not_found(),
    }
}

/// Serve project index page
async fn serve_project_index(
    state: &Arc<SitesAppState>,
    resolution: &HostResolutionResult,
) -> Result<Html<String>, AppError> {
    // Get project
    let project = ProjectQueries::get_by_id(&state.biz_context.pool, &resolution.project_id)
        .await?
        .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

    // Get project pages
    let pages =
        PageQueries::get_by_project(&state.biz_context.pool, &resolution.project_id).await?;

    // Find the root page (index or home)
    let root_page = pages
        .iter()
        .find(|p| p.path == "/" || p.slug == "index" || p.slug == "home" || p.slug == "readme")
        .cloned();

    match root_page {
        Some(page) => {
            let html = render_page(state, &page, &project).await?;
            Ok(Html(html))
        }
        None => {
            // No root page found, show project listing
            let html = render_project_listing(state, &project, &pages).await?;
            Ok(Html(html))
        }
    }
}

/// Serve specific page
async fn serve_page(
    state: &Arc<SitesAppState>,
    resolution: &HostResolutionResult,
    path: &str,
) -> Result<Html<String>, AppError> {
    // Get project
    let project = ProjectQueries::get_by_id(&state.biz_context.pool, &resolution.project_id)
        .await?
        .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

    // Find page by path
    let pages =
        PageQueries::get_by_project(&state.biz_context.pool, &resolution.project_id).await?;

    // Try to find page by exact path match
    let page = pages
        .iter()
        .find(|p| p.path == path || p.path == format!("/{}", path) || p.slug == path)
        .cloned();

    match page {
        Some(page) => {
            let html = render_page(state, &page, &project).await?;
            Ok(Html(html))
        }
        None => serve_not_found(),
    }
}

/// Render a page to HTML
async fn render_page(
    state: &Arc<SitesAppState>,
    page: &cms_entity::page::Page,
    project: &cms_entity::project::Project,
) -> Result<String, AppError> {
    let markdown_renderer = get_markdown_renderer(state);
    let seo_generator = get_seo_generator(state);

    // Generate SEO metadata
    let metadata = seo_generator.generate_page_metadata(page, project);
    let seo_tags = seo_generator.generate_meta_tags(&metadata);
    let structured_data = seo_generator.generate_structured_data(&metadata, true);

    // Render markdown to HTML
    let content = markdown_renderer.render_page(page, project);

    // Generate full HTML
    let html = format!(
        r#"<!DOCTYPE html>
<html lang="en">
<head>
{}
{}
{}
</head>
<body>
{}
</body>
</html>"#,
        seo_tags,
        structured_data,
        get_security_headers(),
        content
    );

    Ok(html)
}

/// Render project listing page
async fn render_project_listing(
    state: &Arc<SitesAppState>,
    project: &cms_entity::project::Project,
    pages: &[cms_entity::page::Page],
) -> Result<String, AppError> {
    let seo_generator = get_seo_generator(state);

    // Generate SEO metadata
    let metadata = seo_generator.generate_project_metadata(project);
    let seo_tags = seo_generator.generate_meta_tags(&metadata);
    let structured_data = seo_generator.generate_structured_data(&metadata, false);

    // Generate page list
    let mut page_list = String::new();
    for page in pages {
        page_list.push_str(&format!(
            "<li><a href=\"/{}/{}\">{}</a></li>\n",
            project.slug, page.slug, page.title
        ));
    }

    // Generate full HTML
    let html = format!(
        r#"<!DOCTYPE html>
<html lang="en">
<head>
{}
{}
{}
</head>
<body>
    <header>
        <h1>{}</h1>
        <p>{}</p>
    </header>
    <main>
        <h2>Pages</h2>
        <ul>
{}
        </ul>
    </main>
    <footer>
        <hr>
        <p>Powered by <a href="https://cms.com">CMS</a></p>
    </footer>
</body>
</html>"#,
        seo_tags,
        structured_data,
        get_security_headers(),
        project.name,
        project.description.as_deref().unwrap_or(""),
        page_list
    );

    Ok(html)
}

/// Get security headers for published sites
fn get_security_headers() -> String {
    let security = SiteSecurityHeaders::default();
    let mut headers = String::new();

    for (name, value) in security.get_headers() {
        headers.push_str(&format!(
            "<meta http-equiv=\"{}\" content=\"{}\">\n",
            name, value
        ));
    }

    headers
}

/// Return 404 Not Found response
fn serve_not_found() -> Result<Html<String>, AppError> {
    let html = r#"<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Not Found</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            text-align: center;
            padding: 50px;
        }
        h1 {
            font-size: 50px;
            margin-bottom: 10px;
        }
        p {
            font-size: 20px;
            color: #666;
        }
    </style>
</head>
<body>
    <h1>404</h1>
    <p>Page not found</p>
</body>
</html>"#
        .to_string();
    Err(cms_error::AppError::NotFound(html))
}

/// Robots.txt handler - generates custom robots.txt per project
async fn robots_txt_handler(
    State(state): State<Arc<SitesAppState>>,
    headers: HeaderMap,
) -> Result<String, AppError> {
    let host_resolver = get_host_resolver(&state);

    // Resolve host to project
    match host_resolver.resolve(&headers).await? {
        Some(result) => {
            // Get project
            let project = ProjectQueries::get_by_id(&state.biz_context.pool, &result.project_id)
                .await?
                .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

            // Generate custom robots.txt for project
            Ok(format!(
                "User-agent: *\nAllow: /\nSitemap: {}/sitemap.xml\n\nDisallow: /api/\nDisallow: \
                 /admin/\nDisallow: /private/\n",
                if result.is_custom_domain {
                    format!("https://{}", result.hostname)
                } else {
                    format!("https://{}.cms.app", project.slug)
                }
            ))
        }
        None => {
            // Default robots.txt
            Ok(
                "User-agent: *\nAllow: /\nSitemap: /sitemap.xml\n\nDisallow: /api/\nDisallow: \
                 /admin/\nDisallow: /private/\n"
                    .to_string(),
            )
        }
    }
}

/// Sitemap.xml handler - generates sitemap from database
async fn sitemap_xml_handler(
    State(state): State<Arc<SitesAppState>>,
    headers: HeaderMap,
) -> Result<String, AppError> {
    let host_resolver = get_host_resolver(&state);

    // Resolve host to project
    match host_resolver.resolve(&headers).await? {
        Some(result) => {
            // Get project
            let project = ProjectQueries::get_by_id(&state.biz_context.pool, &result.project_id)
                .await?
                .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

            // Get all published pages
            let pages =
                PageQueries::get_by_project(&state.biz_context.pool, &result.project_id).await?;

            // Filter only published pages
            let published_pages: Vec<_> = pages.into_iter().filter(|p| p.is_published).collect();

            // Generate sitemap
            let base_url = if result.is_custom_domain {
                format!("https://{}", result.hostname)
            } else {
                format!("https://{}.cms.app", project.slug)
            };

            let sitemap_gen = SitemapGenerator::new(base_url);
            Ok(sitemap_gen.generate_project_sitemap(&project, &published_pages))
        }
        None => {
            // Default empty sitemap
            Ok("<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n</urlset>".to_string())
        }
    }
}

/// Security.txt handler
async fn security_txt_handler() -> String {
    "Contact: security@cms.com\nEncryption: https://cms.com/.well-known/pgp-key.txt\nAcknowledgments: https://cms.com/security/acknowledgments\nPolicy: https://cms.com/security/policy\nHiring: https://cms.com/jobs".to_string()
}

/// PGP key handler
async fn pgp_key_handler() -> String {
    // In a real implementation, this would serve the actual PGP key
    "-----BEGIN PGP PUBLIC KEY BLOCK-----\n\n-----END PGP PUBLIC KEY BLOCK-----".to_string()
}

/// Asset handler for published site assets
async fn asset_handler(
    State(state): State<Arc<SitesAppState>>,
    Path(path): Path<String>,
) -> Result<Response, StatusCode> {
    let static_server = StaticFileServer::new(state.storage.clone());
    static_server.serve_file(&format!("assets/{}", path)).await
}

/// CSS handler
async fn css_handler(
    State(state): State<Arc<SitesAppState>>,
    Path(path): Path<String>,
) -> Result<Response, StatusCode> {
    let static_server = StaticFileServer::new(state.storage.clone());
    static_server.serve_file(&format!("css/{}", path)).await
}

/// JavaScript handler
async fn js_handler(
    State(state): State<Arc<SitesAppState>>,
    Path(path): Path<String>,
) -> Result<Response, StatusCode> {
    let static_server = StaticFileServer::new(state.storage.clone());
    static_server.serve_file(&format!("js/{}", path)).await
}

/// Font handler
async fn font_handler(
    State(state): State<Arc<SitesAppState>>,
    Path(path): Path<String>,
) -> Result<Response, StatusCode> {
    let static_server = StaticFileServer::new(state.storage.clone());
    static_server.serve_file(&format!("fonts/{}", path)).await
}

/// Image handler
async fn image_handler(
    State(state): State<Arc<SitesAppState>>,
    Path(path): Path<String>,
) -> Result<Response, StatusCode> {
    let static_server = StaticFileServer::new(state.storage.clone());
    static_server.serve_file(&format!("images/{}", path)).await
}

/// Favicon handler
async fn favicon_handler(State(state): State<Arc<SitesAppState>>) -> Result<Response, StatusCode> {
    let static_server = StaticFileServer::new(state.storage.clone());
    static_server.serve_file("favicon.ico").await
}

/// 32x32 favicon handler
async fn favicon_32_handler(
    State(state): State<Arc<SitesAppState>>,
) -> Result<Response, StatusCode> {
    let static_server = StaticFileServer::new(state.storage.clone());
    static_server.serve_file("favicon-32x32.png").await
}

/// 16x16 favicon handler
async fn favicon_16_handler(
    State(state): State<Arc<SitesAppState>>,
) -> Result<Response, StatusCode> {
    let static_server = StaticFileServer::new(state.storage.clone());
    static_server.serve_file("favicon-16x16.png").await
}

/// Apple touch icon handler
async fn apple_touch_icon_handler(
    State(state): State<Arc<SitesAppState>>,
) -> Result<Response, StatusCode> {
    let static_server = StaticFileServer::new(state.storage.clone());
    static_server.serve_file("apple-touch-icon.png").await
}

/// Site manifest handler
async fn manifest_handler(
    State(state): State<Arc<SitesAppState>>,
    headers: HeaderMap,
) -> Result<String, AppError> {
    let host_resolver = get_host_resolver(&state);

    // Resolve host to project
    match host_resolver.resolve(&headers).await? {
        Some(result) => {
            // Get project
            let project = ProjectQueries::get_by_id(&state.biz_context.pool, &result.project_id)
                .await?
                .ok_or_else(|| AppError::NotFound("Project not found".to_string()))?;

            // Generate custom manifest
            Ok(format!(
                r##"{{
    "name": "{}",
    "short_name": "{}",
    "description": "{}",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#000000",
    "icons": [
        {{
            "src": "/apple-touch-icon.png",
            "sizes": "180x180",
            "type": "image/png"
        }},
        {{
            "src": "/favicon-32x32.png",
            "sizes": "32x32",
            "type": "image/png"
        }},
        {{
            "src": "/favicon-16x16.png",
            "sizes": "16x16",
            "type": "image/png"
        }}
    ]
}}"##,
                project.name,
                project.name,
                project
                    .description
                    .as_deref()
                    .unwrap_or("Documentation powered by CMS")
            ))
        }
        None => {
            // Default manifest
            Ok(r##"{
    "name": "CMS",
    "short_name": "CMS",
    "description": "Modern documentation platform",
    "start_url": "/",
    "display": "standalone",
    "background_color": "#ffffff",
    "theme_color": "#000000",
    "icons": [
        {
            "src": "/apple-touch-icon.png",
            "sizes": "180x180",
            "type": "image/png"
        },
        {
            "src": "/favicon-32x32.png",
            "sizes": "32x32",
            "type": "image/png"
        },
        {
            "src": "/favicon-16x16.png",
            "sizes": "16x16",
            "type": "image/png"
        }
    ]
}"##
            .to_string())
        }
    }
}
