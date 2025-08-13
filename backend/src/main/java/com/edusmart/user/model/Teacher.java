package com.edusmart.user.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "teacher")
@Getter
@Setter

public class Teacher extends User {
    private String teacher_code;
    private String degree;
    private String research_area;
    private int years_of_experience;
}
