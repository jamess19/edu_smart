package com.edusmart.course.mapper;

import com.edusmart.course.model.Course;
import com.edusmart.course.model.OpenCourse;
import com.edusmart.course.dto.MyCourseDTO;
import com.edusmart.enrollment.model.Enrollment;
import com.edusmart.user.dto.CourseTeacherDTO;
import com.edusmart.user.mapper.TeacherMapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MyCourseMapper {
    private final TeacherMapper teacherMapper;

    public MyCourseMapper(TeacherMapper teacherMapper) {
        this.teacherMapper = teacherMapper;
    }
    public MyCourseDTO toMyCourseDTO(Enrollment enrollment){
        OpenCourse openCourse = enrollment.getOpencourse();
        Course course = openCourse.getCourse();
        List<CourseTeacherDTO> teachers = openCourse.getTeachingAssignments()
                .stream()
                .map(teacherMapper::toCourseTeacherDTO)
                .toList();

        return new MyCourseDTO(
                course.getCourse_id(),
                course.getCourse_name(),
                course.getCourse_code(),
                course.getCredits(),
                openCourse.getTerm(),
                openCourse.getYear(),
                teachers);
    }
}
