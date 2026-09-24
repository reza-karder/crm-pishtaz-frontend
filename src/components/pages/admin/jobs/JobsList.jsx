import clsx from "clsx";
import styles from "./JobsList.module.css";
import { useAdminGetJobs } from "../../../../api/jobs/queries";
import JobItem from "./job-item/JobItem";
import Pagination from "../../../ui/pagination/Pagination";
import EmptyState from "../../../common/empty-state/EmptyState";

function JobsList({ jobsParams }) {
	const { params, updateParams } = jobsParams;
	const { data } = useAdminGetJobs(new URLSearchParams(params).toString());
	const { jobs, totalJobs, totalPages, limit } = data || {};

	const jobsDisplayStartRange = (params.page - 1) * limit + Math.min(1, totalJobs);
	const jobsDisplayEndRange = Math.min(jobsDisplayStartRange + limit - 1, totalJobs);

	if (!jobs.length) {
		return (
			<section className={clsx("paper", styles.section)}>
				<EmptyState title="شغلی وجود ندارد" subtitle="هنوز شغلی در سامانه ثبت نشده است" />
			</section>
		);
	}

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
