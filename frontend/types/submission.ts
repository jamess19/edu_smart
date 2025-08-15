import { Timestamp } from "next/dist/server/lib/cache-handlers/types";

export interface SubmissionHistory {
    submitted_at: Timestamp,
    filepath: String,
    score: Number
}