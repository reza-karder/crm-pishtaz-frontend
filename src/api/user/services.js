import axiosClient from "../../lib/axiosClient";

const USER_SERVICES = {
  getUser: () => axiosClient.get("/users/me/profile"),
  getUserStats: () => axiosClient.get("/users/me/stats"),
  getActiveUsers: () => axiosClient.get("/users/active")
}

export default USER_SERVICES