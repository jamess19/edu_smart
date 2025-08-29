package com.edusmart.assignment.dto;

import java.sql.Timestamp;

public record SubmissionHistoryDTO(
        Timestamp submitted_at,
        String filepath,
        float score
) {
}
