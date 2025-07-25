package com.edusmart.department;

import com.edusmart.user.User;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name="DEPARTMENTS")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer department_id;
    private String department_name;
    private String department_code;
    private String description;
    @OneToOne
    @JoinColumn(name = "manager")
    private User manager;
}
