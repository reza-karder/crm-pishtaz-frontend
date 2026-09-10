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

const useSignout = () => {
  return useMutation({
    mutationFn: AUTH_SERVICES.signout,
    mutationKey: AUTH_KEYS.SIGN_OUT
  })
}

export { useSignin, useSignout };