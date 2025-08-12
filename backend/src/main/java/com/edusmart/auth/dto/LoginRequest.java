package com.edusmart.auth.dto;

import lombok.Builder;

@Builder
public record LoginRequest(
        String username,
        String password,
        String role
) {
}
