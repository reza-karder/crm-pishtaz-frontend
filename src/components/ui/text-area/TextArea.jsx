import clsx from "clsx";
import styles from "./TextArea.module.css";

function TextArea({ className, error, ...props }) {
	return <textarea className={clsx(styles.text_area, className, error && styles.error)} {...props} />;
}

export default TextArea;
