package com.edusmart.course;

import com.edusmart.course.dto.MyCourseDTO;
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

    @GetMapping("/{student_id}/my-learning")
    public ResponseEntity<List<MyCourseDTO>> getAllMyCourses(@PathVariable int student_id) {
        List<MyCourseDTO> myCourses = courseService.getAllCourses(student_id);
        return ResponseEntity.ok(myCourses);
    }
}
