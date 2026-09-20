import { cva } from "class-variance-authority";
import styles from "./Rating.module.css";

const RatingVariants = cva(styles.stars, {
  variants: {
    size: {
      small: styles.small,
      medium: styles.medium
    }
  },
  defaultVariants: {
    size: "medium"
  }
})

export default RatingVariants