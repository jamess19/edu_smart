package com.edusmart.user.exception;

import com.edusmart.user.dto.LoginResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserExceptionHandler {
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<?> handlingUserNotFound(UserNotFoundException e) {
        return ResponseEntity.notFound().build();
    }
}
