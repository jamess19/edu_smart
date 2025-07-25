package com.edusmart.assignment;

import com.edusmart.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.security.Timestamp;


@Entity
@Table(name = "SubmissionHistory")
@Getter
@Setter
public class SubmissionHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int submission_id;
    private Timestamp submitted_at;
    private String filepath;
    private float score;
    @ManyToOne
    @JoinColumn(name = "student_id")
    private User student;

    @ManyToOne
    @JoinColumn(name = "assignment_id")
    private Assignment assignment;

}
