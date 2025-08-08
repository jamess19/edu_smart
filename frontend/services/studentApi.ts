import axiosClient from "@/lib/AxiosClient"

export const getStudentInfo = async (id: Number) => {
    const res = await axiosClient.get(`/students/${id}`)
    return res.data
}