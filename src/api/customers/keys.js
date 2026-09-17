const CUSTOMER_KEYS = {
  CREATE_CUSTOMER: ["customers", "create"],
  EDIT_CUSTOMER: ["customer", "edit"],
  GET_USER_CUSTOMERS: (params) => ["customers", "user", params],
}

export default CUSTOMER_KEYS