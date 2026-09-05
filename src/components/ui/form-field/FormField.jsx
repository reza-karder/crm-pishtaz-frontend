import clsx from "clsx";
import styles from "./FormField.module.css";

function FormField({ children, label, required, id, error, className }) {
	return (
		<div className={clsx(styles.form_field, className)} >
			{label && (
				<label htmlFor={id} className={styles.label}>
					{label} {required && <span>*</span>}
				</label>
			)}
			{children}
			{error && <p className={styles.error_message}>{error}</p>}
		</div>
	);
}

export default FormField;
