import axiosClient from "../../lib/axiosClient";

const STATS_SERVICES = {
  getStats: () => axiosClient.get("/stats")
}

export default STATS_SERVICES