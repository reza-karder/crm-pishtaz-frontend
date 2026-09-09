import axiosClient from "../../lib/axiosClient";

const AUTH_SERVICES = {
  signin: (credentials) => axiosClient.post("/auth/signin", credentials),
  checkSession: () => axiosClient.get("/auth/session")
}

export default AUTH_SERVICES