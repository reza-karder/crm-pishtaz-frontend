import clsx from "clsx";
import styles from "./Input.module.css";

function Input({ className, error, ...props }) {
	return <input className={clsx(styles.input, className, error && styles.error)} {...props} />;
}

export default Input;
