package com.edusmart.user.dto;

public record LoginRequest(
        String username,
        String password,
        String role
) {
}
