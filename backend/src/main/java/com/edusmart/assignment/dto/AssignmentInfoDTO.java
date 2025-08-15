package com.edusmart.assignment.dto;

import java.time.LocalDateTime;

public record AssignmentInfoDTO(
        int assignment_id,
        String title,
        String description,
        LocalDateTime start_date,
        LocalDateTime due_date,
        float max_score,
        String filepath,
        SubmissionHistoryDTO submission_history
        ) {
}
