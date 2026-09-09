import axiosClient from "../../lib/axiosClient";

const AUTH_SERVICES = {
  signin: (credentials) => axiosClient.post("/auth/signin", credentials)
}

export default AUTH_SERVICES