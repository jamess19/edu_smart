package com.edusmart.course.service;

import ch.qos.logback.classic.Logger;
import com.edusmart.auth.service.JwtService;
import com.edusmart.common.exception.ErrorCode;
import com.edusmart.course.dto.CourseDetailDTO;
import com.edusmart.course.dto.MyCourseDTO;
import com.edusmart.course.mapper.MyCourseMapper;
import com.edusmart.course.model.OpenCourse;
import com.edusmart.course.repository.CourseRepository;
import com.edusmart.course.repository.OpenCourseRepository;
import com.edusmart.dto.ApiResponse;
import com.edusmart.enrollment.repository.EnrollmentRepository;
import com.edusmart.resource.mapper.ResourceMapper;
import com.edusmart.resource.repository.ResourceRepository;
import com.edusmart.user.mapper.StudentMapper;
import com.edusmart.user.model.User;
import com.edusmart.user.repository.UserRepository;
import com.edusmart.user.service.UserService;
import com.nimbusds.jose.JOSEException;
import org.json.JSONObject;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    @Autowired
    private final JwtService jwtService;
    private final OpenCourseRepository openCourseRepository;
    private final EnrollmentRepository enrollmentRepository;
    private final UserRepository userRepository;
    private final MyCourseMapper myCourseMapper;
    private static final Logger logger = (Logger) LoggerFactory.getLogger(UserService.class);


    public CourseService(JwtService jwtService, CourseRepository courseRepository, OpenCourseRepository openCourseRepository,
                         EnrollmentRepository enrollmentRepository, ResourceRepository resourceRepository,
                         MyCourseMapper myCourseMapper, StudentMapper studentMapper, ResourceMapper resourceMapper, UserRepository userRepository) {
        this.jwtService = jwtService;
        this.openCourseRepository = openCourseRepository;
        this.enrollmentRepository = enrollmentRepository;
        this.myCourseMapper = myCourseMapper;
        this.userRepository = userRepository;
    }

    @Transactional(readOnly = true)
    public List<MyCourseDTO> getAllMyCourses() throws ParseException, JOSEException {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetail = (UserDetails) auth.getPrincipal();
        Optional<User> user = userRepository.findByUsername(userDetail.getUsername());
        if(user.isPresent()) {
            logger.info(user.get().getUser_type() + " " + user.get().getUsername());
        }
        return enrollmentRepository.findAllByStudent_Id(user.get().getId())
                .stream()
                .map(myCourseMapper::toMyCourseDTO)
                .toList();
    }

    public ApiResponse<CourseDetailDTO> getCourseDetailByOpenCourseId(int open_course_id) {
        Optional<OpenCourse> openCourses = openCourseRepository.findById(open_course_id);
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserDetails userDetail = (UserDetails) auth.getPrincipal();
        Optional<User> user = userRepository.findByUsername(userDetail.getUsername());
        if(openCourses.isPresent()) {
            CourseDetailDTO courseDetailDTO = myCourseMapper.toCoursDetailDTO(openCourses.get(), user.get().getId());
            return ApiResponse.success(courseDetailDTO, "get success");
        }
        return ApiResponse.error(ErrorCode.NOT_FOUND);
    }
}
