import { useState } from "react";
import useCustomForm from "../../../../hooks/useCustomForm";
import { customerProductSchema } from "../../../../utils/validators";
import Button from "../../../ui/button/Button";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../../../ui/modal/Modal";
import ProductForm from "./ProductForm";

const INITIAL_FORM_DATA = {
	type: "",
	product: "",
	intentionScore: 3,
	price: "",
	quantity: "",
};

const normalizeProduct = (productData) => {
	const { product, price, quantity, type, intentionScore, key } = productData;

	if (type === "purchased") {
		return {
			product,
			quantity,
			type,
      ...(key && { key }),
			...(price && { price }),
		};
	} else {
		return {
			product,
			quantity,
			type,
			intentionScore,
      ...(key && { key }),
		};
	}
};

function ProductModal({ isOpen, onClose, products = [], initialValues, onAdd, onEdit }) {
	const isEditing = Boolean(initialValues);
	const [activeTabId, setActiveTabId] = useState(initialValues?.type || "purchased");
	const title = isEditing ? "ویرایش محصول" : "افزودن محصول";

	const handleSubmit = (productData) => {
		const product = normalizeProduct({
			...productData,
			type: activeTabId, // activeTabId is same as product types
		});

		if (isEditing) {
			onEdit(product.key, product);
		} else {
			onAdd(product);
		}
		onClose();
	};

	const productForm = useCustomForm(
		initialValues || INITIAL_FORM_DATA,
		customerProductSchema,
		handleSubmit
	);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalHeader
				title={title}
				subTitle="محصول خریداری‌شده یا محصول مورد علاقه مشتری"
				onClose={onClose}
			/>
			<ModalBody>
				<ProductForm
					onSubmit={handleSubmit}
					productForm={productForm}
					activeTabId={activeTabId}
					setActiveTabId={setActiveTabId}
					products={products}
				/>
			</ModalBody>
			<ModalFooter>
				<Button type="button" onClick={productForm.onSubmit}>
					ذخیره
				</Button>
				<Button variant="outlined" onClick={onClose}>
					انصراف
				</Button>
			</ModalFooter>
		</Modal>
	);
}

export default ProductModal;
