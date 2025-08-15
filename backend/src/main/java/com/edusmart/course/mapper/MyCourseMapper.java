package com.edusmart.course.mapper;

import com.edusmart.assignment.dto.AssignmentInfoDTO;
import com.edusmart.assignment.mapper.AssignmentMapper;
import com.edusmart.course.dto.CourseDetailDTO;
import com.edusmart.course.dto.StudentInCourseDTO;
import com.edusmart.course.model.Course;
import com.edusmart.course.model.OpenCourse;
import com.edusmart.course.dto.MyCourseDTO;
import com.edusmart.enrollment.model.Enrollment;
import com.edusmart.notification.dto.NotificationDTO;
import com.edusmart.notification.mapper.NotificationMapper;
import com.edusmart.resource.dto.ResourceInfoDTO;
import com.edusmart.resource.mapper.ResourceMapper;
import com.edusmart.user.dto.CourseTeacherDTO;
import com.edusmart.user.mapper.StudentMapper;
import com.edusmart.user.mapper.TeacherMapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MyCourseMapper {
    private final TeacherMapper teacherMapper;
    private final StudentMapper studentMapper;
    private final ResourceMapper resourceMapper;
    private final AssignmentMapper assignmentMapper;
    private final NotificationMapper notificationMapper;

    public MyCourseMapper(TeacherMapper teacherMapper, StudentMapper studentMapper, ResourceMapper resourceMapper,
                          AssignmentMapper assignmentMapper, NotificationMapper notificationMapper) {
        this.teacherMapper = teacherMapper;
        this.studentMapper = studentMapper;
        this.resourceMapper = resourceMapper;
        this.assignmentMapper = assignmentMapper;
        this.notificationMapper = notificationMapper;
    }
    public MyCourseDTO toMyCourseDTO(Enrollment enrollment){
        OpenCourse openCourse = enrollment.getOpen_course();
        Course course = openCourse.getCourse();
        List<CourseTeacherDTO> teachers = openCourse.getTeachingAssignments()
                .stream()
                .map(teacherMapper::toCourseTeacherDTO)
                .toList();

        return new MyCourseDTO(
                openCourse.getOpen_course_id(),
                course.getCourse_name(),
                course.getCourse_code(),
                course.getCredits(),
                openCourse.getTerm(),
                openCourse.getYear(),
                enrollment.getStatus(),
                teachers);
    }
    public CourseDetailDTO toCoursDetailDTO(OpenCourse openCourse, int student_id){
        Course course = openCourse.getCourse();
        List<ResourceInfoDTO> resources = openCourse.getResources()
                .stream()
                .map(resourceMapper::toResourceInfoDTO)
                .toList();

        List<StudentInCourseDTO> students = openCourse.getEnrollment()
                .stream()
                .map(studentMapper::toStudentInCourseDTO)
                .toList();

        List<CourseTeacherDTO> teachers = openCourse.getTeachingAssignments()
                .stream()
                .map(teacherMapper::toCourseTeacherDTO)
                .toList();

        List<AssignmentInfoDTO> assignments = openCourse.getAssignments()
                .stream()
                .map(a-> assignmentMapper.toAssignemntInfoDTO(a, student_id))
                .toList();

        List<NotificationDTO> notifications = openCourse.getNotifications()
                .stream()
                .map(notificationMapper::toNotificationDTO)
                .toList();

        return new CourseDetailDTO(
                course.getCourse_name(),
                course.getCourse_code(),
                course.getCredits(),
                openCourse.getTerm(),
                openCourse.getYear(),
                teachers,
                students,
                resources,
                assignments,
                notifications
        );
    }
}
