package com.edusmart.user.model;

import com.edusmart.assignment.model.Submission;
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
    @OneToMany(mappedBy = "student")
    List<Submission> submission_history;

    public Student() {
        this.setUser_type("student");
    }
}
