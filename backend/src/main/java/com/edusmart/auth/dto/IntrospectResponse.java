package com.edusmart.auth.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class IntrospectResponse {
    private Boolean valid;
}
