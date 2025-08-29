package com.edusmart.course.dto;

import com.edusmart.assignment.dto.AssignmentInfoDTO;
import com.edusmart.notification.dto.NotificationDTO;
import com.edusmart.resource.dto.ResourceInfoDTO;
import com.edusmart.user.dto.CourseTeacherDTO;

import java.time.Year;
import java.util.List;

public record CourseDetailDTO(
        String course_name,
        String course_code,
        int credits,
        int term,
        Year year,
        List<CourseTeacherDTO> teachers,
        List<StudentInCourseDTO> students,
        List<ResourceInfoDTO> resources,
        List<AssignmentInfoDTO> assignments,
        List<NotificationDTO> notifications
) {
}
