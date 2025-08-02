package com.edusmart.department.model;

import com.edusmart.user.model.Teacher;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name="department")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer department_id;
    private String department_name;
    private String department_code;
    private String description;
    @OneToOne
    @JoinColumn(name = "manager_id")
    private Teacher manager;
}
