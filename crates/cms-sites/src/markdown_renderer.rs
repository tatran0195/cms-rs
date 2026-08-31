//! Markdown renderer
//!
//! This module provides Markdown to HTML rendering for published pages.

use std::collections::HashSet;

use ammonia::Builder;
use cms_entity::{page::Page, project::Project};
use pulldown_cmark::{html, Options, Parser};

/// Markdown renderer configuration
#[derive(Debug, Clone)]
pub struct MarkdownRendererConfig {
    /// Enable syntax highlighting
    pub enable_syntax_highlighting: bool,
    /// Enable table of contents
    pub enable_toc: bool,
    /// Enable footnotes
    pub enable_footnotes: bool,
    /// Enable task lists
    pub enable_task_lists: bool,
    /// Enable strikethrough
    pub enable_strikethrough: bool,
    /// Enable emoji
    pub enable_emoji: bool,
    /// Enable heading IDs
    pub enable_heading_ids: bool,
    /// Base URL for relative links
    pub base_url: String,
}

impl Default for MarkdownRendererConfig {
    fn default() -> Self {
        Self {
            enable_syntax_highlighting: true,
            enable_toc: true,
            enable_footnotes: true,
            enable_task_lists: true,
            enable_strikethrough: true,
            enable_emoji: true,
            enable_heading_ids: true,
            base_url: String::new(),
        }
    }
}

/// Markdown renderer
pub struct MarkdownRenderer {
    config: MarkdownRendererConfig,
}

impl MarkdownRenderer {
    pub fn new(config: MarkdownRendererConfig) -> Self {
        Self { config }
    }

    /// Render page content to HTML
    pub fn render_page(&self, page: &Page, project: &Project) -> String {
        // Build parser options
        let mut options = Options::empty();

        if self.config.enable_footnotes {
            options.insert(Options::ENABLE_FOOTNOTES);
        }
        if self.config.enable_task_lists {
            options.insert(Options::ENABLE_TASKLISTS);
        }
        if self.config.enable_strikethrough {
            options.insert(Options::ENABLE_STRIKETHROUGH);
        }
        if self.config.enable_heading_ids {
            options.insert(Options::ENABLE_HEADING_ATTRIBUTES);
        }

        // Parse markdown
        let parser = Parser::new_ext(&page.content, options);

        // Render to HTML
        let mut html = String::new();
        html::push_html(&mut html, parser);

        // Sanitize HTML
        let clean_html = self.sanitize_html(&html);

        // Wrap in page template
        self.wrap_in_template(&clean_html, page, project)
    }

    /// Render markdown string to HTML
    pub fn render_markdown(&self, markdown: &str) -> String {
        // Build parser options
        let mut options = Options::empty();

        if self.config.enable_footnotes {
            options.insert(Options::ENABLE_FOOTNOTES);
        }
        if self.config.enable_task_lists {
            options.insert(Options::ENABLE_TASKLISTS);
        }
        if self.config.enable_strikethrough {
            options.insert(Options::ENABLE_STRIKETHROUGH);
        }
        if self.config.enable_heading_ids {
            options.insert(Options::ENABLE_HEADING_ATTRIBUTES);
        }

        // Parse markdown
        let parser = Parser::new_ext(markdown, options);

        // Render to HTML
        let mut html = String::new();
        html::push_html(&mut html, parser);

        // Sanitize HTML
        self.sanitize_html(&html)
    }

    /// Sanitize HTML to prevent XSS
    fn sanitize_html(&self, html: &str) -> String {
        let mut ammonia = Builder::default();
        ammonia
            .tags(self.get_allowed_tags())
            .tag_attributes(self.get_allowed_attributes())
            .url_schemes(self.get_allowed_schemes())
            .clean_content_tags(self.get_clean_content_tags());

        ammonia.clean(html).to_string()
    }

    /// Get allowed HTML tags
    fn get_allowed_tags(&self) -> HashSet<&'static str> {
        let mut tags = HashSet::new();

        // Text formatting
        tags.insert("p");
        tags.insert("br");
        tags.insert("b");
        tags.insert("i");
        tags.insert("u");
        tags.insert("em");
        tags.insert("strong");
        tags.insert("small");
        tags.insert("s");
        tags.insert("cite");
        tags.insert("q");

        // Code
        tags.insert("code");
        tags.insert("pre");
        tags.insert("tt");
        tags.insert("kbd");
        tags.insert("samp");
        tags.insert("var");

        // Headings
        tags.insert("h1");
        tags.insert("h2");
        tags.insert("h3");
        tags.insert("h4");
        tags.insert("h5");
        tags.insert("h6");

        // Lists
        tags.insert("ul");
        tags.insert("ol");
        tags.insert("li");
        tags.insert("dl");
        tags.insert("dt");
        tags.insert("dd");

        // Tables
        tags.insert("table");
        tags.insert("thead");
        tags.insert("tbody");
        tags.insert("tfoot");
        tags.insert("tr");
        tags.insert("th");
        tags.insert("td");

        // Block elements
        tags.insert("blockquote");
        tags.insert("figure");
        tags.insert("figcaption");
        tags.insert("div");
        tags.insert("span");
        tags.insert("section");
        tags.insert("header");
        tags.insert("footer");
        tags.insert("aside");
        tags.insert("article");

        // Details
        tags.insert("details");
        tags.insert("summary");

        // Text semantics
        tags.insert("mark");
        tags.insert("time");
        tags.insert("abbr");
        tags.insert("sub");
        tags.insert("sup");

        // Links and images
        tags.insert("a");
        tags.insert("img");

        // Horizontal rule
        tags.insert("hr");

        // Iframes (for embeds)
        if self.config.enable_syntax_highlighting {
            tags.insert("iframe");
        }

        tags
    }

    /// Get allowed HTML attributes per tag
    fn get_allowed_attributes(
        &self,
    ) -> std::collections::HashMap<&'static str, HashSet<&'static str>> {
        let mut attrs = std::collections::HashMap::new();

        // Link attributes
        let mut a_attrs = HashSet::new();
        a_attrs.insert("href");
        a_attrs.insert("title");
        a_attrs.insert("target");
        attrs.insert("a", a_attrs);

        // Image attributes
        let mut img_attrs = HashSet::new();
        img_attrs.insert("src");
        img_attrs.insert("alt");
        img_attrs.insert("title");
        img_attrs.insert("width");
        img_attrs.insert("height");
        attrs.insert("img", img_attrs);

        // Iframe attributes
        let mut iframe_attrs = HashSet::new();
        iframe_attrs.insert("src");
        iframe_attrs.insert("width");
        iframe_attrs.insert("height");
        iframe_attrs.insert("frameborder");
        iframe_attrs.insert("allowfullscreen");
        attrs.insert("iframe", iframe_attrs);

        // Table cell attributes
        let mut td_attrs = HashSet::new();
        td_attrs.insert("colspan");
        td_attrs.insert("rowspan");
        attrs.insert("td", td_attrs.clone());
        attrs.insert("th", td_attrs);

        // Global attributes
        let mut global_attrs = HashSet::new();
        global_attrs.insert("class");
        global_attrs.insert("id");
        global_attrs.insert("style");
        global_attrs.insert("data-*");

        // Apply global attributes to all tags
        for tag in self.get_allowed_tags() {
            attrs
                .entry(tag)
                .or_default()
                .extend(global_attrs.iter().copied());
        }

        attrs
    }

    /// Get allowed URL schemes
    fn get_allowed_schemes(&self) -> HashSet<&'static str> {
        let mut schemes = HashSet::new();
        schemes.insert("http");
        schemes.insert("https");
        schemes.insert("mailto");
        schemes.insert("tel");
        schemes.insert("ftp");
        schemes
    }

    /// Get tags that should have their content cleaned
    fn get_clean_content_tags(&self) -> HashSet<&'static str> {
        let mut tags = HashSet::new();
        tags.insert("script");
        tags.insert("style");
        if !self.config.enable_syntax_highlighting {
            tags.insert("iframe");
        }
        tags.insert("object");
        tags.insert("embed");
        tags
    }

    /// Wrap HTML in page template
    fn wrap_in_template(&self, content: &str, page: &Page, project: &Project) -> String {
        let description = page.description.as_deref().unwrap_or_default();
        let title = &page.title;
        let project_name = &project.name;

        format!(
            r#"<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="{}">
    <meta name="og:title" content="{} - {}">
    <meta name="og:description" content="{}">
    <meta name="og:type" content="article">
    <meta name="twitter:card" content="summary_large_image">
    <title>{} - {}</title>
    <link rel="stylesheet" href="/assets/styles.css">
    <style>
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }}
        pre {{
            background: #f4f4f4;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }}
        code {{
            background: #f4f4f4;
            padding: 2px 5px;
            border-radius: 3px;
        }}
        table {{
            border-collapse: collapse;
            width: 100%;
            margin: 1em 0;
        }}
        th, td {{
            border: 1px solid #ddd;
            padding: 8px;
        }}
        th {{
            background: #f4f4f4;
            text-align: left;
        }}
        img {{
            max-width: 100%;
            height: auto;
        }}
        a {{
            color: #0066cc;
            text-decoration: none;
        }}
        a:hover {{
            text-decoration: underline;
        }}
    </style>
</head>
<body>
    <header>
        <h1>{}</h1>
        <p>{}</p>
    </header>
    <main>
        {}
    </main>
    <footer>
        <hr>
        <p>Powered by <a href="https://cms.com">CMS</a></p>
    </footer>
</body>
</html>"#,
            description,
            title,
            project_name,
            description,
            title,
            project_name,
            title,
            description,
            content
        )
    }

    /// Render table of contents
    pub fn render_toc(&self, markdown: &str) -> Option<String> {
        if !self.config.enable_toc {
            return None;
        }

        // Extract headings from markdown
        let parser = Parser::new_ext(markdown, Options::empty());
        let mut toc = String::new();
        let mut in_list = false;

        for event in parser {
            match event {
                pulldown_cmark::Event::Start(pulldown_cmark::Tag::Heading { level, .. }) => {
                    let heading_level: usize = match level {
                        pulldown_cmark::HeadingLevel::H1 => 1,
                        pulldown_cmark::HeadingLevel::H2 => 2,
                        pulldown_cmark::HeadingLevel::H3 => 3,
                        pulldown_cmark::HeadingLevel::H4 => 4,
                        pulldown_cmark::HeadingLevel::H5 => 5,
                        pulldown_cmark::HeadingLevel::H6 => 6,
                    };
                    if !in_list {
                        toc.push_str("<ul>\n");
                        in_list = true;
                    }
                    let indent = (heading_level.saturating_sub(1)) * 4;
                    toc.push_str(&format!("{}<li>", " ".repeat(indent)));
                }
                pulldown_cmark::Event::Text(text) => {
                    // Generate anchor from text
                    let anchor = self.generate_anchor(&text);
                    toc.push_str(&format!("<a href=\"#{}\">{}</a>", anchor, text));
                }
                pulldown_cmark::Event::End(pulldown_cmark::TagEnd::Heading(_)) => {
                    toc.push_str("</li>\n");
                }
                pulldown_cmark::Event::End(pulldown_cmark::TagEnd::Paragraph) if in_list => {
                    toc.push_str("</ul>\n");
                    in_list = false;
                }
                _ => {}
            }
        }

        if in_list {
            toc.push_str("</ul>\n");
        }

        if toc.is_empty() {
            None
        } else {
            Some(toc)
        }
    }

    /// Generate anchor from text
    fn generate_anchor(&self, text: &str) -> String {
        text.to_lowercase()
            .replace(' ', "-")
            .replace(|c: char| !c.is_ascii_alphanumeric() && c != '-', "")
    }

    /// Highlight code blocks with syntax highlighting
    pub fn highlight_code(&self, code: &str, language: Option<&str>) -> String {
        if !self.config.enable_syntax_highlighting {
            return format!("<pre><code>{}</code></pre>", self.escape_html(code));
        }

        // In a real implementation, this would use a syntax highlighting library
        // For now, we'll just return the code in a pre block
        match language {
            Some("rust") => format!(
                "<pre class=\"language-rust\"><code>{}</code></pre>",
                self.escape_html(code)
            ),
            Some("javascript") | Some("js") => format!(
                "<pre class=\"language-javascript\"><code>{}</code></pre>",
                self.escape_html(code)
            ),
            Some("typescript") | Some("ts") => format!(
                "<pre class=\"language-typescript\"><code>{}</code></pre>",
                self.escape_html(code)
            ),
            Some("python") | Some("py") => format!(
                "<pre class=\"language-python\"><code>{}</code></pre>",
                self.escape_html(code)
            ),
            Some("html") => format!(
                "<pre class=\"language-html\"><code>{}</code></pre>",
                self.escape_html(code)
            ),
            Some("css") => format!(
                "<pre class=\"language-css\"><code>{}</code></pre>",
                self.escape_html(code)
            ),
            Some("bash") | Some("sh") => format!(
                "<pre class=\"language-bash\"><code>{}</code></pre>",
                self.escape_html(code)
            ),
            Some("json") => format!(
                "<pre class=\"language-json\"><code>{}</code></pre>",
                self.escape_html(code)
            ),
            Some("yaml") | Some("yml") => format!(
                "<pre class=\"language-yaml\"><code>{}</code></pre>",
                self.escape_html(code)
            ),
            Some("markdown") | Some("md") => format!(
                "<pre class=\"language-markdown\"><code>{}</code></pre>",
                self.escape_html(code)
            ),
            _ => format!("<pre><code>{}</code></pre>", self.escape_html(code)),
        }
    }

    /// Escape HTML special characters
    fn escape_html(&self, text: &str) -> String {
        text.replace('&', "&amp;")
            .replace('<', "&lt;")
            .replace('>', "&gt;")
            .replace('"', "&quot;")
            .replace("'", "&#x27;")
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_markdown_rendering() {
        let renderer = MarkdownRenderer::new(MarkdownRendererConfig::default());

        let markdown = "# Hello World\n\nThis is **bold** text.";
        let html = renderer.render_markdown(markdown);

        assert!(html.contains("<h1>Hello World</h1>"));
        assert!(html.contains("<strong>bold</strong>"));
    }

    #[test]
    fn test_anchor_generation() {
        let renderer = MarkdownRenderer::new(MarkdownRendererConfig::default());

        assert_eq!(renderer.generate_anchor("Hello World"), "hello-world");
        assert_eq!(renderer.generate_anchor("Test 123"), "test-123");
        assert_eq!(
            renderer.generate_anchor("Special!@#$%Chars"),
            "specialchars"
        );
    }
}
