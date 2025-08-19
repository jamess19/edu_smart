import { StudentBaseInfo } from "./student"
import { TeacherInfo } from "./teacher"

export interface userInfo {
    id: Number,
    fullname: string,
    username: string,
    address: string,
    email: string, 
    birthday: string,
    user_type: string,
    departmentName: string
}

export interface BaseUser {
  username: string
  password: string
  email: string
  fullname: string
  address: string
  birthday: Date | undefined
  department_id: number
  role: 'student' | 'teacher' | 'admin'
}


export interface NewUser extends BaseUser {
  teacher_info?: TeacherInfo
  student_info?: StudentBaseInfo
}