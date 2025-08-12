import apiClient from "@/lib/AxiosClient"
import { MyCourse } from "@/types/course"

export const courseService = {
    getMyCourses: async (id: number): Promise<MyCourse[]> => {
        const res = await apiClient.get(`/courses/students/${id}`)
        return res.data;
    }
}