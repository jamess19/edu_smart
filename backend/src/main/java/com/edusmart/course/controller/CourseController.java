package com.edusmart.course.controller;

import com.edusmart.course.dto.CourseDetailDTO;
import com.edusmart.course.service.CourseService;
import com.edusmart.course.dto.MyCourseDTO;
import com.edusmart.dto.ApiResponse;
import com.nimbusds.jose.JOSEException;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;


@RestController
@RequestMapping("/api/v1/courses")
public class CourseController {
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/my-courses")
    public ApiResponse<List<MyCourseDTO>> getAllMyCourses()
            throws ParseException, JOSEException {
        List<MyCourseDTO> myCourses = courseService.getAllMyCourses();

        return ApiResponse.success(myCourses, "");
    }

    @GetMapping("/my-courses/{open_course_id}")
    public ApiResponse<CourseDetailDTO> getCourseInfoByOpenCourseId(
            @PathVariable int open_course_id) {
        return courseService.getCourseDetailByOpenCourseId(open_course_id);
    }
}
