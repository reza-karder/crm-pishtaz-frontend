import axiosClient from "../../lib/axiosClient";

const JOB_SERVICES = {
  getJobs: () => axiosClient.get("/jobs/all"),
  getAdminJobs: (params) => axiosClient.get(`/jobs?${params}`),
  editJob: (job) => axiosClient.patch(`/jobs/${job._id}`, job),
  createJob: (job) => axiosClient.post("/jobs", job)
}

export default JOB_SERVICES