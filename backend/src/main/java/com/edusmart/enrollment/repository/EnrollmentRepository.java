package com.edusmart.enrollment.repository;

import com.edusmart.enrollment.model.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Integer> {
    List<Enrollment> findAllByStudent_Id(int studentId);
}
