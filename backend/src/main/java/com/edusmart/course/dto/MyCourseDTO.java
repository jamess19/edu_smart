package com.edusmart.course.dto;

import com.edusmart.user.dto.CourseTeacherDTO;

import java.time.Year;
import java.util.List;

public record MyCourseDTO(
        int course_id,
        String course_name,
        String course_code,
        int credits,
        int term,
        Year year,
        List<CourseTeacherDTO> teachers
) {
}
