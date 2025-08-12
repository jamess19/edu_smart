// lib/axiosClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// // Optional: Interceptors (ví dụ thêm token, xử lý lỗi toàn cục)
// axiosClient.interceptors.request.use((config) => {
//   // Ví dụ: thêm token từ localStorage
//   if (typeof window !== 'undefined') {
//     const token = localStorage.getItem('access_token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//   }
//   return config;
// });

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log('Unauthenticated!');
    }
    return Promise.reject(error);
  }
);

export default apiClient;
