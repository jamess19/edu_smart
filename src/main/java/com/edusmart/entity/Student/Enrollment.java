package com.edusmart.entity.Student;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Enrollment {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Integer id;
    public Integer studentId;
    public Integer courseId;
    @Column(name = "enrolled_at")
    public LocalDateTime enrolledAt;
}
