import axios from "axios";
import env from "../config/env";

const axiosClient = axios.create({ baseURL: env.API_BASE_URL, withCredentials: true });

axiosClient.interceptors.response.use(
	(response) => response.data,
	(error) => {
		throw new Error(error);
	}
);

export default axiosClient