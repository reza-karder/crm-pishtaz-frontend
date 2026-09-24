import styles from "./ProductCard.module.css";
import clsx from "clsx";
import Badge from "../../../../ui/badge/Badge";
import Rating from "../../../../ui/rating/Rating";

function ProductCard({ product }) {
	const { type, price, quantity, intentionScore } = product;
	const { title } = product.product || {};
  
	const isPurchased = Boolean(type === "purchased");

	return (
		<div className={clsx(styles.product, isPurchased ? styles.purchased : styles.potential)}>
			<div className={styles.product__info}>
				<p className={styles.info__title}>{title}</p>
				<Badge color="primary">{quantity} تعداد</Badge>
			</div>
			<div className={styles.product__details}>
				{isPurchased && price && <Badge color="mute">{price.toLocaleString()} ریال</Badge>}
				{!isPurchased && <Rating size='small' value={intentionScore} readOnly />}
			</div>
		</div>
	);
}

export default ProductCard;
