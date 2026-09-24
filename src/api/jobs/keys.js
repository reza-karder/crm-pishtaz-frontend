const JOB_KEYS = {
  GET_JOBS: ["jobs", "all"],
  GET_ADMIN_JOBS: (params) => ["jobs", "admin", params],
  EDIT_JOB: () => ["job", "edit"],
  CREATE_JOB: () => ["job", "create"]
}

export default JOB_KEYS