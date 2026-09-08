import { cva } from "class-variance-authority";
import styles from "./IconBtn.module.css"

const iconBtnVariants = cva(styles.iconBtn, {
  variants: {
    color: {
      danger: styles.danger,
      success: styles.success,
      normal: styles.normal
    }
  },
  defaultVariants: {
    color: "normal"
  }
})

export default iconBtnVariants