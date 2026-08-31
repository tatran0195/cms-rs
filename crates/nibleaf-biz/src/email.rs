//! Email Business Logic
//!
//! This module contains business logic for sending emails.

use crate::AppError;
use nibleaf_entity::email::{EmailRequest, EmailTemplate};
use std::sync::Arc;
use async_trait::async_trait;

/// Email sender trait — implementations can be SMTP, SES, SendGrid, etc.
#[async_trait]
pub trait Mailer: Send + Sync {
    async fn send_email(&self, to: &str, subject: &str, body: &str) -> Result<(), AppError>;
}

/// Email service
pub struct EmailService;

impl EmailService {
    /// Send an email
    pub async fn send_email(
        mailer: Arc<dyn Mailer>,
        request: EmailRequest,
    ) -> Result<(), AppError> {
        mailer.send_email(
            &request.to,
            &request.subject,
            &request.body,
        ).await
    }
    
    /// Send a templated email
    pub async fn send_templated_email(
        mailer: Arc<dyn Mailer>,
        template: EmailTemplate,
        to: &str,
        variables: serde_json::Value,
    ) -> Result<(), AppError> {
        let (subject, body) = Self::render_template(template, variables)?;
        
        mailer.send_email(
            to,
            &subject,
            &body,
        ).await
    }
    
    /// Render an email template
    fn render_template(
        template: EmailTemplate,
        variables: serde_json::Value,
    ) -> Result<(String, String), AppError> {
        let mut subject = template.subject.clone();
        let mut body = template.body.clone();
        
        if let serde_json::Value::Object(map) = variables {
            for (key, value) in map {
                let placeholder = format!("{{{}}}", key);
                let replacement = value.as_str().unwrap_or("");
                
                subject = subject.replace(&placeholder, replacement);
                body = body.replace(&placeholder, replacement);
            }
        }
        
        Ok((subject, body))
    }
}

/// Process email job (for worker queue)
pub async fn process_email_job(
    mailer: Arc<dyn Mailer>,
    payload: &serde_json::Value,
) -> Result<(), AppError> {
    let to = payload.get("to").and_then(|v| v.as_str())
        .ok_or_else(|| AppError::InvalidInput("Missing to address".to_string()))?;
    let subject = payload.get("subject").and_then(|v| v.as_str())
        .ok_or_else(|| AppError::InvalidInput("Missing subject".to_string()))?;
    let body = payload.get("body").and_then(|v| v.as_str())
        .ok_or_else(|| AppError::InvalidInput("Missing body".to_string()))?;
    
    mailer.send_email(to, subject, body).await
}
