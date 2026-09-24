import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import JOB_KEYS from "./keys";
import JOB_SERVICES from "./services";

const useGetJobs = () => {
	return useQuery({
		queryKey: JOB_KEYS.GET_JOBS,
		queryFn: JOB_SERVICES.getJobs,
		refetchOnMount: false,
		meta: { silent: true },
	});
};

const useGetJobOptions = () => {
	return useQuery({
		queryKey: JOB_KEYS.GET_JOBS,
		queryFn: JOB_SERVICES.getJobs,
		refetchOnMount: false,
		meta: { silent: true },
		select: (data) =>
			data?.jobs.map((job) => ({
				label: job?.title,
				value: job._id,
			})),
	});
};

const useAdminGetJobs = (params) => {
	return useSuspenseQuery({
		queryKey: JOB_KEYS.GET_ADMIN_JOBS(params),
		queryFn: () => JOB_SERVICES.getAdminJobs(params),
	});
};

export { useGetJobs, useGetJobOptions, useAdminGetJobs };
