import { UserData } from "./user"

export interface AssignedTeacher {
    teacher_code: string,
    fullname: string,
    email: string,
    role: string
}

export interface TeacherBaseInfo extends UserData {
  teacher_code: string
  research_field: string
  experience_years: number
  degree: string
}