import apiClient from "@/lib/AxiosClient"
import { studentInfo } from "@/types/student"

export const StudentService = {
    getStudentInfo: async (id: Number): Promise<studentInfo> => {
        const res = await apiClient.get(`students/${id}`);
        return res.data;
    }
}