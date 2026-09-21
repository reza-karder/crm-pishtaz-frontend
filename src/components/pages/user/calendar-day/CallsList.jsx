import EmptyState from "../../../common/empty-state/EmptyState";
import CallCard from "./CallCard";
import styles from "./CallsList.module.css";

function CallsList({ calls }) {
	if (!calls?.length) {
		return (
			<EmptyState
				className={styles.empty_state}
				title="تماسی یافت نشد"
				subtitle="تماسی با این مشخصات برای امروز ثبت نشده"
			/>
		);
	}

	return (
		<ul className={styles.calls_list}>
			{calls.map((call) => (
				<CallCard key={call._id} call={call} />
			))}
		</ul>
	);
}

export default CallsList;
