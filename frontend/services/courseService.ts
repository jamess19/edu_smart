import apiClient from "@/lib/AxiosClient"
import { MyCourse } from "@/types/course"

export const CourseService = {
    getMyCourses: async () => {
        const res = await apiClient.get(`/courses/my-courses`)
        return res.data;
    },
    getMyCourseById: async(course_id: number) => {
        const res = await apiClient.get(`/courses/my-courses/${course_id}`)
        return res.data;
    }
}