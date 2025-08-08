package com.edusmart.user.service;

import com.edusmart.common.exception.ErrorCode;
import com.edusmart.dto.ApiResponse;
import com.edusmart.user.dto.LoginRequest;
import com.edusmart.user.dto.LoginResponse;
import com.edusmart.user.mapper.UserMapper;
import com.edusmart.user.model.User;
import com.edusmart.user.repository.UserRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.View;

import java.util.Optional;

@Service
public class AuthService {
    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
    }

    public ApiResponse<Integer> login(LoginRequest loginRequest) {
        Optional<User> user = userRepository.findByUsername(loginRequest.username())
                .or(() -> Optional.empty());

        if(user.isPresent()
                && user.get().getPassword().equals(loginRequest.password())
                && user.get().getUser_type().equals(loginRequest.role())
        ) {
            return ApiResponse.success(user.get().getId(), "Login Success");
        }
        return ApiResponse.error(ErrorCode.NOT_FOUND);
    }
}
