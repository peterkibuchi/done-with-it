import apiClient from "./client";

const endpoint = "/users";

interface UserInfo {
  name: string;
  email: string;
  password: string;
}

const register = (userInfo: UserInfo) => apiClient.post(endpoint, userInfo);

export default { register };
