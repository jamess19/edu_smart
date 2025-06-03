package com.edusmart.entity.Student;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import jakarta.persistence.GenerationType;;
@Getter
@Setter
public class Student {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Integer id;
    public String username;
    public String password;
    public String fullname;
    public String address;
    public String email;
    public java.sql.Date birthday;
    public Integer departmentId;
    
}
