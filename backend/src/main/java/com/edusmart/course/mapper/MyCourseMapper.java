package com.edusmart.course.mapper;

import com.edusmart.course.Course;
import com.edusmart.course.OpenCourse;
import com.edusmart.course.dto.MyCourseDTO;
import com.edusmart.enrollment.Enrollment;
import com.edusmart.user.dto.TeacherInfoDTO;
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
        List<TeacherInfoDTO> teachers = openCourse.getTeachingAssignments()
                .stream()
                .map(ta -> teacherMapper.toTeacherInfoDTO((ta.getTeacher())))
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
