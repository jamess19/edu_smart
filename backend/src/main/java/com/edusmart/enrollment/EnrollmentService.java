package com.edusmart.enrollment;

import org.springframework.stereotype.Service;

@Service
public class EnrollmentService {
    public EnrollmentRepository enrollmentRepository;
    public EnrollmentService(EnrollmentRepository enrollmentRepository) {
        this.enrollmentRepository = enrollmentRepository;
    }

}
