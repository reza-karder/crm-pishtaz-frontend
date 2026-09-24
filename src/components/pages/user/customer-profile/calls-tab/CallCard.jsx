import { CALL_STATUS_COLORS, CALL_STATUS_LABELS } from "../../../../../constants/callStatus";
import Badge from "../../../../ui/badge/Badge";
import styles from "./CallCard.module.css";
import Note from "../../../../module/note/Note";
import { toPersianDateString } from "../../../../../utils/utils";

function CallCard({ call }) {
	const { status, date, notes } = call;

	return (
		<li className={styles.call}>
			<div className={styles.call__details}>
				<Badge color={CALL_STATUS_COLORS[status]}>{CALL_STATUS_LABELS[status]}</Badge>
				<p className={styles.date}>{toPersianDateString(date)}</p>
			</div>
			<Note title="یادداشت تماس" note={notes} />
		</li>
	);
}

export default CallCard;
