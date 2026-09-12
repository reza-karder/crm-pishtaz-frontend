import { Link } from "react-router";
import Badge from "../../../ui/badge/Badge";
import styles from "./CallsList.module.css";

function CallsList({ calls }) {
	return (
		<ul className={styles.calls_list}>
			{calls.slice(0, 3).map((call) => (
				<li className={styles.call_item}>
					<Link to={`/customers/${call.customer._id}`} className={styles.call__link}>
						<p className={styles.call__name}>{call.customer.name}</p>
						<Badge> زمان بندی شده </Badge>
					</Link>
				</li>
			))}
		</ul>
	);
}

export default CallsList;
