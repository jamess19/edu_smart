package com.edusmart.assignment.model;

import com.edusmart.assignment.model.id.SubmissionId;
import com.edusmart.user.model.Student;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;


@Entity
@Table(name = "submission")
@Getter
@Setter
public class Submission {
    @EmbeddedId
    private SubmissionId submission_id;
    private Timestamp submitted_at;
    private String filepath;
    private float score;
    @ManyToOne
    @MapsId("student_id")
    @JoinColumn(name = "student_id")
    @JsonBackReference
    private Student student;
    @ManyToOne
    @MapsId("assignment_id")
    @JoinColumn(name = "assignment_id")
    private Assignment assignment;
}
