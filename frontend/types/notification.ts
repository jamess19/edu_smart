import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export interface NotificationInCourse {
    notification_id: Number,
    title: String,
    content: String,
    created_at: Timestamp,
    teacher_posted: String
}