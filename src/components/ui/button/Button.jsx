import buttonVariants from "./Button.variants";
import styles from "./Button.module.css";
import { ClipLoader } from "react-spinners";

function Button({
  Component = "button",
	variant,
	color,
	size,
	className,
	children,
	IconStart,
	IconEnd,
	fullWidth,
	disabled,
	loading,
	...props
}) {
	return (
		<Component
			className={buttonVariants({ variant, color, size, fullWidth, className })}
			disabled={disabled || loading}
			{...props}
		>
			{loading ? (
				<ClipLoader color="#FFFF" size={20}  />
			) : (
				<>
					{IconStart && <IconStart className={styles.icon} />}
					{children}
					{IconEnd && <IconEnd className={styles.icon} />}
				</>
			)}
		</Component>
	);
}

export default Button;
