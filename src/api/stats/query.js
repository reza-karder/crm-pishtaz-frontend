import { useQuery } from "@tanstack/react-query"
import STATS_SERVICES from "./services"
import STATS_KEYS from "./key"

const useGetAdminStats = () => {
  return useQuery({
    queryFn: STATS_SERVICES.getStats,
    queryKey: STATS_KEYS.GET_STATS
  })
}

export { useGetAdminStats }