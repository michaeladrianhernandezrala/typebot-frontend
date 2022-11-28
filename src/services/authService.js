import clientAxios from "../lib/clientAxios";

class authService {
  static async loginUser(data) {
    return clientAxios.post("/auth/login", data);
  }
}

export default authService;
