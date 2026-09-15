import { useQuery } from "@tanstack/react-query";
import PRODUCTS_SERVICES from "./services";
import PRODUCTS_KEYS from "./keys";

const useGetProducts = () => {
	return useQuery({
		queryFn: PRODUCTS_SERVICES.getProducts,
		queryKey: PRODUCTS_KEYS.GET_PRODUCTS,
    staleTime: Infinity,
    meta: { silent: true }
	});
};

export { useGetProducts };
