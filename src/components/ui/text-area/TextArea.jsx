import clsx from "clsx";
import styles from "./TextArea.module.css";
import { useEffect, useRef } from "react";

function TextArea({ className, value, error, ...props }) {
	const textareaRef = useRef(null);

	useEffect(() => {
    const element = textareaRef.current
    element.style.height = `${element.scrollHeight}px`
  }, [value]);

	return (
		<textarea
			value={value}
			ref={textareaRef}
			className={clsx(styles.text_area, className, error && styles.error)}
			{...props}
		/>
	);
}

export default TextArea;
