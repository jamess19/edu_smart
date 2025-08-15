import { SubmissionHistory } from "./submission";

export interface AssignmentInCourse {
    assignment_id: Number,
    title: string,
    description: string,
    start_date: string,
    due_date: string,
    max_score: Number,
    filepath: String,
    submission: SubmissionHistory
}