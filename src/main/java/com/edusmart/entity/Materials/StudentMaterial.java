package com.edusmart.entity.Materials;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class StudentMaterial {
    public Integer resourceId;
    public Integer studentId;
}
