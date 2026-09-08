import clsx from "clsx";
import styles from "./Input.module.css";

function Input({ className, error, Icon, ...props }) {
	if (Icon) {
		return (
			<div className={styles.wrapper}>
				<input
					className={clsx(styles.input, styles.iconed, className, error && styles.error)}
					{...props}
				/>
				<Icon className={styles.icon} />
			</div>
		);
	}

	return <input className={clsx(styles.input, className, error && styles.error)} {...props} />;
}

export default Input;
