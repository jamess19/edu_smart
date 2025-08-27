package com.edusmart.user.service;

import ch.qos.logback.classic.Logger;
import com.edusmart.auth.service.JwtService;
import com.edusmart.common.exception.ErrorCode;
import com.edusmart.department.model.Department;
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
import jakarta.persistence.EntityManager;
import org.json.JSONObject;
import org.slf4j.LoggerFactory;
import org.slf4j.event.LoggingEvent;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.actuate.autoconfigure.wavefront.WavefrontProperties;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.util.List;


@Service
public class UserService {
    private final UserRepository userRepository;
    private final StudentRepository studentRepository;
    private final TeacherRepository teacherRepository;
    private static final Logger logger = (Logger) LoggerFactory.getLogger(UserService.class);
    private final JwtService jwtService;
    private final StudentMapper studentMapper;
    private final TeacherMapper teacherMapper;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    @Value("${jwt.secret}")
    private String SIGNER_KEY;
    @Autowired
    private EntityManager entityManager;
    public UserService(UserRepository userRepository,
                       StudentRepository studentRepository,
                       TeacherRepository teacherRepository, JwtService jwtService, StudentMapper studentMapper, TeacherMapper teacherMapper, UserMapper userMapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.studentRepository = studentRepository;
        this.teacherRepository = teacherRepository;
        this.jwtService = jwtService;
        this.studentMapper = studentMapper;
        this.teacherMapper = teacherMapper;
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
    }

//     login, lưu userID và role trong token,
//     giải mã token để lấy thông tin người dùng thông qua user/me hàm getCurrentUser
     public ApiResponse<?> getCurrentUser(String authHeader) throws ParseException, JOSEException {
         String token = authHeader.replace("Bearer ", "");
         JSONObject jwtObject = jwtService.decode(token);
         String username = jwtObject.getString("sub");

         User user = userRepository.findByUsername(username).orElse(null);
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
        public UserInfor createUser(User user) {
            logger.info(user.getDepartment().getDepartment_id().toString());
            String encodedPassword = passwordEncoder.encode(user.getPassword());
            user.setPassword(encodedPassword);
            if (user.getDepartment() != null) {
                Department dept = entityManager.getReference(Department.class, user.getDepartment().getDepartment_id());
                user.setDepartment(dept);
            }
            if (user instanceof Student) {
                Student student = (Student) user;
                return userMapper.toUserInfor(studentRepository.save(student));

            }
            else if (user instanceof Teacher) {
                Teacher teacher = (Teacher) user;
                return userMapper.toUserInfor(teacherRepository.save(teacher));
            }
            return userMapper.toUserInfor(userRepository.save(user));
        }

}

