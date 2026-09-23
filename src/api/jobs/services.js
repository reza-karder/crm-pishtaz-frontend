import axiosClient from "../../lib/axiosClient";

const JOB_SERVICES = {
  getJobs: () => axiosClient.get("/jobs/all")
}

export default JOB_SERVICES