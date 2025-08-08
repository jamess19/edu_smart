package com.edusmart.user.mapper;

import com.edusmart.teaching.model.TeachingAssignment;
import com.edusmart.user.model.Teacher;
import com.edusmart.user.dto.CourseTeacherDTO;
import com.edusmart.user.dto.TeacherInfoDTO;
import org.springframework.stereotype.Component;

@Component
public class TeacherMapper {
    public CourseTeacherDTO toCourseTeacherDTO(TeachingAssignment ta) {
        Teacher teacher = ta.getTeacher();
        return new CourseTeacherDTO(
                teacher.getFullname(),
                teacher.getEmail(),
                ta.getRole()
        );
    }

    public TeacherInfoDTO toTeacherInfoDTO(Teacher teacher) {
        return new TeacherInfoDTO(
                teacher.getTeacher_code(),
                teacher.getEmail(),
                teacher.getResearch_area(),
                teacher.getYears_of_experience()
        );
    }
}
