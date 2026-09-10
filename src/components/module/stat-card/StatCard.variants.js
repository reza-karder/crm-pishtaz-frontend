import { cva } from "class-variance-authority";
import styles from "./StatCard.module.css";

const statCardVariants = cva(styles.card, {
	variants: {
		color: {
			primary: styles.primary,
			success: styles.success,
			danger: styles.danger,
			warning: styles.warning,
			normal: styles.normal,
		},
	},
	defaultVariants: {
		color: "primary",
	},
});

export default statCardVariants;
