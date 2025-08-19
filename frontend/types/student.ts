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

export interface StudentBaseInfo {
  student_code: string
  major: string
  student_type: 'regular' | 'transfer' | 'international'
}