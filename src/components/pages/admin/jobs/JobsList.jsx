import clsx from "clsx";
import styles from "./JobsList.module.css";
import { useAdminGetJobs } from "../../../../api/jobs/queries";
import JobItem from "./job-item/JobItem";
import EmptyState from "../../../common/empty-state/EmptyState";
import CounterPagination from "../../../module/counter-pagination/CounterPagination";

function JobsList({ jobsParams }) {
	const { params, updateParams } = jobsParams;
	const { data } = useAdminGetJobs(new URLSearchParams(params).toString());
	const { jobs, totalJobs, totalPages, limit } = data || {};

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
			<CounterPagination
				label="شغل"
        limit={limit}
				totalCount={totalJobs}
				totalPages={totalPages}
				currentPage={params.page}
				onChange={(page) => updateParams({ page })}
			/>
		</section>
	);
}

export default JobsList;
