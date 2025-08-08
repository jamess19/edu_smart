package com.edusmart.user.exception;

import com.edusmart.common.exception.ErrorCode;

public class UserNotFoundException extends RuntimeException {
    private ErrorCode errorCode;
    public UserNotFoundException(ErrorCode errorCode) {
        super(errorCode.getMessage());
        this.errorCode = errorCode;
    }
}
