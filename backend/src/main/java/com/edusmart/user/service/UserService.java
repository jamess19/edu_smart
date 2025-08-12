package com.edusmart.user.service;

import com.edusmart.auth.service.JwtService;
import com.edusmart.user.mapper.StudentMapper;
import com.edusmart.user.mapper.TeacherMapper;
import com.edusmart.user.mapper.UserMapper;
import com.edusmart.user.repository.StudentRepository;
import com.edusmart.user.repository.TeacherRepository;
import com.edusmart.user.repository.UserRepository;
import com.nimbusds.jose.JOSEException;
import com.nimbusds.jose.JWSObject;
import com.nimbusds.jose.JWSVerifier;
import com.nimbusds.jose.crypto.MACVerifier;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.util.Optional;


@Service
public class UserService {
    private final UserRepository userRepository;
    private final StudentRepository studentRepository;
    private final TeacherRepository teacherRepository;

    private final JwtService jwtService;
    private final StudentMapper studentMapper;
    private final TeacherMapper teacherMapper;
    private final UserMapper userMapper;
    @Value("${jwt.secret}")
    private String SIGNER_KEY;
    public UserService(UserRepository userRepository,
                       StudentRepository studentRepository,
                       TeacherRepository teacherRepository, JwtService jwtService, StudentMapper studentMapper, TeacherMapper teacherMapper, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
        this.teacherRepository = teacherRepository;
        this.jwtService = jwtService;
        this.studentMapper = studentMapper;
        this.teacherMapper = teacherMapper;
        this.userMapper = userMapper;
    }

    // login, lưu userID và role trong token,
    // giải mã token để lấy thông tin người dùng thông qua user/me hàm getCurrentUser
    // public Optional<?> getCurrentUser(String token) throws ParseException, JOSEException
    // {
    //     JSONObject jwtObject = jwtService.decode(token);
    //     String role = jwtObject.get("scope").toString();
    //     int userId = Integer.parseInt(jwtObject.get("userId").toString());

    //     return switch (role) {
    //         case "student" -> studentRepository.findById(userId).map(studentMapper::toStudentDTO);
    //         case "teacher" -> teacherRepository.findById(userId);
    //         default -> userRepository.findById(userId);
    //     };
    // }
}

