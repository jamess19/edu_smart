package com.edusmart.assignment.model;

import com.edusmart.user.model.Teacher;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Table(name = "assignment")
@Getter
@Setter
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int assignment_id;
    private String title;
    private String description;
    private LocalDateTime start_date;
    private LocalDateTime due_date;
    private float max_score;
    private String filepath;
    @ManyToOne
    @JoinColumn(name = "teacher_id")
    private Teacher teacher;
}
