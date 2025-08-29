
export interface userInfo {
    id: Number,
    fullname: string,
    username: string,
    address: string,
    email: string, 
    birthday: string,
    user_type: string,
    departmentName: string,
    created_at: string,
    updated_at: string
}

export interface UserData {
  username: string
  password: string
  email: string
  fullname: string
  address: string
  birthday: Date | undefined
  department_id: number
  role: 'student' | 'teacher' | ""
}
