import clsx from "clsx";
import styles from "./ErrorState.module.css";
import WarningIcon from "../../../assets/icons/warning.svg?react";
import Button from "../../ui/button/Button";

function ErrorState({
	title = "مشکلی پیش اومد. لطفاً دوباره تلاش کنید.",
	subtitle = "درصورت برطرف نشدن مشکل پس از چند تلاش با مدیریت تماس گیرید",
	className,
}) {
	return (
		<div className={clsx(styles.wrapper, className)}>
			<WarningIcon className={styles.icon} />
			<p className={styles.title}>{title}</p>
			<p className={styles.subtitle}>{subtitle}</p>
			<Button color="danger" onClick={() => window.location.reload()}>
				تلاش مجدد
			</Button>
		</div>
	);
}

export default ErrorState;
