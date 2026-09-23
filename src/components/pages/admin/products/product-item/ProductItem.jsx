import styles from "./ProductItem.module.css";
import PenIcon from "../../../../../assets/icons/pen.svg?react";
import TrashIcon from "../../../../../assets/icons/trash.svg?react";
import IconBtn from "../../../../ui/icon-btn/IconBtn";
import useToggle from "../../../../../hooks/useToggle";
import ProductModal from "./ProductModal";

function ProductItem({ product, params }) {
	const { title } = product;
	const [isProductModalOpen, toggleIsProductModalOpen] = useToggle(false);

	return (
		<li className={styles.product}>
			<p className={styles.product__title}>{title}</p>
			<div className={styles.product__actions}>
				<IconBtn onClick={toggleIsProductModalOpen}>
					<PenIcon />
				</IconBtn>
				<IconBtn color="danger">
					<TrashIcon />
				</IconBtn>
			</div>

			{isProductModalOpen && (
				<ProductModal
					isOpen={isProductModalOpen}
					onClose={toggleIsProductModalOpen}
					product={product}
          params={params}
				/>
			)}
		</li>
	);
}

export default ProductItem;
