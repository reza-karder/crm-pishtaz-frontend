import clsx from "clsx";
import styles from "./Select.module.css";

/**
 * @param {Object[]} options
 * @param {label} options[].label - label to show
 * @param {value} options[].id - option value
 */
function Select({ options, className, value, error, ...props }) {
	return (
		<select
			className={clsx(styles.select, className, error && styles.error)}
			value={value || "none"}
			{...props}
		>
			<option value="none" disabled selected>
				انتخاب کنید
			</option>
			{options.map((option) => (
				<option value={option.value} key={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
}

export default Select;
