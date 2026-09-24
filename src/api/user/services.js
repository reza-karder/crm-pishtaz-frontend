import axiosClient from "../../lib/axiosClient";

const USER_SERVICES = {
  getUser: () => axiosClient.get("/users/me/profile"),
  getUserStats: () => axiosClient.get("/users/me/stats"),
  getActiveUsers: () => axiosClient.get("/users/active"),
  editUser: (data) => axiosClient.patch("/users/me", data),
  changeUserPassword: (data) => axiosClient.patch("/users/me/password", data),
  getAllUsers: () => axiosClient.get("/users/all")
}

export default USER_SERVICES