import { Link } from "react-router";
import styles from "./CallCard.module.css";
import Badge from "../../../ui/badge/Badge";
import { callStatusesColor, callStatusesLabel } from "../../../../constants/callStatus";
import IconBtn from "../../../ui/icon-btn/IconBtn";
import PenIcon from "../.../../../../../assets/icons/pen.svg?react";
import TrashIcon from "../.../../../../../assets/icons/trash.svg?react";
import NoteIcon from "../.../../../../../assets/icons/note.svg?react";
import clsx from "clsx";

function CallCard({ call }) {
	const { customer, status, notes } = call;

	return (
		<li className={clsx("paper", styles.call)}>
			<div className={styles.call__header}>
				<div className={styles.call__info}>
					<Link to={`/customers/${customer._id}`}>{customer.name}</Link>
					<Badge color={callStatusesColor[status]}>{callStatusesLabel[status]}</Badge>
				</div>

				<div className={styles.call__actions}>
					<IconBtn>
						<PenIcon />
					</IconBtn>
					<IconBtn color="danger">
						<TrashIcon />
					</IconBtn>
				</div>
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
