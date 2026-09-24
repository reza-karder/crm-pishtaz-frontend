import { useMutation } from "@tanstack/react-query";
import JOB_SERVICES from "./services";
import JOB_KEYS from "./keys";

const useCreateJob = () => {
	return useMutation({
		mutationFn: JOB_SERVICES.createJob,
		mutationKey: JOB_KEYS.CREATE_JOB,
	});
};

const useEditJob = () => {
	return useMutation({
		mutationFn: JOB_SERVICES.editJob,
		mutationKey: JOB_KEYS.EDIT_JOB,
	});
};

const useDeleteJob = () => {
	return useMutation({
		mutationFn: JOB_SERVICES.deleteJob,
		mutationKey: JOB_KEYS.DELETE_JOB,
	});
};


export { useCreateJob, useEditJob, useDeleteJob };
