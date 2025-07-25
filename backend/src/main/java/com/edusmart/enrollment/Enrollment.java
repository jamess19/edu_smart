package com.edusmart.enrollment;

import com.edusmart.course.OpenCourse;
import com.edusmart.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.security.Timestamp;

@Entity
@Table(name = "Enrollment")
@Getter
@Setter
public class Enrollment {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Integer enrollment_id;
    private Timestamp enrolled_at;
    private float theoretical_point;
    private float practical_point;
    private float midterm_point;
    private float endterm_point;
    private float final_point;
    @ManyToOne
    @JoinColumn(name = "opencourse_id")
    private OpenCourse opencourse;
    @ManyToOne
    @JoinColumn(name = "student_id")
    private User student;

}
