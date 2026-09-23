import clsx from "clsx";
import styles from "./JobsList.module.css";
import { useAdminGetJobs } from "../../../../api/jobs/queries";
import JobItem from "./job-item/JobItem";
import Pagination from "../../../ui/pagination/Pagination";

function JobsList({ jobsParams }) {
	const { params, updateParams } = jobsParams;
	const { data } = useAdminGetJobs();
	const { jobs, totalJobs, totalPages, limit } = data || {};

	const jobsDisplayStartRange = (params.page - 1) * limit + Math.min(1, totalJobs);
	const jobsDisplayEndRange = Math.min(jobsDisplayStartRange + limit - 1, totalJobs);

	return (
		<section className={clsx("paper", styles.section)}>
			<ul className={styles.jobs_list}>
				{jobs?.map((job) => (
					<JobItem key={job._id} job={job} params={params} />
				))}
			</ul>
			<div className={styles.pagination}>
				<p className={styles.pagination__count}>
					نمایش {jobsDisplayStartRange} تا {jobsDisplayEndRange} از {totalJobs} شغل
				</p>
				<Pagination
					currentPage={Number(params.page)}
					totalPages={totalPages}
					onChange={(value) => updateParams({ page: value })}
				/>
			</div>
		</section>
	);
}

export default JobsList;
