import styles from "./StatusSwitch.module.css";
import CheckIcon from "../../../../../assets/icons/check.svg?react";
import SnowIcon from "../../../../../assets/icons/snow.svg?react";
import clsx from "clsx";

function StatusSwitch() {
	return (
		<button className={clsx(styles.switch, styles.active)}>
			<div className={clsx(styles.switch__status, styles.active_status)}>
				<CheckIcon className={styles.status__icon} />
				<span className={styles.status__label}>فعال</span>
			</div>
			<div className={clsx(styles.switch__status, styles.cold_status)}>
				<SnowIcon className={styles.status__icon} />
				<span className={styles.status__label}>غیر فعال</span>
			</div>
		</button>
	);
}

export default StatusSwitch;
