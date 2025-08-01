package com.edusmart.user.mapper;

import com.edusmart.user.Teacher;
import com.edusmart.user.dto.TeacherInfoDTO;
import org.springframework.stereotype.Component;

@Component
public class TeacherMapper {
    public TeacherInfoDTO toTeacherInfoDTO(Teacher teacher) {
        return new TeacherInfoDTO(
                teacher.getTeacher_code(),
                teacher.getDegree(),
                teacher.getResearch_area(),
                teacher.getYears_of_experience(),
                teacher.getFullname(),
                teacher.getAddress(),
                teacher.getBirthday(),
                teacher.getEmail(),
                teacher.getDepartment() != null ? teacher.getDepartment().getDepartment_name() : null);
    }
}
