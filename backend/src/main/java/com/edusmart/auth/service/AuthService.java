package com.edusmart.auth.service;

import com.edusmart.auth.dto.IntrospectRequest;
import com.edusmart.auth.dto.IntrospectResponse;
import com.edusmart.auth.dto.LoginRequest;
import com.edusmart.auth.dto.LoginResponse;
import com.edusmart.common.exception.ErrorCode;
import com.edusmart.dto.ApiResponse;
import com.edusmart.user.mapper.UserMapper;
import com.edusmart.user.model.User;
import com.edusmart.user.repository.UserRepository;
import com.nimbusds.jose.*;
import com.nimbusds.jose.crypto.MACSigner;
import com.nimbusds.jose.crypto.MACVerifier;
import com.nimbusds.jwt.JWTClaimsSet;
import com.nimbusds.jwt.SignedJWT;
import lombok.experimental.NonFinal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Optional;

@Service
public class AuthService {
    @Autowired
    private final UserRepository userRepository;
    private final JwtService jwtService;

    public AuthService(UserRepository userRepository, JwtService jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }

    public ApiResponse<LoginResponse> login(LoginRequest loginRequest) {
        Optional<User> user = userRepository.findByUsername(loginRequest.username())
                .or(() -> Optional.empty());
    
        // gọi passwordEncoder để match mật khẩu người dùng với mật khẩu trong database đã được mã hoá
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);

        if (user.isPresent() && user.get().getUser_type().equals(loginRequest.role())
//                && passwordEncoder.matches(loginRequest.password(), user.get().getPassword())
        ) {
            // generate token
            var token = jwtService.generateToken(user.get());
            var loginResponse = LoginResponse.builder()
                    .token(token)
                    .build();
            return ApiResponse.success(loginResponse, "login success");
        }
        return ApiResponse.error(ErrorCode.NOT_FOUND);
    }

    public ApiResponse<IntrospectResponse> introspect(IntrospectRequest request)
            throws JOSEException, ParseException {
        return jwtService.introspect(request);
    }
}
