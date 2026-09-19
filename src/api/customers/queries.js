import { useSuspenseQuery } from "@tanstack/react-query"
import CUSTOMER_KEYS from "./keys"
import CUSTOMER_SERVICES from "./services"

const useGetUserCustomers = (params, options = {}) => {
  return useSuspenseQuery({
    queryKey: CUSTOMER_KEYS.GET_USER_CUSTOMERS(params),
    queryFn: () => CUSTOMER_SERVICES.getUserCustomers(params),
    ...options
  })
}

const useGetCustomerProfile = (customerId) => {
  return useSuspenseQuery({
    queryKey: CUSTOMER_KEYS.GET_CUSTOMER_PROFILE(customerId),
    queryFn: () => CUSTOMER_SERVICES.getCustomerProfile(customerId)
  })
}

export { useGetUserCustomers, useGetCustomerProfile }