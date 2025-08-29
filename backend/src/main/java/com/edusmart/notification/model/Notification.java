package com.edusmart.notification.model;

import com.edusmart.course.model.OpenCourse;
import com.edusmart.user.model.Teacher;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@Table(name = "notification")
@Getter
@Setter
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int notification_id;
    private String title;
    private String content;
    private Timestamp created_at;
    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;
    @ManyToOne
    @JoinColumn(name = "open_course_id")
    private OpenCourse open_course;
}
