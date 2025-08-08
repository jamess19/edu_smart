package com.edusmart.user.service;

import com.edusmart.user.dto.TeacherInfoDTO;
import com.edusmart.user.mapper.TeacherMapper;
import com.edusmart.user.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TeacherService {
    @Autowired
    private final TeacherRepository teacherRepository;
    private final TeacherMapper teacherMapper;
    public TeacherService(TeacherRepository teacherRepository,
                          TeacherMapper teacherMapper) {
        this.teacherRepository = teacherRepository;
        this.teacherMapper = teacherMapper;
    }

    public Optional<TeacherInfoDTO> getTeacherById(int teacher_id){
        return teacherRepository.findById(teacher_id)
                .map(teacherMapper::toTeacherInfoDTO)
                .or(() -> Optional.empty());
    }


}
