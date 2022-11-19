import axios from "axios";

import Config from "../config/config";

const clientAxios = axios.create({
  baseURL: Config.baseURL,
});

clientAxios.interceptors.response.use((res) => res.data);

export default clientAxios;
