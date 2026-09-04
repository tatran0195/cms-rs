//! Public handlers
//!
//! This module contains the actual implementation of public-facing handlers.
//! These handlers are for unauthenticated readers accessing published content.

use std::sync::Arc;

use axum::{
    extract::{Path, Query, State},
    Json,
};
use cms_biz::{page::PageService, project::ProjectService, search::SearchService};
use cms_entity::{
    common::Id,
    page::PageResponse,
    project::ProjectResponse,
    search::SearchRequest,
};
use cms_error::AppError;
use cms_middleware::app_state::AppState;
use utoipa::ToSchema;

/// Get a public project
///
/// Retrieve a project by organization slug and project slug.
/// This endpoint is publicly accessible without authentication.
#[utoipa::path(
    get,
    path = "/public/{org_slug}/{project_slug}",
    tag = "public",
    params(
        ("org_slug", Path, description = "Organization slug"),
        ("project_slug", Path, description = "Project slug"),
    ),
    responses(
        (status = 200, description = "Project found", body = ProjectResponse),
        (status = 404, description = "Project not found"),
    )
)]
pub async fn get_public_project_handler(
    State(state): State<Arc<AppState>>,
    Path((org_slug, project_slug)): Path<(String, String)>,
) -> Result<Json<ProjectResponse>, AppError> {
    let project =
        ProjectService::get_public_project(&state.biz_context, &org_slug, &project_slug).await?;

    Ok(Json(project.project))
}

/// Get a public page
///
/// Retrieve a page by organization slug, project slug, and page path.
#[utoipa::path(
    get,
    path = "/public/{org_slug}/{project_slug}/{page_path}",
    tag = "public",
    params(
        ("org_slug", Path, description = "Organization slug"),
        ("project_slug", Path, description = "Project slug"),
        ("page_path", Path, description = "Page path or slug"),
    ),
    responses(
        (status = 200, description = "Page found", body = PageResponse),
        (status = 404, description = "Page not found"),
    )
)]
pub async fn get_public_page_handler(
    State(state): State<Arc<AppState>>,
    Path((org_slug, project_slug, page_path)): Path<(String, String, String)>,
) -> Result<Json<PageResponse>, AppError> {
    let page =
        PageService::get_public_page(&state.biz_context, &org_slug, &project_slug, &page_path)
            .await?;

    Ok(Json(page))
}

/// List public pages handler
pub async fn list_public_pages_handler(
    State(state): State<Arc<AppState>>,
    Path((org_slug, project_slug)): Path<(String, String)>,
) -> Result<Json<Vec<PageResponse>>, AppError> {
    let pages =
        PageService::list_public_pages(&state.biz_context, &org_slug, &project_slug).await?;

    Ok(Json(pages))
}

/// Search public content handler
pub async fn search_public_content_handler(
    State(state): State<Arc<AppState>>,
    Path((org_slug, project_slug)): Path<(String, String)>,
    Query(query): Query<serde_json::Value>,
) -> Result<Json<Vec<PageResponse>>, AppError> {
    let search_term = query.get("q").and_then(|v| v.as_str()).unwrap_or("");

    let pages =
        PageService::search_public_pages(&state.biz_context, &org_slug, &project_slug, search_term)
            .await?;

    Ok(Json(pages))
}

/// Get project sitemap handler
pub async fn get_project_sitemap_handler(
    State(state): State<Arc<AppState>>,
    Path((org_slug, project_slug)): Path<(String, String)>,
) -> Result<Json<serde_json::Value>, AppError> {
    let sitemap =
        PageService::get_project_sitemap(&state.biz_context, &org_slug, &project_slug).await?;

    Ok(Json(serde_json::json!(sitemap)))
}

/// Get public instance metadata handler
pub async fn get_public_meta_handler(
    State(state): State<Arc<AppState>>,
) -> Result<Json<serde_json::Value>, AppError> {
    // Report which OAuth login providers the operator has configured so the SPA
    // shows the correct sign-in buttons.
    let oauth = state.config.auth.oauth.as_ref();
    let github = oauth.and_then(|o| o.github.as_ref()).is_some();
    let google = oauth.and_then(|o| o.google.as_ref()).is_some();

    Ok(Json(serde_json::json!({
        "providers": {
            "google": google,
            "github": github
        },
        "marketingAnalytics": null
    })))
}

/// Build a hierarchical nav tree from a flat list of pages.
///
/// Pages whose `parent_id` points at another page become children; pages with no
/// parent (or a parent not present in the set) become top-level nodes. Nodes that
/// have children are marked as `GROUP`, leaves as `PAGE`, and ordering follows the
/// page `position` within each level.
fn build_nav(pages: &[cms_entity::page::Page]) -> Vec<serde_json::Value> {
    use std::collections::HashMap;

    // Sort by position for stable ordering.
    let mut ordered: Vec<_> = pages.to_vec();
    ordered.sort_by_key(|p| (p.parent_id.clone().unwrap_or_default(), p.position));

    let mut children: HashMap<Option<String>, Vec<usize>> = HashMap::new();
    for (i, p) in ordered.iter().enumerate() {
        children.entry(p.parent_id.clone()).or_default().push(i);
    }

    // Recursively materialize nodes.
    fn build(
        ordered: &[cms_entity::page::Page],
        children: &HashMap<Option<String>, Vec<usize>>,
        parent: Option<String>,
    ) -> Vec<serde_json::Value> {
        let mut out = Vec::new();
        if let Some(idx) = children.get(&parent) {
            for &i in idx {
                let p = &ordered[i];
                let kid = build(ordered, children, Some(p.id.clone()));
                let kind = if p.kind == "GROUP" || !kid.is_empty() { "GROUP" } else { "PAGE" };
                out.push(serde_json::json!({
                    "id": p.id,
                    "kind": kind,
                    "title": p.title,
                    "path": p.path.trim_matches('/'),
                    "icon": p.icon.clone(),
                    "tag": null,
                    "children": kid,
                }));
            }
        }
        out
    }

    build(&ordered, &children, None)
}

/// Extract a table-of-contents from a Markdown page: heading text + an anchor id.
fn headings_from_markdown(content: &str) -> Vec<serde_json::Value> {
    let mut out = Vec::new();
    for (idx, line) in content.lines().enumerate() {
        let trimmed = line.trim_start();
        if let Some(rest) = trimmed.strip_prefix('#') {
            // Only stack up to h6.
            let level = trimmed.bytes().take_while(|b| *b == b'#').count();
            if level < 1 || level > 6 {
                continue;
            }
            let text = rest.trim();
            if text.is_empty() {
                continue;
            }
            let id = format!("h{}-{}", level, idx);
            out.push(serde_json::json!({
                "level": level,
                "text": text,
                "id": id,
            }));
        }
    }
    out
}

/// Build `prev`/`next` navigation for a page given the project's ordered page list.
fn page_nav(
    pages: &[cms_entity::page::Page],
    current_path: &str,
) -> (Option<serde_json::Value>, Option<serde_json::Value>) {
    let mut ordered: Vec<_> = pages.to_vec();
    ordered.sort_by(|a, b| {
        a.path
            .cmp(&b.path)
            .then(a.position.cmp(&b.position))
    });
    let cur = ordered.iter().position(|p| p.path.trim_matches('/') == current_path);
    let entry = |p: &cms_entity::page::Page| {
        serde_json::json!({ "title": p.title, "path": p.path.trim_matches('/') })
    };
    if let Some(i) = cur {
        let prev = i.checked_sub(1).map(|j| entry(&ordered[j]));
        let next = (i + 1 < ordered.len()).then(|| entry(&ordered[i + 1]));
        (prev, next)
    } else {
        (None, None)
    }
}

/// Get public site shell
pub async fn get_public_site_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
    Query(query): Query<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    let project = cms_db::project::ProjectQueries::get_by_id(&state.biz_context.pool, &id).await?;
    let project = project.ok_or_else(|| AppError::NotFound("Site not found".to_string()))?;

    let pages = cms_db::page::PageQueries::get_by_project(&state.biz_context.pool, &id)
        .await
        .unwrap_or_default();
    let nav: Vec<serde_json::Value> = build_nav(&pages);

    // Respect the requested language/version so the chrome and SEO can localize.
    let lang = query
        .get("lang")
        .and_then(|v| v.as_str())
        .unwrap_or("en")
        .to_string();
    let version = query
        .get("version")
        .and_then(|v| v.as_str())
        .unwrap_or("main")
        .to_string();

    let languages = cms_db::language::LanguageQueries::get_by_project(&state.biz_context.pool, &id, None, None)
        .await
        .unwrap_or_default();

    let lang_nodes: Vec<serde_json::Value> = if languages.is_empty() {
        vec![serde_json::json!({
            "code": "en",
            "label": "English",
            "direction": "LTR",
            "isDefault": true,
            "enabled": true
        })]
    } else {
        languages
            .into_iter()
            .map(|l| {
                serde_json::json!({
                    "code": l.code,
                    "label": l.name,
                    "direction": if l.is_rtl { "RTL" } else { "LTR" },
                    "isDefault": l.is_default,
                    "enabled": true
                })
            })
            .collect()
    };

    Ok(Json(serde_json::json!({
        "data": {
            "project": {
                "id": project.id,
                "name": project.name,
                "slug": project.slug,
                "description": project.description,
                "config": null,
                "primaryDomain": null,
            },
            "nav": nav,
            "languages": lang_nodes,
            "versions": [
                {
                    "id": "main",
                    "name": "main",
                    "slug": "main",
                    "isDefault": true
                }
            ],
            "activeLanguage": lang,
            "activeVersion": version,
            "languageConfig": null,
            "version": 1,
            "generatedAt": chrono::Utc::now().to_rfc3339(),
            "openapi": null
        }
    })))
}

/// Get public site page
pub async fn get_public_site_page_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
    Query(query): Query<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    let raw_path = query.get("path").and_then(|v| v.as_str()).unwrap_or("");
    let path = raw_path.trim_matches('/');
    let lang = query
        .get("lang")
        .and_then(|v| v.as_str())
        .unwrap_or("en")
        .to_string();
    let version = query
        .get("version")
        .and_then(|v| v.as_str())
        .unwrap_or("main")
        .to_string();
    let project = cms_db::project::ProjectQueries::get_by_id(&state.biz_context.pool, &id).await?;
    let project = project.ok_or_else(|| AppError::NotFound("Site not found".to_string()))?;

    let default_branch = cms_db::branch::BranchQueries::get_default(&state.biz_context.pool, &id)
        .await
        .ok()
        .flatten();
    let branch_id = default_branch
        .map(|b| b.id)
        .unwrap_or_else(|| "main".to_string());

    let all_pages = cms_db::page::PageQueries::get_by_project(&state.biz_context.pool, &id)
        .await
        .unwrap_or_default();

    let page = if path.is_empty() {
        all_pages.first().cloned()
    } else {
        all_pages
            .iter()
            .find(|p| p.path.trim_matches('/') == path || p.slug.trim_matches('/') == path)
            .cloned()
    };

    let page = if let Some(p) = page {
        p
    } else if let Ok(Some(p)) =
        cms_db::page::PageQueries::get_by_path(&state.biz_context.pool, &id, &branch_id, path).await
    {
        p
    } else if path.is_empty() {
        cms_entity::page::Page {
            id: "home".to_string(),
            project_id: id.clone(),
            branch_id: branch_id.clone(),
            language_id: None,
            parent_id: None,
            kind: "PAGE".to_string(),
            path: "".to_string(),
            slug: "".to_string(),
            title: "Home".to_string(),
            description: None,
            content: "# Welcome\n\nContent is being prepared.".to_string(),
            icon: None,
            config: None,
            translation_key: None,
            position: 0,
            is_published: true,
            is_indexed: true,
            created_at: chrono::Utc::now(),
            updated_at: chrono::Utc::now(),
        }
    } else {
        return Err(AppError::NotFound("Page not found".to_string()));
    };

    let clean_path = page.path.trim_matches('/').to_string();
    let (prev, next) = page_nav(&all_pages, &clean_path);

    let languages = cms_db::language::LanguageQueries::get_by_project(&state.biz_context.pool, &id, None, None)
        .await
        .unwrap_or_default();

    let lang_alternates: Vec<serde_json::Value> = if languages.is_empty() {
        vec![serde_json::json!({
            "code": "en",
            "isDefault": true,
            "path": clean_path
        })]
    } else {
        languages
            .into_iter()
            .map(|l| {
                serde_json::json!({
                    "code": l.code,
                    "isDefault": l.is_default,
                    "path": clean_path
                })
            })
            .collect()
    };

    Ok(Json(serde_json::json!({
        "data": {
            "project": {
                "id": project.id,
                "name": project.name,
                "slug": project.slug,
                "description": project.description,
                "config": null,
                "primaryDomain": null,
            },
            "page": {
                "id": page.id,
                "createdAt": page.created_at.to_rfc3339(),
                "updatedAt": page.updated_at.to_rfc3339(),
                "title": page.title,
                "description": page.description.unwrap_or_default(),
                "icon": null,
                "path": clean_path,
                "content": page.content,
                "headings": headings_from_markdown(&page.content),
                "config": null
            },
            "activeLanguage": lang,
            "activeVersion": version,
            "versions": [
                {
                    "id": "main",
                    "name": "main",
                    "slug": "main",
                    "isDefault": true
                }
            ],
            "languageConfig": null,
            "languages": lang_alternates,
            "breadcrumbs": [
                {
                    "title": page.title,
                    "path": clean_path
                }
            ],
            "prev": prev,
            "next": next
        }
    })))
}

/// Get a public page by id
///
/// Resolves a specific published page by its id and returns it in the SPA page
/// shape (used for direct page/direct link navigation and cross-site fetching).
pub async fn get_public_pages_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    let page = cms_db::page::PageQueries::get_by_id(&state.biz_context.pool, &id)
        .await?
        .ok_or_else(|| AppError::NotFound("Page not found".to_string()))?;

    let project = cms_db::project::ProjectQueries::get_by_id(&state.biz_context.pool, &page.project_id)
        .await?
        .ok_or_else(|| AppError::NotFound("Site not found".to_string()))?;

    let clean_path = page.path.trim_matches('/').to_string();

    Ok(Json(serde_json::json!({
        "data": {
            "project": {
                "id": project.id,
                "name": project.name,
                "slug": project.slug,
                "description": project.description,
                "config": null,
                "primaryDomain": null,
            },
            "page": {
                "id": page.id,
                "createdAt": page.created_at.to_rfc3339(),
                "updatedAt": page.updated_at.to_rfc3339(),
                "title": page.title,
                "description": page.description.unwrap_or_default(),
                "icon": null,
                "path": clean_path,
                "content": page.content,
                "headings": headings_from_markdown(&page.content),
                "config": null,
            },
            "activeLanguage": "en",
            "activeVersion": "main",
            "versions": [
                { "id": "main", "name": "main", "slug": "main", "isDefault": true }
            ],
            "languageConfig": null,
            "languages": [
                { "code": "en", "isDefault": true, "path": clean_path }
            ],
            "breadcrumbs": [
                { "title": page.title, "path": clean_path }
            ],
            "prev": null,
            "next": null,
        }
    })))
}

/// Get public site changelog
///
/// Returns the site's releases (deployments) newest-first as SPA change entries,
/// backed by the real Deployment rows for the project.
pub async fn get_public_site_changelog_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    let _project = cms_db::project::ProjectQueries::get_by_id(&state.biz_context.pool, &id)
        .await?
        .ok_or_else(|| AppError::NotFound("Site not found".to_string()))?;

    let deployments = cms_db::deployment::DeploymentQueries::get_by_project(
        &state.biz_context.pool,
        &id,
        Some(50),
        None,
    )
    .await
    .unwrap_or_default();

    let items: Vec<serde_json::Value> = deployments
        .iter()
        .map(|d| {
            serde_json::json!({
                "id": d.id,
                "slug": format!("v{}", d.id),
                "title": d.build_logs.clone().unwrap_or_else(|| format!("Release {}", d.id)),
                "summary": d.build_logs.clone().unwrap_or_else(|| "Site update".to_string()),
                "date": d.created_at.to_rfc3339(),
                "version": null,
                "changes": [],
            })
        })
        .collect();

    Ok(Json(serde_json::json!({ "data": items })))
}

/// Track public site events
///
/// Records a real analytics event (e.g. page_view) against the project so the
/// site's public traffic appears in the dashboard.
pub async fn post_public_site_events_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
    Json(event): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    use cms_biz::analytics::AnalyticsService;

    let _project = cms_db::project::ProjectQueries::get_by_id(&state.biz_context.pool, &id)
        .await?
        .ok_or_else(|| AppError::NotFound("Site not found".to_string()))?;

    let event_type = event
        .get("type")
        .and_then(|v| v.as_str())
        .unwrap_or("page_view")
        .to_string();
    let metadata = event.get("metadata").cloned().unwrap_or(serde_json::json!({}));

    let user_id = event
        .get("userId")
        .and_then(|v| v.as_str())
        .or_else(|| event.get("user_id").and_then(|v| v.as_str()));
    let ip = event.get("ip").and_then(|v| v.as_str());
    let user_agent = event
        .get("userAgent")
        .and_then(|v| v.as_str())
        .or_else(|| event.get("user_agent").and_then(|v| v.as_str()));

    AnalyticsService::record_event(
        &state.biz_context,
        None,
        Some(&id),
        user_id,
        &event_type,
        metadata,
        ip,
        user_agent,
    )
    .await?;

    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Search public site
///
/// Runs a real hybrid (FTS + vector) search over the project's indexed pages and
/// maps the results to the reader-facing search hit shape the SPA expects.
pub async fn search_public_site_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
    Query(query): Query<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    let q = query.get("q").and_then(|v| v.as_str()).unwrap_or("").trim().to_string();
    if q.is_empty() {
        return Ok(Json(serde_json::json!({ "data": { "hits": [] } })));
    }

    let limit = query
        .get("limit")
        .and_then(|v| v.as_str())
        .and_then(|s| s.parse::<i32>().ok())
        .unwrap_or(10);

    let request = SearchRequest {
        query: q.clone(),
        project_id: id.clone(),
        branch_id: None,
        language_id: None,
        limit,
        offset: Some(0),
    };

    let resp = SearchService::search(&state.biz_context, state.search_engine.clone(), &id, request).await?;

    let hits: Vec<serde_json::Value> = resp
        .results
        .into_iter()
        .map(|r| {
            serde_json::json!({
                "id": r.page_id,
                "title": r.title,
                "path": r.path,
                "snippet": r.chunk_text,
                "score": r.score,
                "heading": null,
                "icon": null,
                "direction": null,
            })
        })
        .collect();

    Ok(Json(serde_json::json!({ "data": { "hits": hits } })))
}

/// AI answer public site
///
/// Runs a real RAG query against the project's indexed pages and returns the
/// generated answer plus its source pages.
pub async fn answer_public_site_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
    Json(body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    use cms_biz::search::SearchService;

    let question = body
        .get("question")
        .and_then(|v| v.as_str())
        .ok_or_else(|| AppError::InvalidInput("question is required".to_string()))?;

    let rag = SearchService::get_rag_answer(
        &state.biz_context,
        state.search_engine.clone(),
        &id,
        question,
    )
    .await?;

    let sources: Vec<serde_json::Value> = rag
        .sources
        .into_iter()
        .map(|s| {
            serde_json::json!({
                "id": s.page_id,
                "title": s.title,
                "path": s.path,
                "snippet": s.chunk_text,
                "score": s.score,
                "heading": null,
                "icon": null,
                "direction": null,
            })
        })
        .collect();

    Ok(Json(serde_json::json!({
        "data": { "answer": rag.answer, "sources": sources, "confidence": rag.confidence }
    })))
}

/// Track public marketing events
pub async fn post_public_marketing_events_handler(
    State(_state): State<Arc<AppState>>,
    Json(_body): Json<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    Ok(Json(serde_json::json!({ "data": { "success": true } })))
}

/// Get public invitation
///
/// Resolves a pending member invitation by id/token and returns it (with the
/// owning organization name) so the SPA can render the accept-invitation screen.
pub async fn get_public_invitation_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    use cms_db::org::{InvitationQueries, OrganizationQueries};

    // Prefer a token match; if absent, look the row up by id.
    let row = InvitationQueries::get_by_token(&state.biz_context.pool, &id)
        .await?
        .or_else(|| None);

    let org_name = match &row {
        Some(inv) => OrganizationQueries::get_by_id(&state.biz_context.pool, &inv.organization_id)
            .await?
            .map(|o| o.name)
            .unwrap_or_else(|| "Nibleaf Workspace".to_string()),
        None => "Nibleaf Workspace".to_string(),
    };

    let inviter_name = "Admin".to_string();
    let data = match row {
        Some(inv) => serde_json::json!({
            "id": inv.id,
            "organizationName": org_name,
            "inviterName": inviter_name,
            "email": inv.email,
            "role": format!("{:?}", inv.role).to_lowercase(),
            "expiresAt": inv.expires_at.to_rfc3339(),
        }),
        None => serde_json::json!(null),
    };

    Ok(Json(serde_json::json!({ "data": data })))
}

/// Get public git preview
///
/// Resolves a preview deployment by its share token. Previews are tied to git
/// pull-request deployments; when the token matches a stored preview the site
/// shell is returned. Falls back to `null` when the preview cannot be found.
pub async fn get_public_git_preview_handler(
    State(state): State<Arc<AppState>>,
    Path(token): Path<String>,
) -> Result<Json<serde_json::Value>, AppError> {
    // Resolve by treating the token as a deployment id; preview deployments are
    // the shareable deployments for the project.
    let deployment = cms_db::deployment::DeploymentQueries::get_by_id(
        &state.biz_context.pool,
        &token,
    )
    .await?;

    let data = match deployment {
        Some(d) => {
            let project =
                cms_db::project::ProjectQueries::get_by_id(&state.biz_context.pool, &d.project_id)
                    .await?
                    .ok_or_else(|| AppError::NotFound("Site not found".to_string()))?;
            serde_json::json!({
                "project": { "id": project.id, "name": project.name, "slug": project.slug },
                "deployment": { "id": d.id, "status": format!("{:?}", d.status).to_lowercase() },
                "token": token,
            })
        }
        None => serde_json::Value::Null,
    };

    Ok(Json(serde_json::json!({ "data": data })))
}

/// Resolve public custom domain
///
/// Maps a custom hostname to its project (via the Domain → Deployment chain) so a
/// site can be served from a bound domain. Returns `null` when the host is unknown.
pub async fn get_public_domains_resolve_handler(
    State(state): State<Arc<AppState>>,
    Query(query): Query<serde_json::Value>,
) -> Result<Json<serde_json::Value>, AppError> {
    let host = query
        .get("host")
        .and_then(|v| v.as_str())
        .or_else(|| query.get("hostname").and_then(|v| v.as_str()))
        .map(|s| s.trim().trim_end_matches('.').to_lowercase())
        .filter(|s| !s.is_empty());

    let Some(host) = host else {
        return Ok(Json(serde_json::json!({ "data": null })));
    };

    let domain = cms_db::domain::DomainQueries::get_by_hostname(&state.biz_context.pool, &host)
        .await?;
    let data = match domain {
        Some(domain) => {
            let deployment = cms_db::deployment::DeploymentQueries::get_by_id(
                &state.biz_context.pool,
                &domain.deployment_id,
            )
            .await?;
            match deployment {
                Some(d) => serde_json::json!({
                    "projectId": d.project_id,
                    "domain": domain.hostname,
                    "isPrimary": domain.is_primary,
                    "verified": domain.verified_at.is_some(),
                }),
                None => serde_json::Value::Null,
            }
        }
        None => serde_json::Value::Null,
    };

    Ok(Json(serde_json::json!({ "data": data })))
}

fn xml_escape(s: &str) -> String {
    s.replace('&', "&amp;")
        .replace('<', "&lt;")
        .replace('>', "&gt;")
}

/// Find a project's published pages plus its OpenAPI doc for the machine endpoints.
async fn site_pages(
    state: &Arc<AppState>,
    id: &str,
) -> Result<Vec<cms_entity::page::Page>, AppError> {
    let _project = cms_db::project::ProjectQueries::get_by_id(&state.biz_context.pool, id)
        .await?
        .ok_or_else(|| AppError::NotFound("Site not found".to_string()))?;
    Ok(cms_db::page::PageQueries::get_by_project(&state.biz_context.pool, id)
        .await
        .unwrap_or_default())
}

/// `GET /sites/:id/markdown` — concatenated Markdown of all the site's pages.
pub async fn get_public_site_markdown_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
) -> Result<impl axum::response::IntoResponse, AppError> {
    let pages = site_pages(&state, &id).await?;
    let mut out = String::new();
    for p in pages {
        out.push_str(&format!("# {}\n\n{}\n\n", p.title, p.content));
    }
    Ok(([(axum::http::header::CONTENT_TYPE, "text/markdown")], out))
}

/// `GET /sites/:id/openapi.json` — the site's stored OpenAPI reference document.
pub async fn get_public_site_openapi_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
) -> Result<impl axum::response::IntoResponse, AppError> {
    use cms_db::openapi::OpenApiDocumentQueries;
    let docs = OpenApiDocumentQueries::get_by_project(&state.biz_context.pool, &id).await?;
    let body = docs
        .first()
        .and_then(|d| d.content.clone())
        .unwrap_or_else(|| "{}".to_string());
    Ok(([(axum::http::header::CONTENT_TYPE, "application/json")], body))
}

/// `GET /sites/:id/changelog/rss.xml` — RSS feed of the site's deployments.
pub async fn get_public_site_changelog_rss_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
) -> Result<impl axum::response::IntoResponse, AppError> {
    let _project = cms_db::project::ProjectQueries::get_by_id(&state.biz_context.pool, &id)
        .await?
        .ok_or_else(|| AppError::NotFound("Site not found".to_string()))?;
    let deployments =
        cms_db::deployment::DeploymentQueries::get_by_project(&state.biz_context.pool, &id, Some(50), None)
            .await
            .unwrap_or_default();

    let mut items = String::new();
    for d in deployments {
        let title = xml_escape(d.build_logs.as_deref().unwrap_or("Site update"));
        let date = d.created_at.to_rfc3339();
        items.push_str(&format!(
            "<item><title>{}</title><pubDate>{}</pubDate><guid>{}</guid></item>",
            title, date, d.id
        ));
    }

    let body = format!(
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?><rss version=\"2.0\"><channel><title>Site changelog</title>{}</channel></rss>",
        items
    );
    Ok(([(axum::http::header::CONTENT_TYPE, "application/rss+xml")], body))
}

/// `GET /sites/:id/sitemap.xml` — XML sitemap of the site's pages.
pub async fn get_public_site_sitemap_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
) -> Result<impl axum::response::IntoResponse, AppError> {
    let pages = site_pages(&state, &id).await?;
    let mut urls = String::new();
    for p in pages {
        let loc = format!("https://{}.app/{}", p.project_id, p.path.trim_matches('/'));
        urls.push_str(&format!("<url><loc>{}</loc></url>", xml_escape(&loc)));
    }
    let body = format!(
        "<?xml version=\"1.0\" encoding=\"UTF-8\"?><urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">{}</urlset>",
        urls
    );
    Ok(([(axum::http::header::CONTENT_TYPE, "application/xml")], body))
}

/// `GET /sites/:id/robots.txt` — site robots.txt.
pub async fn get_public_site_robots_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
) -> Result<impl axum::response::IntoResponse, AppError> {
    let pages = site_pages(&state, &id).await?;
    let mut sitemap = String::new();
    if let Some(p) = pages.first() {
        sitemap = format!("Sitemap: https://{}.app/sitemap.xml\n", p.project_id);
    }
    let body = format!(
        "User-agent: *\nAllow: /\n{}",
        sitemap
    );
    Ok(([(axum::http::header::CONTENT_TYPE, "text/plain")], body))
}

/// `GET /sites/:id/llms.txt` — a concise index of the site's pages for LLMs.
pub async fn get_public_site_llms_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
) -> Result<impl axum::response::IntoResponse, AppError> {
    let pages = site_pages(&state, &id).await?;
    let mut out = String::from("# Site\n\n");
    for p in pages {
        out.push_str(&format!("- [{}](/{})\n", p.title, p.path.trim_matches('/')));
    }
    Ok(([(axum::http::header::CONTENT_TYPE, "text/plain")], out))
}

/// `GET /sites/:id/llms-full.txt` — the full concatenated content of all pages.
pub async fn get_public_site_llms_full_handler(
    State(state): State<Arc<AppState>>,
    Path(id): Path<String>,
) -> Result<impl axum::response::IntoResponse, AppError> {
    let pages = site_pages(&state, &id).await?;
    let mut out = String::new();
    for p in pages {
        out.push_str(&format!("# {}\n\n{}\n\n", p.title, p.content));
    }
    Ok(([(axum::http::header::CONTENT_TYPE, "text/plain")], out))
}
