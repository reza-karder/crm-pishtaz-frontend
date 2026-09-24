import { useMutation } from "@tanstack/react-query";
import PRODUCTS_SERVICES from "./services";
import PRODUCTS_KEYS from "./keys";

const useEditProduct = () => {
	return useMutation({
		mutationFn: PRODUCTS_SERVICES.editProduct,
		mutationKey: PRODUCTS_KEYS.EDIT_PRODUCT,
	});
};

const useCreateProduct = () => {
	return useMutation({
		mutationFn: PRODUCTS_SERVICES.createProduct,
		mutationKey: PRODUCTS_KEYS.CREATE_PRODUCT,
	});
};

const useDeleteProduct = () => {
	return useMutation({
		mutationFn: PRODUCTS_SERVICES.deleteProduct,
		mutationKey: PRODUCTS_KEYS.DELETE_PRODUCT,
	});
};

export { useEditProduct, useCreateProduct, useDeleteProduct };
