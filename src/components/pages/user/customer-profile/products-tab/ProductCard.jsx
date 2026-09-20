import styles from "./ProductCard.module.css";
import BoxIcon from "../../../../../assets/icons/box.svg?react";
import HeartIcon from "../../../../../assets/icons/heart.svg?react";
import clsx from "clsx";
import Badge from "../../../../ui/badge/Badge";
import Rating from "../../../../ui/rating/Rating";

function ProductCard({ product }) {
	const { type, price, quantity, intentionScore } = product;
	const { title } = product.product;
  
	const isPurchased = Boolean(type === "purchased");

	return (
		<div className={clsx(styles.product, isPurchased ? styles.purchased : styles.potential)}>
			<div className={styles.product__info}>
				<span className={styles.info__icon}>{isPurchased ? <BoxIcon /> : <HeartIcon />}</span>
				<p className={styles.info__title}>{title}</p>
			</div>
			<div className={styles.product__details}>
				{isPurchased && price && <Badge color="success">{price.toLocaleString()} ریال</Badge>}
				{!isPurchased && <Rating size='small' value={intentionScore} readOnly />}
				<Badge color="mute">{quantity} تعداد</Badge>
			</div>
		</div>
	);
}

export default ProductCard;
