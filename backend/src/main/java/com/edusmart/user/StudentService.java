package com.edusmart.user;

import com.edusmart.user.dto.StudentDTO;
import com.edusmart.user.mapper.StudentMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentService {
    private final StudentRepository studentRepository;
    private final StudentMapper studentMapper;
    public StudentService(StudentRepository studentRepository, StudentMapper studentMapper) {
        this.studentRepository = studentRepository;
        this.studentMapper = studentMapper;
    }

    public Optional<StudentDTO> getStudentById(int student_id) {
        return studentRepository.findById(student_id)
                .map(studentMapper::toStudentDTO).or(() -> Optional.empty());
    }

}
