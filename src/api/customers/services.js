import axiosClient from "../../lib/axiosClient";

const CUSTOMER_SERVICES = {
  createCustomer: (customer) => axiosClient.post("/customers", customer),
  editCustomer: (customer) => axiosClient.patch(`/customers/${customer._id}`, customer),
  getUserCustomers: (params) => axiosClient.get(`/customers/me?${params}`),
  deleteManyCustomers: (selectionState) => axiosClient.post("/customers/delete-many", selectionState)
}

export default CUSTOMER_SERVICES