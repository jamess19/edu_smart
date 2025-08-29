package com.edusmart.course.repository;

import com.edusmart.course.dto.StudentInCourseDTO;
import com.edusmart.course.model.OpenCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OpenCourseRepository extends JpaRepository<OpenCourse, Integer> {
}
