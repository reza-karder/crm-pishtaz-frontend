import { callStatusesColor, callStatusesLabel } from "../../../../../constants/callStatus";
import Badge from "../../../../ui/badge/Badge";
import styles from "./CallCard.module.css";
import NoteIcon from "../../../../../assets/icons/note.svg?react";

function CallCard({ call }) {
	const { status, date, notes } = call;

	return (
		<li className={styles.call}>
			<div className={styles.call__details}>
				<Badge color={callStatusesColor[status]}>{callStatusesLabel[status]}</Badge>
				<p className={styles.date}>{new Date(date).toLocaleDateString("fa-IR")}</p>
			</div>
			{notes && (
				<div className={styles.note_wrapper}>
					<div className={styles.note__header}>
						<NoteIcon className={styles.note__icon} />
						<p className={styles.note__title}>یادداشت تماس</p>
					</div>
					<p className={styles.note__text}>{notes}</p>
				</div>
			)}
		</li>
	);
}

export default CallCard;
