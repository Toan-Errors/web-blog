import { CONFIG } from "@/config";
import axios from "axios";

if (!CONFIG.API_URL) {
  throw new Error("API_URL is not set");
}

const axiosInstance = axios.create({
  baseURL: CONFIG.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    throw error;
  },
);

export default axiosInstance;
