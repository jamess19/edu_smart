import apiClient from "@/lib/AxiosClient"
import { StudentInfo } from "@/types/student"

export const StudentService = {
    getStudentInfo: async (id: Number): Promise<StudentInfo> => {
        const res = await apiClient.get(`students/${id}`);
        return res.data;
    }
}