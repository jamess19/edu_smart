package com.edusmart.resource;

import com.edusmart.course.OpenCourse;
import com.edusmart.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "Resource")
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
    @JoinColumn(name = "opencourse_id")
    private OpenCourse opencourse;
    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private User teacher;
}
