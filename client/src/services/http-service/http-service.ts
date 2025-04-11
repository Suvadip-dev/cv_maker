import { axiosInstance } from "./axios";

export const HTTPService = {
  postRequest: (url: string, body?: any) => axiosInstance.post(url, body),
  getRequest: (url: string, options?: any) => axiosInstance.get(url, options),
  deleteRequest: (url: string, config?: any) => axiosInstance.delete(url, config),
  putRequest: (url: string, body?: any) => axiosInstance.put(url, body),
};
