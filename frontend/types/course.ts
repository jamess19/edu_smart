import { AssignedTeacher } from "./teacher";

export interface MyCourse {
    course_id: Number,
    course_name: string,
    course_code: string,
    credits: Number,
    status: String,
    term: Number,
    year: Number,
    teachers: [AssignedTeacher]
}