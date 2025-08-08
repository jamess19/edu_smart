package com.edusmart.user.controller;

import com.edusmart.dto.ApiResponse;
import com.edusmart.user.dto.LoginRequest;
import com.edusmart.user.service.AuthService;
import com.edusmart.user.service.UserService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }
    @PostMapping("/login")
    public ApiResponse<Integer> login(@RequestBody LoginRequest request) {
            return authService.login(request);
    }

}
