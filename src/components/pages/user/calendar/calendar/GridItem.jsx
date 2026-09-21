import { Link } from "react-router";
import styles from "./GridItem.module.css";
import clsx from "clsx";
import Badge from "../../../../ui/badge/Badge";

function GridItem({ to, day, callsCount, isToday }) {
	const className = clsx(styles.grid__item, callsCount && styles.active, isToday && styles.today);

	return (
		<Link to={to} className={className}>
			<p className={styles.grid__date}> {day} </p>
			{isToday && <span className={styles.today_mark}></span>}
			{Boolean(callsCount) && (
				<Badge className={styles.grid__calls_count}> {callsCount} تماس </Badge>
			)}
		</Link>
	);
}

export default GridItem;
