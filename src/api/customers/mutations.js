import { useMutation } from "@tanstack/react-query";
import CUSTOMER_SERVICES from "./services";
import CUSTOMER_KEYS from "./keys";

const useCreateCustomer = () => {
	return useMutation({
		mutationFn: CUSTOMER_SERVICES.createCustomer,
		mutationKey: CUSTOMER_KEYS.CREATE_CUSTOMER,
	});
};

const useEditCustomer = () => {
	return useMutation({
		mutationFn: CUSTOMER_SERVICES.editCustomer,
		mutationKey: CUSTOMER_KEYS.EDIT_CUSTOMER,
	});
};

const useDeleteManyCustomers = () => {
	return useMutation({
		mutationFn: CUSTOMER_SERVICES.deleteManyCustomers,
		mutationKey: CUSTOMER_KEYS.DELETE_MANY_CUSTOMERS,
	});
};

const useDeleteCustomer = () => {
	return useMutation({
		mutationFn: CUSTOMER_SERVICES.deleteCustomer,
		mutationKey: CUSTOMER_KEYS.DELETE_CUSTOMER,
	});
};

const useTransferCustomer = () => {
	return useMutation({
		mutationFn: CUSTOMER_SERVICES.transferCustomer,
		mutationKey: CUSTOMER_KEYS.TRANSFER_CUSTOMER,
	});
};

export {
	useCreateCustomer,
	useEditCustomer,
	useDeleteManyCustomers,
	useDeleteCustomer,
	useTransferCustomer,
};
