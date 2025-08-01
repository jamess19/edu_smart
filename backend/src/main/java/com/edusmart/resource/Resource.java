package com.edusmart.resource;

import com.edusmart.course.OpenCourse;
import com.edusmart.user.Teacher;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "resource")
@Getter
@Setter
public class Resource {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int resource_id;
    private String name;
    private String type;
    private String filepath;
    @ManyToOne
    @JoinColumn(name = "open_course_id")
    private OpenCourse opencourse;
    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;
}
