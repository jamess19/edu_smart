package com.edusmart.course.model;

import com.edusmart.department.model.Department;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "course")
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer course_id;
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
    private String course_name;
    private String course_code;
    private String description;
    private Integer credits;
}
