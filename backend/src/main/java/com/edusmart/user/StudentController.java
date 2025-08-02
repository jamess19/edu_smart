package com.edusmart.user;

import com.edusmart.user.dto.StudentDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<StudentDTO> findStudentById(@PathVariable("student_id") int studentId) {
        Optional<StudentDTO> student = studentService.getStudentById(studentId);
        if (student.isPresent())
            return ResponseEntity.ok(student.get());
        return ResponseEntity.notFound().build();
    }

}
