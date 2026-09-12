import clsx from "clsx";
import styles from "./Select.module.css";

/**
 * @param {Object[]} options
 * @param {label} options[].label - label to show
 * @param {value} options[].id - option value
 */
function Select({ options, defaultOption, className, ...props }) {
	return (
		<select className={clsx(styles.select, className)} {...props}>
			{options.map((option) => (
				<option value={option.value} key={option.value} selected={option.value === defaultOption}>
					{option.label}
				</option>
			))}
		</select>
	);
}

export default Select;
