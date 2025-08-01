package com.edusmart.user.dto;

import java.util.Date;

public record TeacherInfoDTO(
        String teacher_code,
        String degree,
        String research_area,
        int years_of_experience,
        String fullname,
        String address,
        Date birthday,
        String email,
        String departmentName  // Chỉ lấy tên department thay vì toàn bộ object
) {
}

