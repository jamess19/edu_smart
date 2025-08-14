package com.edusmart.resource.repository;

import com.edusmart.resource.dto.ResourceInfoDTO;
import com.edusmart.resource.model.Resource;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResourceRepository extends JpaRepository<Resource, Integer> {
}
