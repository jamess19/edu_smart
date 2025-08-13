import apiClient from "@/lib/AxiosClient"

export const UserService = {
    getCurrentUser: async () => {
        const res = await apiClient.get("/users/me");
        return res.data
    }
}