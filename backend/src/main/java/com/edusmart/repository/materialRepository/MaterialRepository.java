package com.edusmart.repository.materialRepository;

import com.edusmart.entity.Materials.CourseMaterial;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MaterialRepository extends JpaRepository<CourseMaterial,Integer> {

}
