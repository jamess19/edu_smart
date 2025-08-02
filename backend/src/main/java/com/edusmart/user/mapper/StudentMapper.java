package com.edusmart.user.mapper;

import com.edusmart.user.dto.StudentDTO;
import com.edusmart.user.model.Student;
import org.springframework.stereotype.Component;

@Component
public class StudentMapper {
    public StudentDTO toStudentDTO(Student student) {
        return new StudentDTO(
                student.getStudent_code(),
                student.getGpa(),
                student.getMajor(),
                student.getCompleted_credits(),
                student.getTotal_credits(),
                student.getType(),
                student.getFullname(),
                student.getAddress(),
                student.getEmail(),
                student.getBirthday()
        );
    }
}
