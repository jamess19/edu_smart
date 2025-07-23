package com.edusmart.entity.Course;

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
    public Integer id;
    public Integer teacherId;
    public Integer courseId;
    public Integer quantity;
    public Integer maximum;
    public Integer term;
    public Year year;  
}
