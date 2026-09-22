import axiosClient from "../../lib/axiosClient";

const NOTIFICATION_SERVICES = {
  getNotifications: () => axiosClient.get("/notifications")
}

export default NOTIFICATION_SERVICES