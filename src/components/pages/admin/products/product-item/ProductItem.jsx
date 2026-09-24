import styles from "./ProductItem.module.css";
import PenIcon from "../../../../../assets/icons/pen.svg?react";
import TrashIcon from "../../../../../assets/icons/trash.svg?react";
import IconBtn from "../../../../ui/icon-btn/IconBtn";
import useToggle from "../../../../../hooks/useToggle";
import ProductModal from "./ProductModal";
import DeleteModal from "../../../../ui/delete-modal/DeleteModal";
import { useDeleteProduct } from "../../../../../api/products/mutations";
import { toast } from "sonner";
import queryClient from "../../../../../lib/queryClient";
import PRODUCTS_KEYS from "../../../../../api/products/keys";

function ProductItem({ product, params }) {
	const { title, _id } = product;

	const [isProductModalOpen, toggleIsProductModalOpen] = useToggle(false);
	const [isDeleteModalOpen, toggleIsDeleteModalOpen] = useToggle(false);

	const { mutateAsync: mutateDeleteProduct, isPending } = useDeleteProduct();

	const deleteProduct = async () => {
		const response = await mutateDeleteProduct(_id);

		if (response.success) {
			toast.success(response.message);
			queryClient.invalidateQueries({
				queryKey: PRODUCTS_KEYS.GET_ADMIN_PRODUCTS(new URLSearchParams(params).toString()),
			});
      toggleIsDeleteModalOpen()
		}
	};

	return (
		<li className={styles.product}>
			<p className={styles.product__title}>{title}</p>
			<div className={styles.product__actions}>
				<IconBtn onClick={toggleIsProductModalOpen}>
					<PenIcon />
				</IconBtn>
				<IconBtn color="danger" onClick={toggleIsDeleteModalOpen}>
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

			{isDeleteModalOpen && (
				<DeleteModal
					isOpen={isDeleteModalOpen}
					onClose={toggleIsDeleteModalOpen}
					title="حذف محصول"
					subTitle="آیا از حذف این محصول مطمئن هستید؟"
					messageTilte="حذف محصول بازگشت ناپذیر خواهد بود"
					message="با حذف این محصول تمام مشتریان دارای این محصول فاقد محصول خواهند شد"
					onConfirm={deleteProduct}
					loading={isPending}
				/>
			)}
		</li>
	);
}

export default ProductItem;
