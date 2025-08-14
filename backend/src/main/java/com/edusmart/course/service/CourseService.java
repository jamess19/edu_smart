package com.edusmart.course.service;

import com.edusmart.auth.service.JwtService;
import com.edusmart.common.exception.ErrorCode;
import com.edusmart.course.dto.CourseInfoDTO;
import com.edusmart.course.dto.MyCourseDTO;
import com.edusmart.course.dto.StudentInCourseDTO;
import com.edusmart.course.mapper.MyCourseMapper;
import com.edusmart.course.model.Course;
import com.edusmart.course.model.OpenCourse;
import com.edusmart.course.repository.CourseRepository;
import com.edusmart.course.repository.OpenCourseRepository;
import com.edusmart.dto.ApiResponse;
import com.edusmart.enrollment.model.Enrollment;
import com.edusmart.enrollment.repository.EnrollmentRepository;
import com.edusmart.resource.dto.ResourceInfoDTO;
import com.edusmart.resource.mapper.ResourceMapper;
import com.edusmart.resource.model.Resource;
import com.edusmart.resource.repository.ResourceRepository;
import com.edusmart.user.dto.CourseTeacherDTO;
import com.edusmart.user.dto.TeacherInfoDTO;
import com.edusmart.user.mapper.StudentMapper;
import com.nimbusds.jose.JOSEException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
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
    private final MyCourseMapper myCourseMapper;


    public CourseService(JwtService jwtService, CourseRepository courseRepository, OpenCourseRepository openCourseRepository,
                         EnrollmentRepository enrollmentRepository, ResourceRepository resourceRepository,
                         MyCourseMapper myCourseMapper, StudentMapper studentMapper, ResourceMapper resourceMapper) {
        this.jwtService = jwtService;
        this.openCourseRepository = openCourseRepository;
        this.enrollmentRepository = enrollmentRepository;
        this.myCourseMapper = myCourseMapper;
    }

    @Transactional(readOnly = true)
    public List<MyCourseDTO> getAllMyCourses(String authHeader) throws ParseException, JOSEException {
        String token = authHeader.replace("Bearer ", "");
        JSONObject object = jwtService.decode(token);
        int student_id = object.optInt("userId");
        return enrollmentRepository.findAllByStudent_Id(student_id)
                .stream()
                .map(myCourseMapper::toMyCourseDTO)
                .toList();
    }

    public ApiResponse<CourseInfoDTO> getCourseDetailByOpenCourseId(int open_course_id) {
        Optional<OpenCourse> openCourses = openCourseRepository.findById(open_course_id);
        if(openCourses.isPresent()) {
            CourseInfoDTO courseInfoDTO = myCourseMapper.toCourseInfoDTO(openCourses.get());
            return ApiResponse.success(courseInfoDTO, "get success");
        }
        return ApiResponse.error(ErrorCode.NOT_FOUND);
    }
}
