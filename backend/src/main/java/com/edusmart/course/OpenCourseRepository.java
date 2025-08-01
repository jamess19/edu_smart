package com.edusmart.course;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OpenCourseRepository extends JpaRepository<OpenCourse, Integer> {
}
