package com.edusmart.assignment.mapper;

import com.edusmart.assignment.dto.AssignmentInfoDTO;
import com.edusmart.assignment.model.Assignment;
import org.springframework.stereotype.Component;

@Component
public class AssignmentMapper {
    public final SubmissionHistoryMapper submissionHistoryMapper;

    public AssignmentMapper(SubmissionHistoryMapper submissionHistoryMapper) {
        this.submissionHistoryMapper = submissionHistoryMapper;
    }

    public AssignmentInfoDTO toAssignemntInfoDTO(Assignment assignment, int student_id) {
        return new AssignmentInfoDTO(
                assignment.getAssignment_id(),
                assignment.getTitle(),
                assignment.getDescription(),
                assignment.getStart_date(),
                assignment.getDue_date(),
                assignment.getMax_score(),
                assignment.getFilepath(),
                assignment.getSubmissionByStudent(student_id)
                        .map(submissionHistoryMapper::toSubmissionHistoryDTO)
                        .orElse(null)
        );
    }
}
