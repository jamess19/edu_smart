package com.edusmart.common.exception;

import lombok.Getter;

@Getter
public enum ErrorCode {
    NOT_FOUND(1001, "user not found"),
    UNAUTHENTICATED(1006, "Unauthenticated"),
    UNAUTHORIZED(1007, "You do not have permission"),
    INVALID_DOB(1008, "Your age must be at least {min}"),
    ;

    ErrorCode(int code, String message) {
        this.code = code;
        this.message = message;
    }
    private final int code;
    private final String message;
}
