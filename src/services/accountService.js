import clientAxios from "../lib/clientAxios";

class accountService {
  static async createAccount(data) {
    return clientAxios.post("/account", data);
  }
}

export default accountService;
