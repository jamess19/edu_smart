package com.edusmart.user.dto;

import java.util.Date;

public record StudentDTO(
        String student_code,
        float gpa,
        String major,
        int completed_credits,
        int total_credits,
        String type,
        String fullname,
        String address,
        String email,
        Date birthday
) {
}
