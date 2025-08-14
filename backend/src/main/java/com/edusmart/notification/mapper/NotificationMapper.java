package com.edusmart.notification.mapper;

import com.edusmart.notification.dto.NotificationDTO;
import com.edusmart.notification.model.Notification;
import org.springframework.stereotype.Component;

@Component
public class NotificationMapper {

    public NotificationDTO toNotificationDTO(Notification notification) {
        return new NotificationDTO(
                notification.getNotification_id(),
                notification.getTitle(),
                notification.getContent(),
                notification.getCreated_at(),
                notification.getTeacher().getFullname()
        );
    }
}
