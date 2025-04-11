import { HTTPService } from "../http-service/http-service";

export const AuthService = {
  signup: (data: { name: string; email: string; password: string }) => {
    return HTTPService.postRequest("/api/auth/register", data);
  },
  login: (data: { email: string; password: string }) => {
    return HTTPService.postRequest("/api/auth/login", data);
  },
};
