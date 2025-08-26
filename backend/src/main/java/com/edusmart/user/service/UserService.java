package com.edusmart.user.service;

import com.edusmart.auth.service.JwtService;
import com.edusmart.common.exception.ErrorCode;
import com.edusmart.dto.ApiResponse;
import com.edusmart.user.dto.UserInfor;
import com.edusmart.user.mapper.StudentMapper;
import com.edusmart.user.mapper.TeacherMapper;
import com.edusmart.user.mapper.UserMapper;
import com.edusmart.user.model.Student;
import com.edusmart.user.model.Teacher;
import com.edusmart.user.model.User;
import com.edusmart.user.repository.StudentRepository;
import com.edusmart.user.repository.TeacherRepository;
import com.edusmart.user.repository.UserRepository;
import com.nimbusds.jose.JOSEException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.util.List;


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

//     login, lưu userID và role trong token,
//     giải mã token để lấy thông tin người dùng thông qua user/me hàm getCurrentUser
     public ApiResponse<?> getCurrentUser(String authHeader) throws ParseException, JOSEException {
         String token = authHeader.replace("Bearer ", "");
         JSONObject jwtObject = jwtService.decode(token);
         int userId = Integer.parseInt(jwtObject.get("userId").toString());

         User user = userRepository.findById(userId).orElse(null);
         if (user instanceof Student) {
             return ApiResponse.success(studentMapper.toStudentDTO((Student) user),
                     "get student success");
         } else if (user instanceof Teacher) {
             return ApiResponse.success(teacherMapper.toTeacherInfoDTO((Teacher) user),
                     "get teacher success");
         }
         return ApiResponse.error(ErrorCode.NOT_FOUND);
     }
        public List<UserInfor> getAllUsers() {
            return userRepository.findAll().stream().map(userMapper::toUserInfor).toList();
        }
        @Transactional(rollbackFor = Exception.class)
        public User createUser(User user) {
            if (user instanceof Student) {
                Student student = (Student) user;
                return studentRepository.save(student);
            }
            else if (user instanceof Teacher) {
                Teacher teacher = (Teacher) user;
                return teacherRepository.save(teacher);
            }
            return userRepository.save(user);
        }

}

