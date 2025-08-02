package com.edusmart.enrollment.model;

import com.edusmart.course.model.OpenCourse;
import com.edusmart.user.model.Student;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@Table(name = "enrollment")
@Getter
@Setter
public class Enrollment {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer enrollment_id;
    private Timestamp enrolled_at;
    private String status;
    private float theoretical_point;
    private float practical_point;
    private float midterm_point;
    private float endterm_point;
    private float final_point;
    @ManyToOne
    @JoinColumn(name = "open_course_id")
    private OpenCourse opencourse;
    @ManyToOne
    @JoinColumn(name = "student_id")
    @JsonIgnore
    private Student student;

}
