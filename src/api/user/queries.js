import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import USER_KEYS from "./keys";
import USER_SERVICES from "./services";

const useGetUser = () => {
	return useQuery({
		queryKey: USER_KEYS.GET_USER,
		queryFn: USER_SERVICES.getUser,
	});
};

const useGetUserStats = () => {
	return useSuspenseQuery({
		queryKey: USER_KEYS.GET_USER_STATS,
		queryFn: USER_SERVICES.getUserStats,
	});
};

const useGetActiveUsers = () => {
	return useQuery({
		queryKey: USER_KEYS.GET_ACTIVE_USERS,
		queryFn: USER_SERVICES.getActiveUsers,
    staleTime: Infinity
	});
};

export { useGetUser, useGetUserStats, useGetActiveUsers };
