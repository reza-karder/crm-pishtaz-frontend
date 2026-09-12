import Skeleton from "../../../common/skeleton/Skeleton";
import styles from "./PageLoading.module.css";
import QuickAccess from "./QuickAccess";

function PageLoading() {
	return (
		<>
			<Skeleton height={60} />
			<section className={styles.stats_sec}>
				<Skeleton height={86} />
				<Skeleton height={86} />
			</section>
			<div className={styles.wrapper}>
				<Skeleton className={styles.chart} />
				<Skeleton className={styles.calls} />
			</div>
			<QuickAccess />
		</>
	);
}

export default PageLoading;
