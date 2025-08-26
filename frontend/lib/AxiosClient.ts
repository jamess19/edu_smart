// lib/axiosClient.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8080/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Interceptors (ví dụ thêm token, xử lý lỗi toàn cục)
apiClient.interceptors.request.use((config) => {
  const publicEndpoints = [
      '/auth/login'
    ];
    const isPublicEndpoint = publicEndpoints.some(endpoint => 
      config.url?.includes(endpoint)
    );
  if (!isPublicEndpoint) {
    const token = localStorage.getItem('token');
    if (token) {
      console.log(token);
      config.headers.Authorization = `Bearer ${token}`;
    }
    else {
      console.log("Can't get token")
    }
  }
  console.log('Request:', {
      url: config.url,
      method: config.method,
      token: config.headers.Authorization ? true : false,
      isPublic: isPublicEndpoint
    });
  return config;}
,
(error) => {
  console.log("request error:", error);
  return Promise.reject(error)
});

export default apiClient;
