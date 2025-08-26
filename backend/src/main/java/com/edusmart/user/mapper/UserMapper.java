package com.edusmart.user.mapper;

import com.edusmart.user.dto.UserInfor;
import com.edusmart.user.model.User;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class UserMapper {
    public UserInfor toUserInfor(User user){
        return new UserInfor(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                user.getFullname(),
                user.getAddress(),
                user.getEmail(),
                user.getBirthday(),
                user.getUser_type(),
                user.getDepartment().getDepartment_name(),
                user.getCreated_at(),
                user.getUpdated_at()
        );
    }
}
