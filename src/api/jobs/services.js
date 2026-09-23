import axiosClient from "../../lib/axiosClient";

const JOB_SERVICES = {
  getJobs: () => axiosClient.get("/jobs/all"),
  getAdminJobs: (params) => axiosClient.get(`/jobs?${params}`)
}

export default JOB_SERVICES