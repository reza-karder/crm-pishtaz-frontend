import { useSuspenseQuery } from "@tanstack/react-query"
import STATS_SERVICES from "./services"
import STATS_KEYS from "./key"

const useGetAdminStats = () => {
  return useSuspenseQuery({
    queryFn: STATS_SERVICES.getStats,
    queryKey: STATS_KEYS.GET_STATS
  })
}

export { useGetAdminStats }