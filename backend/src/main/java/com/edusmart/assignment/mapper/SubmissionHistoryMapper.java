package com.edusmart.assignment.mapper;

import com.edusmart.assignment.dto.SubmissionHistoryDTO;
import com.edusmart.assignment.model.Submission;
import org.springframework.stereotype.Component;

@Component
public class SubmissionHistoryMapper {
    public SubmissionHistoryDTO toSubmissionHistoryDTO(Submission sh) {
        return new SubmissionHistoryDTO(
                sh.getSubmitted_at(),
                sh.getFilepath(),
                sh.getScore()
        );
    }
}
