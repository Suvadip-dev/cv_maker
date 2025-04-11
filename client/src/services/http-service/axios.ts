import axios from "axios";
import { TokenService } from "../token-service/token-service";
import toast from "react-hot-toast";

const baseUrl = "http://localhost:5000/";
const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = TokenService.getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      toast.error("Session expired. Please login again.");
      localStorage.removeItem("token");
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    }
    return Promise.reject(error);
  }
);

export { axiosInstance };
