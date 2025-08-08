package com.edusmart.course.controller;

import com.edusmart.course.service.CourseService;
import com.edusmart.course.dto.MyCourseDTO;
import com.edusmart.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/api/v1/courses")
public class CourseController {
    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/students/{student_id}")
    public ApiResponse<List<MyCourseDTO>> getAllMyCourses(@PathVariable int student_id) {
        List<MyCourseDTO> myCourses = courseService.getAllCourses(student_id);
        return ApiResponse.success(myCourses, null);
    }
}
