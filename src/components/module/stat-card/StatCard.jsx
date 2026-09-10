import styles from "./StatCard.module.css";
import statCardVariants from "./StatCard.variants";

function StatCard({ color, className, Icon, title, value }) {
	return (
		<div className={statCardVariants({ color, className })}>
			<div className={styles.card__icon}>
				<Icon />
			</div>
			<div>
				<p className={styles.card__title}>{title}</p>
				<p className={styles.card__value}>{value}</p>
			</div>
		</div>
	);
}

export default StatCard;
