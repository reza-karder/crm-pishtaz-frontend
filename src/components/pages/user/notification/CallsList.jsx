import clsx from "clsx";
import styles from "./CallsList.module.css";
import CallCard from "./CallCard";
import EmptyState from "../../../common/empty-state/EmptyState";

function CallsList({ calls, title }) {
	return (
		<section className={clsx("paper", styles.calls_section)}>
			<p className="paper__title">{title}</p>
			<ul className={styles.calls_list}>
				{calls?.length ? (
					calls.map((call) => <CallCard key={call._id} call={call} />)
				) : (
					<EmptyState className={styles.empty_state} title="تماسی برای نمایش وجود ندارد" />
				)}
			</ul>
		</section>
	);
}

export default CallsList;
