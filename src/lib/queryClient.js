import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

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
    },
	},
  // if there is not need to toast the error just pass the slient: true to meta object
  queryCache: new QueryCache({
    onError: (error, query) => {
      if(!query.meta?.silent) {
        toast.error(error.message)
      }
    }
  }),
  mutationCache: new MutationCache({
    onError: (error, _variables, _context, mutation) => {
      if(!mutation.meta?.silent) {
        toast.error(error.message)
      }
    }
  })
});

export default queryClient