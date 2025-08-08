package com.edusmart.user.controller;

import com.edusmart.common.exception.ErrorCode;
import com.edusmart.dto.ApiResponse;
import com.edusmart.user.service.StudentService;
import com.edusmart.user.dto.StudentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/students")
public class StudentController {
    @Autowired
    private final StudentService studentService;
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/{student_id}")
    public ApiResponse<StudentDTO> findStudentById(@PathVariable("student_id") int studentId) {
        Optional<StudentDTO> student = studentService.getStudentById(studentId);
        if (student.isPresent())
            return ApiResponse.success(student.get(), null);
        return ApiResponse.error(ErrorCode.NOT_FOUND);
    }

}
