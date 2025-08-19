package com.edusmart.auth.controller;

import com.edusmart.auth.dto.IntrospectRequest;
import com.edusmart.auth.dto.IntrospectResponse;
import com.edusmart.auth.dto.LoginResponse;
import com.edusmart.auth.service.AuthService;
import com.edusmart.auth.dto.LoginRequest;
import com.edusmart.dto.ApiResponse;
import com.nimbusds.jose.JOSEException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    private final AuthService authService;
    private final AuthenticationManager authenticationManager;//    Step 4 in security config: inject authentication manager

    public AuthController(AuthService authService, AuthenticationManager authenticationManager) {
        this.authService = authService;
        this.authenticationManager = authenticationManager;
    }
//    Step 5: config Login API
    @PostMapping("/login")
    public ApiResponse<LoginResponse> login(@RequestBody LoginRequest request) {
//        Authentication authenticationRequest = UsernamePasswordAuthenticationToken.unauthenticated(
//                request.username(), request.password()
//        );
//        Authentication authenticationResponse = authenticationManager.authenticate(authenticationRequest);
        LoginResponse data = authService.login(request);
        return ApiResponse.success(data, "success");
    }

    @PostMapping("/introspect")
    public ApiResponse<IntrospectResponse> authenticate(@RequestBody IntrospectRequest request)
            throws ParseException, JOSEException {
        return authService.introspect(request);
    }

}
