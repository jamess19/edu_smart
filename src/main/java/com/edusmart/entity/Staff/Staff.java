package com.edusmart.entity.Staff;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.GenerationType;
@Getter
@Setter
@Entity
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
