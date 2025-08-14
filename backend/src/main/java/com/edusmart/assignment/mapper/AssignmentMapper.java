package com.edusmart.assignment.mapper;

import com.edusmart.assignment.dto.AssignmentInfoDTO;
import com.edusmart.assignment.model.Assignment;
import com.edusmart.assignment.model.SubmissionHistory;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AssignmentMapper {

    public AssignmentInfoDTO toAssignemntInfoDTO(Assignment assignment) {
        return new AssignmentInfoDTO(
                assignment.getAssignment_id(),
                assignment.getTitle(),
                assignment.getDescription(),
                assignment.getStart_date(),
                assignment.getDue_date(),
                assignment.getMax_score(),
                assignment.getFilepath()
        );
    }
}
