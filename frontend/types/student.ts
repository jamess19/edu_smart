import { UserData } from "./user"
export interface StudentInfo {
    fullname: String,
    email: String,
    user_type: String,
    department_name: String,
    student_code: string,
    gpa: number,
    major: string,
    completed_credits: number | 0,
    total_credits: number | 0,
    type: string,
}

export interface StudentInCourse {
    fullname: String,
    student_code: string
}

export interface StudentBaseInfo extends UserData {
  student_code: string
  major: string
  student_type: 'Chính quy' | 'CTDA' | 'Từ xa'
}