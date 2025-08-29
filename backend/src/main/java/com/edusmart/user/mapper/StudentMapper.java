package com.edusmart.user.mapper;

import com.edusmart.course.dto.StudentInCourseDTO;
import com.edusmart.enrollment.model.Enrollment;
import com.edusmart.user.dto.StudentDTO;
import com.edusmart.user.model.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class StudentMapper {
    @Autowired
    private PasswordEncoder passwordEncoder;
    public StudentDTO toStudentDTO(Student student) {
        return new StudentDTO(
                student.getFullname(),
                student.getEmail(),
                student.getUser_type(),
                student.getDepartment().getDepartment_name(),
                student.getStudent_code(),
                student.getGpa(),
                student.getMajor(),
                student.getCompleted_credits(),
                student.getTotal_credits(),
                student.getType()
        );
    }
    public StudentInCourseDTO toStudentInCourseDTO(Enrollment enrollment) {
        Student student = enrollment.getStudent();
        return new StudentInCourseDTO(
                student.getFullname(),
                student.getStudent_code()
        );
    }
}
