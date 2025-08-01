package com.edusmart.user;

import com.edusmart.enrollment.Enrollment;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

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
