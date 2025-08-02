package com.edusmart.teaching.model;

import com.edusmart.course.model.OpenCourse;
import com.edusmart.user.model.Teacher;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;

@Entity
@Table(name = "teaching_assignment")
@Getter
@Setter
public class TeachingAssignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int assignment_id;
    private Timestamp created_at;
    private String role;
    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;
    @ManyToOne
    @JoinColumn(name = "open_course_id")
    @JsonBackReference
    private OpenCourse open_course;
}
