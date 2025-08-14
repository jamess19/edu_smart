package com.edusmart.resource.dto;

public record ResourceInfoDTO(
        int resource_id,
        String name,
        String type,
        String filepath
) {
}
