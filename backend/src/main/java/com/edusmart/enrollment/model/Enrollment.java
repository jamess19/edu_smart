package com.edusmart.enrollment.model;

import com.edusmart.course.model.OpenCourse;
import com.edusmart.user.model.Student;
import com.fasterxml.jackson.annotation.JsonIgnore;
import io.micrometer.common.lang.Nullable;
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
    private Float theoretical_point;
    private Float practical_point;
    private Float midterm_point;
    private Float endterm_point;
    private Float final_point;
    @ManyToOne
    @JoinColumn(name = "open_course_id")
    private OpenCourse open_course;
    @ManyToOne
    @JoinColumn(name = "student_id")
    @JsonIgnore
    private Student student;

}
