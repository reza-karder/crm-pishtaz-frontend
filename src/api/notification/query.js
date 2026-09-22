import { useQuery } from "@tanstack/react-query"
import NOTIFICATION_KEYS from "./keys"
import NOTIFICATION_SERVICES from "./services"

const useGetNotifications = (options = {}) => {
  return useQuery({
    queryKey: NOTIFICATION_KEYS.GET_NOTIFICATIONS,
    queryFn: NOTIFICATION_SERVICES.getNotifications,
    ...options
  })
}

export default useGetNotifications