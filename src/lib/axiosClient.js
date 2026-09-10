import axios from "axios";
import env from "../config/env";
import ERROR_MESSAGES from "../constants/errorMessages";

const axiosClient = axios.create({ baseURL: env.API_BASE_URL, withCredentials: true });

axiosClient.interceptors.response.use(
	(response) => response.data,
  (error) => {
    // if there is a message inside the response 
    // handle it manually like a success response and show the message
    if(error.response?.data?.message) {
      return error.response.data
    }

    // if error is unexpected just show some toast message in react query client
    error.message = ERROR_MESSAGES[error.code] || "مشکلی پیش اومد. لطفاً دوباره تلاش کنید."
    return Promise.reject(error)
  }
);

export default axiosClient