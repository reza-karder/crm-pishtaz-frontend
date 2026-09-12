import axiosClient from "../../lib/axiosClient";

const USER_SERVICES = {
  getUser: () => axiosClient.get("/users/me/profile"),
  getUserStats: () => axiosClient.get("/users/me/stats")
}

export default USER_SERVICES