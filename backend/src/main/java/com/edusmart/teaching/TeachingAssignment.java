package com.edusmart.teaching;

import com.edusmart.course.OpenCourse;
import com.edusmart.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.security.Timestamp;

@Entity
@Table(name = "TeachingAssignment")
@Getter
@Setter
public class TeachingAssignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int assignment_id;
    private Timestamp created_at;
    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private User teacher;
    @OneToOne
    @JoinColumn(name = "opencourse_id")
    private OpenCourse course;
}
