package com.edusmart.course;

import java.time.LocalDateTime;
import java.time.Year;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Setter
@Getter
@Entity
@Table(name = "OPENCOURSES")
public class OpenCourse {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public Integer opencourse_id;
    @OneToOne
    @JoinColumn(name ="course_id")
    private Course course;
    public Integer max_student;
    public Integer term;
    public Year year;
    public LocalDateTime registation_start;
    public LocalDateTime registation_end;
}
