import { Link } from "react-router";
import styles from "./CallCard.module.css";
import Badge from "../../../ui/badge/Badge";
import { CALL_STATUS_COLORS, CALL_STATUS_LABELS } from "../../../../constants/callStatus";
import LinkButton from "../../../ui/button/LinkButton";
import { toUTCDateString } from "../../../../utils/calendar";
import ArrowIcon from "../../../../assets/icons/arrow-left.svg?react";
import Note from "../../../module/note/Note";

function CallCard({ call }) {
	const { status, customer, date, notes } = call;
	return (
		<li className={styles.call}>
			<div className={styles.call__header}>
				<div className={styles.header__info}>
					<Link to={`/customers/${customer._id}`} className={styles.info__name}>
						{customer.name}
					</Link>
					<Badge color={CALL_STATUS_COLORS[status]}>{CALL_STATUS_LABELS[status]}</Badge>
					<p className={styles.info__date}>{new Date(date).toLocaleDateString("fa-IR")}</p>
				</div>

				<LinkButton
					to={`/calendar/${toUTCDateString(date)}`}
					variant="text"
					IconEnd={ArrowIcon}
					size="small"
				>
					تقویم
				</LinkButton>
			</div>
			<Note note={notes} />
		</li>
	);
}

export default CallCard;
