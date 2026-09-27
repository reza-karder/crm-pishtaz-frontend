import IconBtn from "../../../../ui/icon-btn/IconBtn";
import styles from "./JobItem.module.css";
import PenIcon from "../../../../../assets/icons/pen.svg?react";
import TrashIcon from "../../../../../assets/icons/trash.svg?react";
import useToggle from "../../../../../hooks/useToggle";
import JobModal from "./JobModal";
import DeleteModal from "../../../../ui/delete-modal/DeleteModal";
import { useDeleteJob } from "../../../../../api/jobs/mutations";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import JOB_KEYS from "../../../../../api/jobs/keys";
import { stringifyParams } from "../../../../../utils/utils";
import { useSearchParams } from "react-router";

function JobItem({ job, params }) {
	const { title, _id } = job;

	const [isJobModalOpen, toggleIsJobModalOpen] = useToggle(false);
	const [isDeleteModalOpen, toggleIsDeleteModalOpen] = useToggle(false);
  const [searchParams, setSearchParams] = useSearchParams()

	const queryClient = useQueryClient();
	const { mutateAsync: mutateDeleteJob, isPending } = useDeleteJob();

	const deleteJob = async () => {
		const response = await mutateDeleteJob(_id);

		if (response.success) {
			toast.success(response.message);
			queryClient.invalidateQueries({
				queryKey: JOB_KEYS.GET_ADMIN_JOBS(stringifyParams(params)),
			});
      setSearchParams({})
      toggleIsDeleteModalOpen()
		}
	};

	return (
		<li className={styles.job}>
			<p className={styles.job__title}>{title}</p>
			<div className={styles.job__actions}>
				<IconBtn onClick={toggleIsJobModalOpen}>
					<PenIcon />
				</IconBtn>
				<IconBtn color="danger" onClick={toggleIsDeleteModalOpen}>
					<TrashIcon />
				</IconBtn>
			</div>

			{isJobModalOpen && (
				<JobModal
					params={params}
					isOpen={isJobModalOpen}
					onClose={toggleIsJobModalOpen}
					job={job}
				/>
			)}

			{isDeleteModalOpen && (
				<DeleteModal
					isOpen={isDeleteModalOpen}
					onClose={toggleIsDeleteModalOpen}
					title="حذف شغل"
					subTitle="آیا از حذف این شغل مطمئن هستید؟"
					messageTilte="حذف شغل بازگشت ناپذیر خواهد بود"
					message="با حذف این شغل تمام مشتریان دارای این شغل فاقد شغل خواهند شد"
					onConfirm={deleteJob}
					loading={isPending}
				/>
			)}
		</li>
	);
}

export default JobItem;
