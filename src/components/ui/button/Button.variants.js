import { cva } from "class-variance-authority";
import styles from "./Button.module.css"

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      contained: styles.contained,
      outlined: styles.outlined,
      text: styles.text,
      soft: styles.soft,
    },
    color: {
      primary: styles.primary,
      danger: styles.danger,
      normal: styles.normal
    },
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large
    },
    fullWidth: {
      true: styles.full_width
    }
  },
  compoundVariants: [{variant: "outlined", color: "normal", className: styles.normalBtn}],
  defaultVariants: {
    variant: "contained",
    color: "primary",
    size: "medium"
  }
})

export default buttonVariants