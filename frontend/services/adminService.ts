// services/adminService.ts
import apiClient from '@/lib/AxiosClient'

export const AdminService = {
  // Get departments
  getDepartments: async () => {
    try {
      // Mock data
      const departments = [
        { id: 1, name: "Công nghệ thông tin", code: "IT" },
        { id: 2, name: "Kinh tế", code: "ECO" },
        { id: 3, name: "Ngoại ngữ", code: "FL" },
        { id: 4, name: "Toán học", code: "MATH" },
        { id: 5, name: "Vật lý", code: "PHY" }
      ]
      
      return { data: departments }
    } catch (error) {
      console.error('Error fetching departments:', error)
      throw error
    }
  },

  // Create new user
  createUser: async (userData: any) => {
    try {
      console.log('Creating user:', userData)
      
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      return { 
        data: { 
          id: Math.random() * 1000,
          ...userData,
          created_at: new Date().toISOString()
        }
      }
    } catch (error) {
      console.error('Error creating user:', error)
      throw error
    }
  }
}