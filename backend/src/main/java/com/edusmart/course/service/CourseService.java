package com.edusmart.course.service;

import com.edusmart.course.dto.MyCourseDTO;
import com.edusmart.course.mapper.MyCourseMapper;
import com.edusmart.course.repository.CourseRepository;
import com.edusmart.enrollment.repository.EnrollmentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CourseService {
    private final CourseRepository courseRepository;
    private final EnrollmentRepository enrollmentRepository;
    private final MyCourseMapper myCourseMapper;

    public CourseService(CourseRepository courseRepository,
                         EnrollmentRepository enrollmentRepository,
                         MyCourseMapper myCourseMapper) {
        this.courseRepository = courseRepository;
        this.enrollmentRepository = enrollmentRepository;
        this.myCourseMapper = myCourseMapper;
    }

    @Transactional(readOnly = true)
    public List<MyCourseDTO> getAllCourses(int student_id) {
        return enrollmentRepository.findAllByStudent_Id(student_id)
                .stream()
                .map(myCourseMapper::toMyCourseDTO)
                .toList();
    }
}
