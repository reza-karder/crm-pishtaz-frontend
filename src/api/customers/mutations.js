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

export { useCreateCustomer, useEditCustomer };
