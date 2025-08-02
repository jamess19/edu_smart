package com.edusmart.user.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "student")
@Getter
@Setter
public class Student extends User {
    private String student_code;
    private float gpa;
    private String major;
    private int completed_credits;
    private int total_credits;
    private String type;
}
