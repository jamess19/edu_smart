package com.edusmart.user.dto;

import java.util.Date;

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
