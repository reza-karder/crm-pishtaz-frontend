import Skeleton from "../../common/skeleton/Skeleton";
import styles from "./TableLoading.module.css";

function TableLoading() {
	return (
		<div className={styles.table}>
			<Skeleton height={45} className={styles.skeleton} />
			<Skeleton height={70} className={styles.skeleton} />
			<Skeleton height={70} className={styles.skeleton} />
			<Skeleton height={70} className={styles.skeleton} />
			<Skeleton height={70} className={styles.skeleton} />
			<Skeleton height={70} className={styles.skeleton} />
		</div>
	);
}

export default TableLoading;
