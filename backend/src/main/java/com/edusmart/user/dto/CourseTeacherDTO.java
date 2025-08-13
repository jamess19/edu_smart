package com.edusmart.user.dto;

import lombok.Builder;

@Builder
public record CourseTeacherDTO(
        String teacher_code,
        String fullname,
        String email,
        String role
) {
}
