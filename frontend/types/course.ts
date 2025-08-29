import { AssignmentInCourse } from "./assignment";
import { NotificationInCourse } from "./notification";
import { ResourceInCourse } from "./resource";
import { StudentInCourse } from "./student";
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


export interface CourseInDetail {
    course_name: string,
    course_code: string,
    credits: Number,
    term: Number,
    year: Number,
    teachers: [AssignedTeacher],
    students: [StudentInCourse],
    resources: [ResourceInCourse],
    assignments: [AssignmentInCourse],
    notifications: [NotificationInCourse]
}