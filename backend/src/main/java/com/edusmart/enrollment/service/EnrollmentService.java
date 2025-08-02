package com.edusmart.enrollment.service;

import com.edusmart.enrollment.repository.EnrollmentRepository;
import org.springframework.stereotype.Service;

@Service
public class EnrollmentService {
    public EnrollmentRepository enrollmentRepository;
    public EnrollmentService(EnrollmentRepository enrollmentRepository) {
        this.enrollmentRepository = enrollmentRepository;
    }

}
