package com.edusmart.user.controller;

import com.edusmart.dto.ApiResponse;
import com.edusmart.user.dto.UserInfor;
import com.edusmart.user.model.User;
import com.edusmart.user.service.UserService;
import com.nimbusds.jose.JOSEException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.util.List;

@RestController
@RequestMapping("api/v1/users")
public class UserController {
    @Autowired
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
     @GetMapping("/me")
     public ApiResponse<?> getCurrentUser(
             @RequestHeader("Authorization") String authHeader)
             throws ParseException, JOSEException {
         return userService.getCurrentUser(authHeader);
     }

     @PostMapping()
    public ApiResponse<UserInfor> createUser(@RequestBody User user) {
        UserInfor newuser = userService.createUser(user);
        return ApiResponse.success(newuser, null);
     }

     @GetMapping()
    public ApiResponse<List<UserInfor>> getAllUsers() {
        List<UserInfor> users = userService.getAllUsers();
        return ApiResponse.success(users, null);
     }
//    @GetMapping("/{id}")
//    public ApiResponse<UserInfor> getUserById(@PathVariable int id) {
//
//        Optional<UserInfor> userInfor = userService.getUserById(id);
//        if (userInfor.isPresent()) {
//            return ApiResponse.success(userInfor.get(),null);
//        }
//        return ApiResponse.error(ErrorCode.INVALID_DOB);
//    }
}
