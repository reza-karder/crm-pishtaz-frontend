import clsx from "clsx";
import styles from "./Input.module.css";

// use adornments for components rendering like iconBtn. use icon for svg icons.
function Input({ className, error, StartIcon, EndIcon, endAdornment, startAdornment, ...props }) {
	if (StartIcon || EndIcon || endAdornment || startAdornment) {
		const inputClassName = clsx(
			styles.input,
			className,
			error && styles.error,
			StartIcon && styles.start_icon,
			EndIcon && styles.end_icon,
			endAdornment && styles.end_adornment,
			startAdornment && styles.start_adornment
		);

		return (
			<div className={styles.wrapper}>
				<input className={inputClassName} {...props} />
				{StartIcon && <StartIcon className={clsx(styles.icon, styles.start_icon)} />}
				{EndIcon && <EndIcon className={clsx(styles.icon, styles.end_icon)} />}
				{endAdornment && <div className={clsx(styles.end_adornment, styles.adornment)}>{endAdornment}</div>}
				{startAdornment && <div className={clsx(styles.start_adornment, styles.adornment)}>{startAdornment}</div>}
			</div>
		);
	}

	return <input className={clsx(styles.input, className, error && styles.error)} {...props} />;
}

export default Input;
