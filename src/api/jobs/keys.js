const JOB_KEYS = {
  GET_JOBS: ["jobs", "all"],
  GET_ADMIN_JOBS: (params) => ["jobs", "admin", params]
}

export default JOB_KEYS