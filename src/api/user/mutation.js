import { useMutation } from "@tanstack/react-query";
import USER_KEYS from "./keys";
import USER_SERVICES from "./services";

const useEditUser = () => {
	return useMutation({
		mutationKey: USER_KEYS.EDIT_USER,
		mutationFn: USER_SERVICES.editUser,
	});
};

const useChangeUserPassword = () => {
	return useMutation({
		mutationFn: USER_SERVICES.changeUserPassword,
		mutationKey: USER_KEYS.CHANGE_USER_PASSWORD,
	});
};

const useCreateEmployee = () => {
	return useMutation({
		mutationFn: USER_SERVICES.createEmployee,
		mutationKey: USER_KEYS.CREATE_EMPLOYEE,
	});
};

const useEditEmployee = () => {
	return useMutation({
		mutationFn: USER_SERVICES.editEmployee,
		mutationKey: USER_KEYS.EDIT_EMPLOYEE,
	});
};

export { useEditUser, useChangeUserPassword, useCreateEmployee, useEditEmployee };
