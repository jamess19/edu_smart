package com.edusmart.notification.dto;

import java.sql.Timestamp;

public record NotificationDTO (
        int notification_id,
        String title,
        String content,
        Timestamp created_at,
        String teacher_posted
) {
}
