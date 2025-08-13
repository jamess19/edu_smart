package com.edusmart.course.service;

import com.edusmart.auth.service.JwtService;
import com.edusmart.course.dto.MyCourseDTO;
import com.edusmart.course.mapper.MyCourseMapper;
import com.edusmart.course.repository.CourseRepository;
import com.edusmart.enrollment.repository.EnrollmentRepository;
import com.nimbusds.jose.JOSEException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.util.List;

@Service
public class CourseService {
    @Autowired
    private final JwtService jwtService;
    private final CourseRepository courseRepository;
    private final EnrollmentRepository enrollmentRepository;
    private final MyCourseMapper myCourseMapper;

    public CourseService(JwtService jwtService, CourseRepository courseRepository,
                         EnrollmentRepository enrollmentRepository,
                         MyCourseMapper myCourseMapper) {
        this.jwtService = jwtService;
        this.courseRepository = courseRepository;
        this.enrollmentRepository = enrollmentRepository;
        this.myCourseMapper = myCourseMapper;
    }

    @Transactional(readOnly = true)
    public List<MyCourseDTO> getAllCourses(String authHeader) throws ParseException, JOSEException {
        String token = authHeader.replace("Bearer ", "");
        JSONObject object = jwtService.decode(token);
        int student_id = object.optInt("userId");
        return enrollmentRepository.findAllByStudent_Id(student_id)
                .stream()
                .map(myCourseMapper::toMyCourseDTO)
                .toList();
    }
}
