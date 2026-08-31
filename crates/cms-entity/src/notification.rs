//! Notification entity types

use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

use crate::common::{Id, Timestamp};

/// Notification type
#[derive(Debug, Clone, Serialize, Deserialize, sqlx::Type, utoipa::ToSchema)]
#[sqlx(type_name = "NotificationType", rename_all = "lowercase")]
pub enum NotificationType {
    Comment,
    Invitation,
    Mention,
    System,
    ExportComplete,
    DeploymentComplete,
}

/// Notification status
#[derive(Debug, Clone, Serialize, Deserialize, sqlx::Type, utoipa::ToSchema)]
#[sqlx(type_name = "NotificationStatus", rename_all = "lowercase")]
pub enum NotificationStatus {
    Unread,
    Read,
    Archived,
    // Uppercase aliases for backward compatibility
    UNREAD,
    READ,
    ARCHIVED,
}

/// Notification entity
#[derive(Debug, Clone, Serialize, Deserialize, utoipa::ToSchema)]
pub struct Notification {
    pub id: Id,
    pub user_id: Id,
    pub notification_type: NotificationType,
    pub title: String,
    pub message: String,
    pub data: serde_json::Value,
    pub status: NotificationStatus,
    pub read_at: Option<DateTime<Utc>>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

/// Notification response
#[derive(Debug, Clone, Serialize, Deserialize, utoipa::ToSchema)]
pub struct NotificationResponse {
    pub id: Id,
    pub user_id: Id,
    pub notification_type: NotificationType,
    pub title: String,
    pub message: String,
    pub data: serde_json::Value,
    pub status: NotificationStatus,
    pub read_at: Option<DateTime<Utc>>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl From<Notification> for NotificationResponse {
    fn from(notification: Notification) -> Self {
        Self {
            id: notification.id,
            user_id: notification.user_id,
            notification_type: notification.notification_type,
            title: notification.title,
            message: notification.message,
            data: notification.data,
            status: notification.status,
            read_at: notification.read_at,
            created_at: notification.created_at,
            updated_at: notification.updated_at,
        }
    }
}

/// Create notification request (internal use, not from API)
#[derive(Debug, Clone, Deserialize, Serialize, utoipa::ToSchema)]
pub struct CreateNotificationRequest {
    pub user_id: Id,
    pub notification_type: NotificationType,
    pub title: String,
    pub message: String,
    #[serde(default)]
    pub data: serde_json::Value,
}

/// Mark notification as read request
#[derive(Debug, Clone, Deserialize, Serialize, utoipa::ToSchema)]
pub struct MarkNotificationReadRequest {
    #[serde(default)]
    pub notification_ids: Vec<Id>,
}

/// Mark all notifications as read request
#[derive(Debug, Clone, Deserialize, Serialize, utoipa::ToSchema)]
pub struct MarkAllNotificationsReadRequest {
    #[serde(default)]
    pub notification_type: Option<NotificationType>,
}

/// Archive notification request
#[derive(Debug, Clone, Deserialize, Serialize, utoipa::ToSchema)]
pub struct ArchiveNotificationRequest {
    pub notification_id: Id,
}

/// List notifications query
#[derive(Debug, Clone, Deserialize, Serialize, utoipa::ToSchema)]
pub struct ListNotificationsQuery {
    #[serde(default)]
    pub status: Option<NotificationStatus>,
    #[serde(default)]
    pub notification_type: Option<NotificationType>,
    #[serde(default)]
    pub limit: Option<i64>,
    #[serde(default)]
    pub offset: Option<i64>,
}

/// Notification count response
#[derive(Debug, Clone, Serialize, Deserialize, utoipa::ToSchema)]
pub struct NotificationCountResponse {
    pub total: i64,
    pub unread: i64,
    pub by_type: std::collections::HashMap<String, i64>,
}
