import clientAxios from "../lib/clientAxios";

class authService {
  static async loginUser(email, password) {
    const body = { email, password };
    return clientAxios.post("/auth/login", body);
  }
}

export default authService;
