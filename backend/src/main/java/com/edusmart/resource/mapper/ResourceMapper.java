package com.edusmart.resource.mapper;

import com.edusmart.resource.dto.ResourceInfoDTO;
import com.edusmart.resource.model.Resource;
import org.springframework.stereotype.Component;

@Component
public class ResourceMapper {
    public ResourceInfoDTO toResourceInfoDTO(Resource res) {
        return new ResourceInfoDTO(
                res.getResource_id(),
                res.getName(),
                res.getType(),
                res.getFilepath()
        );
    }
}
