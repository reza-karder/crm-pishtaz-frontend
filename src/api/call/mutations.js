import { useMutation } from "@tanstack/react-query";
import CALL_SERVICES from "./services";
import CALL_KEYS from "./keys";

const useEditCall = () => {
	return useMutation({
		mutationFn: CALL_SERVICES.editCall,
		mutationKey: CALL_KEYS.EDIT_CALL,
	});
};

const useDeleteCall = () => {
	return useMutation({
		mutationFn: CALL_SERVICES.deleteCall,
		mutationKey: CALL_KEYS.DELETE_CALL,
	});
};

export { useEditCall, useDeleteCall };
