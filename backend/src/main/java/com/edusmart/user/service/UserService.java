package com.edusmart.user.service;

import com.edusmart.user.dto.LoginRequest;
import com.edusmart.user.dto.LoginResponse;
import com.edusmart.user.dto.UserInfor;
import com.edusmart.user.mapper.UserMapper;
import com.edusmart.user.model.User;
import com.edusmart.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class UserService {
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public Optional<UserInfor> getUserById(int id) {
        return userRepository.findById(id)
                .map(userMapper::toUserInfor)
                .or(() -> Optional.empty());
    }
}
