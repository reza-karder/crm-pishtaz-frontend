import axios from "axios";
import env from "../config/env";
import { toast } from "sonner";

const axiosClient = axios.create({ baseURL: env.API_BASE_URL, withCredentials: true });

axiosClient.interceptors.response.use(
	(response) => response.data,
  (error) => {
    // if there is a message inside the response 
    // handle it manually like a success response and show the message
    if(error.response?.data?.message) {
      return error.response.data
    }

    // if error is unexpected just show some toast message
    toast.error("مشکلی پیش آمده لطفا بعدا سعی کنید")
    return Promise.reject(error)
  }
);

export default axiosClient