import buttonVariants from "./Button.variants";
import styles from "./Button.module.css"

function Button({ variant, color, size, className, children, Icon, ...props }) {
	return (
		<button className={buttonVariants({ variant, color, size, className })} {...props}>
			{Icon && <Icon className={styles.icon} />}
			{children}
		</button>
	);
}

export default Button;
