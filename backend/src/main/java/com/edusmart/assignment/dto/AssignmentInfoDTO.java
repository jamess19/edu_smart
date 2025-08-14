package com.edusmart.assignment.dto;

import com.edusmart.assignment.model.SubmissionHistory;

import java.time.LocalDateTime;
import java.util.List;

public record AssignmentInfoDTO(
        int assignment_id,
        String title,
        String description,
        LocalDateTime start_date,
        LocalDateTime due_date,
        float max_score,
        String filepath
) {
}
