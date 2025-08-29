package com.edusmart.auth.controller;

import com.edusmart.auth.dto.IntrospectRequest;
import com.edusmart.auth.dto.IntrospectResponse;
import com.edusmart.auth.service.AuthService;
import com.edusmart.auth.dto.LoginRequest;
import com.edusmart.auth.service.JwtService;
import com.edusmart.common.utils.CookieUtils;
import com.edusmart.dto.ApiResponse;
import com.nimbusds.jose.JOSEException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    private final AuthService authService;
    private final AuthenticationManager authenticationManager;//    Step 4 in security config: inject authentication manager
    private final JwtService jwtService;
    private final CookieUtils cookieUtils;
    public AuthController(AuthService authService, AuthenticationManager authenticationManager, JwtService jwtService, CookieUtils cookieUtils) {
        this.authService = authService;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.cookieUtils = cookieUtils;
    }
//    Step 5: config Login API
    @PostMapping("/login")
    public ApiResponse<String> login(@RequestBody LoginRequest request, HttpServletResponse response) {
        Authentication authenticationRequest = UsernamePasswordAuthenticationToken.unauthenticated(
                request.username(), request.password()
        );
        Authentication authenticationResponse = authenticationManager.authenticate(authenticationRequest);
        UserDetails userDetail = (UserDetails) authenticationResponse.getPrincipal();
        String token = jwtService.generateToken(userDetail.getUsername());
        Cookie newCookie = cookieUtils.create(token);
        response.addCookie(newCookie);
        return ApiResponse.success("login successfully", null);
    }

    @PostMapping("/introspect")
    public ApiResponse<IntrospectResponse> authenticate(@RequestBody IntrospectRequest request)
            throws ParseException, JOSEException {
        return authService.introspect(request);
    }
}
