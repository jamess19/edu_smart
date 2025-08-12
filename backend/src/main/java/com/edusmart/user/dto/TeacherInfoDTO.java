package com.edusmart.user.dto;
import lombok.Builder;

import java.util.Date;

@Builder

public record TeacherInfoDTO(
        int id,
        String username,
        String password,
        String fullname,
        String address,
        String email,
        Date birthday,
        String user_type,
        String departmentName,
        String teacher_code,
        String degree,
        String research_area,
        int years_of_experience
) {
}

