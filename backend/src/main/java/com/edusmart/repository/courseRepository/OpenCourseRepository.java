package com.edusmart.repository.courseRepository;

import com.edusmart.entity.Course.OpenCourse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OpenCourseRepository extends JpaRepository<OpenCourse, Integer> {
}
