package com.edusmart.user.dto;

import lombok.Builder;
import java.util.Date;
@Builder

// bỏ
public record UserInfor(
        int id,
        String username,
        String password,
        String fullname,
        String address,
        String email,
        Date birthday,
        String user_type,
        String departmentName
) {
}
