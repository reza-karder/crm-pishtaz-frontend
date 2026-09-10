import axiosClient from "../../lib/axiosClient";

const USER_SERVICES = {
  getUser: () => axiosClient.get("/users/me/profile")
}

export default USER_SERVICES