import apiClient from "@/lib/AxiosClient"
import { userInfo } from "@/types/user";


export const authService = {
    login: async (username: string, password: string) => {
        const res = await apiClient.post("/auth/login", 
            {
                username, 
                password
            },
            {withCredentials : true}
        );
        return res.data;
    },
    getProfile: async (id: number): Promise<userInfo> => {
        const res = await apiClient.get(`/users/${id}`);
        return res.data
    }
}