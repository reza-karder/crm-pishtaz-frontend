const CUSTOMER_KEYS = {
  CREATE_CUSTOMER: ["customers", "create"],
  EDIT_CUSTOMER: ["customer", "edit"],
  GET_USER_CUSTOMERS: (...options) => ["customers", "user", ...options],
  DELETE_MANY_CUSTOMERS: ["customers", "delete", "many"],
  GET_CUSTOMER_PROFILE: (customerId) => ["customers", "single", customerId],
  DELETE_CUSTOMER: ["customer", "delete"],
  TRANSFER_CUSTOMER: ["customer", "transfer"]
}

export default CUSTOMER_KEYS