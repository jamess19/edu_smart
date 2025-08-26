package com.edusmart.user.controller;

import com.edusmart.common.exception.ErrorCode;
import com.edusmart.dto.ApiResponse;
import com.edusmart.user.dto.TeacherInfoDTO;
import com.edusmart.user.model.Teacher;
import com.edusmart.user.service.TeacherService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/teachers")
public class TeacherController {
    private final TeacherService teacherService;
    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @GetMapping("/{id}")
    public ApiResponse<TeacherInfoDTO> getTeacherInforById(@PathVariable int id) {
        Optional<TeacherInfoDTO> teacherInfo = teacherService.getTeacherById(id);
        if(teacherInfo.isPresent()) {
            return ApiResponse.success(teacherInfo.get(),null);
        }
        return ApiResponse.error(ErrorCode.NOT_FOUND);
    }
}
