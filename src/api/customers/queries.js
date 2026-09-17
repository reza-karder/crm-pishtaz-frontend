import { useQuery } from "@tanstack/react-query"
import CUSTOMER_KEYS from "./keys"
import CUSTOMER_SERVICES from "./services"

const useGetUserCustomers = (params) => {
  return useQuery({
    queryKey: CUSTOMER_KEYS.GET_USER_CUSTOMERS(params),
    queryFn: () => CUSTOMER_SERVICES.getUserCustomers(params),
  })
}

export { useGetUserCustomers }