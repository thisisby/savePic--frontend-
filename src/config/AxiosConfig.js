import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8080",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Authorization"] = localStorage.getItem("save_pic_token");
  return config;
});

export default axiosInstance;
