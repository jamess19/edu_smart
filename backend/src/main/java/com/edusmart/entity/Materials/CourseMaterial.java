package com.edusmart.entity.Materials;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "COURSEMATERIALS")
public class CourseMaterial {
    @Id
    public Integer resourceId;
    @Id
    public Integer courseId;
}
