const CUSTOMER_KEYS = {
  CREATE_CUSTOMER: ["customers", "create"],
  EDIT_CUSTOMER: ["customer", "edit"],
  GET_USER_CUSTOMERS: (...options) => ["customers", "user", ...options],
  DELETE_MANY_CUSTOMERS: ["customers", "delete", "many"],
  GET_SINGLE_CUSTOMER: (customerId) => ["customers", "single", customerId]
}

export default CUSTOMER_KEYS