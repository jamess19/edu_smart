package com.edusmart.user.dto;

import lombok.Builder;

@Builder
public record CourseTeacherDTO(
        String fullname,
        String email,
        String role
) {
}
