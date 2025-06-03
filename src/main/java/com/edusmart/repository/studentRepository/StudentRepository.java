package com.edusmart.repository.studentRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edusmart.entity.Student.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {
    
}
