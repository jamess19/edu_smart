package com.edusmart.user.dto;

public record LoginResponse(
        boolean success,
        String message,
        int user_id
) {
}
