package com.edusmart.auth.dto;

import lombok.Builder;

@Builder

public record LoginResponse(
        String token
) {
}
