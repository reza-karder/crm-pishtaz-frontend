import { useMutation, useQuery, useSuspenseQuery } from "@tanstack/react-query";
import PRODUCTS_SERVICES from "./services";
import PRODUCTS_KEYS from "./keys";

const useGetProducts = () => {
	return useQuery({
		queryFn: PRODUCTS_SERVICES.getAllProducts,
		queryKey: PRODUCTS_KEYS.GET_ALL_PRODUCTS,
		refetchOnMount: false,
		meta: { silent: true },
	});
};

const useGetProductOptions = () => {
	return useQuery({
		queryFn: PRODUCTS_SERVICES.getAllProducts,
		queryKey: PRODUCTS_KEYS.GET_PRODUCTS,
		refetchOnMount: false,
		meta: { silent: true },
		select: (data) =>
			data?.products.map((product) => ({
				label: product.title,
				value: product._id,
			})),
	});
};

const useAdminGetProducts = (params) => {
	return useSuspenseQuery({
		queryFn: () => PRODUCTS_SERVICES.getAdminProducts(params),
		queryKey: PRODUCTS_KEYS.GET_ADMIN_PRODUCTS(params),
	});
};



export { useGetProducts, useGetProductOptions, useAdminGetProducts };
