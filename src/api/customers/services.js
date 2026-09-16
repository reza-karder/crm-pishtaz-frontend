import axiosClient from "../../lib/axiosClient";

const CUSTOMER_SERVICES = {
  createCustomer: (customer) => axiosClient.post("/customers", customer),
  editCustomer: (customer) => axiosClient.patch(`/customers/${customer._id}`, customer)
}

export default CUSTOMER_SERVICES