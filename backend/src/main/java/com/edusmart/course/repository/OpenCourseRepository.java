package com.edusmart.course.repository;

import com.edusmart.course.model.OpenCourse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OpenCourseRepository extends JpaRepository<OpenCourse, Integer> {
}
