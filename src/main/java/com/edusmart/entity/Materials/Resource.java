package com.edusmart.entity.Materials;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Resource {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Integer id;
    public String name;
    public String type;
}
