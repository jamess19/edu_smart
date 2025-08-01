package com.edusmart.user;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.Date;
import com.edusmart.department.Department;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "user")
@Setter
@Getter
@Inheritance(strategy = InheritanceType.JOINED)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String username;
    private String password;
    private String fullname;
    private String address;
    private String email;
    private Date birthday;
    private String user_type;
    private Timestamp created_at;
    private Timestamp updated_at;
    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
}
