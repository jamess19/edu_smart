package com.edusmart.entity.Staff;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "STAFFS")
public class Staff {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    protected Integer id;
    protected String username;
    protected String password;
    public String fullname;
    public String address;
    public String email;
    public java.sql.Date birthday;
    public String role;
    public Integer departmentId;
}
