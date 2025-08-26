// services/adminService.ts
import apiClient from '@/lib/AxiosClient'

export const AdminService = {
  GetAllUsers: async() => {
    const res = await apiClient.get("/users")
    return res.data
  }
}