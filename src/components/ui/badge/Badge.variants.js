import { cva } from "class-variance-authority";
import styles from "./Badge.module.css"

const badgeVariants = cva(styles.badge, {
  variants: {
    color: {
      mute: styles.mute,
      success: styles.success,
      danger: styles.danger,
      warning: styles.warning,
      primary: styles.primary,
    }
  },
  defaultVariants: {
    color: "primary"
  }
})

export default badgeVariants