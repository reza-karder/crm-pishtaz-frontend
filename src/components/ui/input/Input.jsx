import clsx from "clsx";
import styles from "./Input.module.css";

function Input({ className, error, StartIcon, EndIcon, ...props }) {
	if (StartIcon || EndIcon) {
		const inputClassName = clsx(
			styles.input,
			className,
			error && styles.error,
			StartIcon && styles.start_icon,
			EndIcon && styles.end_icon
		);

		return (
			<div className={styles.wrapper}>
				<input className={inputClassName} {...props} />
				{StartIcon && <StartIcon className={clsx(styles.icon, styles.start_icon)} />}
				{EndIcon && <EndIcon className={clsx(styles.icon, styles.end_icon)} />}
			</div>
		);
	}

	return <input className={clsx(styles.input, className, error && styles.error)} {...props} />;
}

export default Input;
