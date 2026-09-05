import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			gcTime: 5 * 60 * 1000,
			retry: 2,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false,
		},
    mutations: {
      gcTime: 5 * 60 * 1000,
      retry: 3,
    }
	},
});

export default queryClient