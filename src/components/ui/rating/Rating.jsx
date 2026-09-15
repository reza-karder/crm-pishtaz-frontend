import styles from "./Rating.module.css";
import StarFilltIcon from "../../../assets/icons/star-fill.svg?react";
import StarOutlinetIcon from "../../../assets/icons/star-outline.svg?react";
import clsx from "clsx";

function Rating({ value, onChange, readOnly }) {
	const handleChange = (index) => {
		if (!readOnly) onChange(index + 1);
	};

	return (
		<div className={styles.stars}>
			{Array.from({ length: 5 }).map((_, index) => (
				<button
					key={index}
          type="button"
					onClick={() => handleChange(index)}
					className={clsx(styles.star, readOnly && styles.read_only)}
				>
					{index < value ? (
						<StarFilltIcon className={styles.icon_fill} />
					) : (
						<StarOutlinetIcon className={styles.icon_outline} />
					)}
				</button>
			))}
		</div>
	);
}

export default Rating;
