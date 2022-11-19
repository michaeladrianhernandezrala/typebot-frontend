import clientAxios from "../lib/clientAxios";

class authService {
  static async postRegisterUser(data) {
    return clientAxios.post("/auth/register", data);
  }
}

export default authService;
