package com.edusmart.course.model;

import java.time.LocalDateTime;
import java.time.Year;
import java.util.List;

import com.edusmart.teaching.model.TeachingAssignment;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Setter
@Getter
@Entity
@Table(name = "open_course")
public class OpenCourse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer open_course_id;
    @ManyToOne
    @JoinColumn(name ="course_id")
    private Course course;
    public Integer max_student;
    public Integer term;
    public Year year;
    public LocalDateTime registation_start;
    public LocalDateTime registation_end;
    @OneToMany(mappedBy = "open_course")
    @JsonManagedReference
    List<TeachingAssignment> teachingAssignments;
}
