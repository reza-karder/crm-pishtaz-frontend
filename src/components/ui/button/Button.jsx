import buttonVariants from "./Button.variants";
import styles from "./Button.module.css"

function Button({ variant, color, size, className, children, IconStart, IconEnd, ...props }) {
	return (
		<button className={buttonVariants({ variant, color, size, className })} {...props}>
			{IconStart && <IconStart className={styles.icon} />}
			{children}
			{IconEnd && <IconEnd className={styles.icon} />}
		</button>
	);
}

export default Button;
