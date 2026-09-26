const USER_KEYS = {
  GET_USER: ["user"],
  GET_USER_STATS: ["user", "stats"],
  GET_ACTIVE_USERS: ["users", "active"],
  EDIT_USER: ["user", "edit"],
  CHANGE_USER_PASSWORD: ["user", "password"],
  GET_ALL_USERS: ["users", "all"],
  CREATE_EMPLOYEE: ["employee", "create"],
  EDIT_EMPLOYEE: ["employee", "edit"],
  GET_EMPLOYEE: (employeeId) => ["employee", employeeId],
  DELETE_EMPLOYEE: ["employee", "delete"]
}

export default USER_KEYS