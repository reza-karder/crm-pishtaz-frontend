import IconBtn from "../../../../ui/icon-btn/IconBtn";
import styles from "./JobItem.module.css";
import PenIcon from "../../../../../assets/icons/pen.svg?react";
import TrashIcon from "../../../../../assets/icons/trash.svg?react";
import useToggle from "../../../../../hooks/useToggle";
import JobModal from "./JobModal";

function JobItem({ job, params }) {
	const { title } = job;
	const [isJobModalOpen, toggleIsJobModalOpen] = useToggle(false);

	return (
		<li className={styles.job}>
			<p className={styles.job__title}>{title}</p>
			<div className={styles.job__actions}>
				<IconBtn onClick={toggleIsJobModalOpen}>
					<PenIcon />
				</IconBtn>
				<IconBtn color="danger">
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
		</li>
	);
}

export default JobItem;
