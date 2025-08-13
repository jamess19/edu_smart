package com.edusmart.user.dto;

import lombok.Builder;

import java.util.Date;

@Builder

public record StudentDTO(
        String fullname,
        String email,
        String user_type,
        String departmentName,
        String student_code,
        float gpa,
        String major,
        int completed_credits,
        int total_credits,
        String type
) {
}
