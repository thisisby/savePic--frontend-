import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["Authorization"] = localStorage.getItem("save_pic_token");
  return config;
});

export default axiosInstance;
