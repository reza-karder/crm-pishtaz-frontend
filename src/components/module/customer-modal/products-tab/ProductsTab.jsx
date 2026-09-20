import ProductModal from "../products-tab/ProductModal";
import SubList from "../sub-list/SubList";
import BoxIcon from "../../../../assets/icons/box.svg?react";
import SubItem from "../sub-list/SubItem";
import useToggle from "../../../../hooks/useToggle";
import Badge from "../../../ui/badge/Badge";
import Rating from "../../../ui/rating/Rating";
import { useGetProducts } from "../../../../api/products/queries";
import { useState } from "react";

function getTitle(products = [], productId) {
	const foundProduct = products.find((product) => product._id === productId);
	return foundProduct?.title;
}

function ProductsTab({ customerForm }) {
	const { addProduct, editProduct, deleteProduct, values } = customerForm;

	const { data } = useGetProducts();
	const [editingProduct, setEditingProduct] = useState(null);
	const [isModalOpen, toggleIsModalOpen] = useToggle(false);

	const openEditModal = (product) => {
		setEditingProduct(product);
		toggleIsModalOpen();
	};

	const openAddModal = () => {
		setEditingProduct(null);
		toggleIsModalOpen();
	};
  console.log({values});
	return (
		<div>
			<SubList title="محصولات" Icon={BoxIcon} onAdd={openAddModal}>
				{values.products.map((product) => (
					<ProductItem
						key={product.key}
						product={product}
						onEdit={() => openEditModal(product)}
						onDelete={() => deleteProduct(product.key)}
						title={getTitle(data?.products, product.product)}
					/>
				))}
			</SubList>

			{isModalOpen && (
				<ProductModal
					isOpen={isModalOpen}
					products={data?.products}
					initialValues={editingProduct}
					onClose={toggleIsModalOpen}
					onAdd={addProduct}
					onEdit={editProduct}
				/>
			)}
		</div>
	);
}

function ProductItem({ title, onEdit, onDelete, product }) {
	return (
		<SubItem title={title} onEdit={onEdit} onDelete={onDelete}>
			{product.type === "purchased" ? (
				<Badge color="success">
					خریداری شده {product.price && ` - ${product.price.toLocaleString()} ریال`}
					{product.quantity && ` - ${product.quantity} تعداد`}
				</Badge>
			) : (
				<Rating value={product.intentionScore} readOnly />
			)}
		</SubItem>
	);
}

export default ProductsTab;
