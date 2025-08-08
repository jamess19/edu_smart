import axiosClient from "@/lib/AxiosClient"

export const getMyCourses = async (id: Number) => {
    const response = await axiosClient.get(`/courses/students/${id}`)
    return response.data
}