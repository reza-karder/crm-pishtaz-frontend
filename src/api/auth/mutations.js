import { useMutation } from "@tanstack/react-query";
import AUTH_KEYS from "./keys";
import AUTH_SERVICES from "./services";

const useSignin = () => {
	return useMutation({
		mutationKey: AUTH_KEYS.SIGN_IN,
		mutationFn: AUTH_SERVICES.signin,
    retry: false,
	});
};

export { useSignin };