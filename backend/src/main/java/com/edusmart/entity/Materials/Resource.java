package com.edusmart.entity.Materials;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "RESOURCES")
public class Resource {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    public Integer id;
    public String name;
    public String type;
}
