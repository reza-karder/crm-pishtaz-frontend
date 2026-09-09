import { useQuery } from "@tanstack/react-query"
import AUTH_KEYS from "./keys"
import AUTH_SERVICES from "./services"

const useCheckSession = () => {
  return useQuery({
    queryKey: AUTH_KEYS.SESSION,
    queryFn: AUTH_SERVICES.checkSession
  })
}

export { useCheckSession }