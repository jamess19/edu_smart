package com.edusmart.auth.service;

import com.edusmart.auth.dto.IntrospectRequest;
import com.edusmart.auth.dto.IntrospectResponse;
import com.edusmart.auth.dto.LoginRequest;
import com.edusmart.auth.dto.LoginResponse;
import com.edusmart.dto.ApiResponse;
import com.edusmart.user.model.User;
import com.edusmart.user.repository.UserRepository;
import com.nimbusds.jose.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.ParseException;
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

//    public LoginResponse login(LoginRequest loginRequest) {
//        Optional<User> user = userRepository.findByUsername(loginRequest.username())
//                .or(() -> Optional.empty());
//
//        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);
//        if (user.isPresent()
//                && passwordEncoder.matches(loginRequest.password(), user.get().getPassword())
//        ) {
//            // generate token
//            var token = jwtService.generateToken(user.get().getUsername());
//            var loginResponse = LoginResponse.builder()
//                    .token(token)
//                    .role(user.get().getUser_type())
//                    .build();
//            return loginResponse;
//        }
//        return null;
//    }

    public ApiResponse<IntrospectResponse> introspect(IntrospectRequest request)
            throws JOSEException, ParseException {
        return jwtService.introspect(request);
    }
}
