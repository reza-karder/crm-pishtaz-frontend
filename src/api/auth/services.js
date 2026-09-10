import axiosClient from "../../lib/axiosClient";

const AUTH_SERVICES = {
  signin: (credentials) => axiosClient.post("/auth/signin", credentials),
  checkSession: () => axiosClient.get("/auth/session"),
  signout: () => axiosClient.post("/auth/signout")
}

export default AUTH_SERVICES