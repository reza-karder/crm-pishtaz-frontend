import BackLink from "../../../common/back-link/BackLink";
import Skeleton from "../../../common/skeleton/Skeleton";
import styles from "./Loading.module.css";

function Loading() {
	return (
		<div>
			<BackLink to="/customers">بازگشت به مشتریان</BackLink>
			<div className={styles.avatar}>
				<Skeleton height={56} width={56} />
				<div>
					<Skeleton height={25} width={130} />
					<Skeleton height={18} width={110} className={styles.avatar__date} />
				</div>
			</div>

			<div className={styles.actions}>
				<Skeleton className={styles.actions__status} />
				<Skeleton className={styles.actions__basic} />
			</div>
			<div className={styles.wrapper}>
				<Skeleton className={styles.info} />
				<Skeleton className={styles.details} />
			</div>
		</div>
	);
}

export default Loading;
