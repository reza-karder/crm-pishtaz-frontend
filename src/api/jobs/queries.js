import { useQuery } from "@tanstack/react-query";
import JOB_KEYS from "./keys";
import JOB_SERVICES from "./services";

const useGetJobs = () => {
	return useQuery({
		queryKey: JOB_KEYS.GET_JOBS,
		queryFn: JOB_SERVICES.getJobs,
		meta: { silent: true },
	});
};

export { useGetJobs };
