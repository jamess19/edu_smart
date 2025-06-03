package com.edusmart.entity.Course;

import java.time.Year;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
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
