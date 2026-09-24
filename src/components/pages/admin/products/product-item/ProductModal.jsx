import { toast } from "sonner";
import { useCreateProduct, useEditProduct } from "../../../../../api/products/mutations";
import useCustomForm from "../../../../../hooks/useCustomForm";
import { productFormSchema } from "../../../../../utils/validators";
import Button from "../../../../ui/button/Button";
import FormField from "../../../../ui/form-field/FormField";
import Input from "../../../../ui/input/Input";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../../../../ui/modal/Modal";
import { useQueryClient } from "@tanstack/react-query";
import PRODUCTS_KEYS from "../../../../../api/products/keys";

function ProductModal({ isOpen, onClose, product, params }) {
	const isEditing = Boolean(product);

	const queryClient = useQueryClient();
	const { mutateAsync: mutateEditProduct, isPending: isPendingEdit } = useEditProduct();
	const { mutateAsync: mutateCreateProduct, isPending: isPendingCreate } = useCreateProduct();

	const syncData = () => {
		queryClient.invalidateQueries({
			queryKey: PRODUCTS_KEYS.GET_ADMIN_PRODUCTS(new URLSearchParams(params).toString()),
		});
	};

	const addProduct = async (productData) => {
		const response = await mutateCreateProduct(productData);

		if (response.success) {
			toast.success(response.message);
			syncData();
			onClose();
		}
	};

	const editProduct = async (productData) => {
		const response = await mutateEditProduct(productData);

		if (response.success) {
			toast.success(response.message);
			syncData();
			onClose();
		}
	};

	const handleSubmit = (productData) => {
		if (isEditing) {
			editProduct(productData);
		} else {
			addProduct(productData);
		}
	};

	const { getFieldProps, onSubmit, dirty, getErrorMessage } = useCustomForm(
		product || { title: "" },
		productFormSchema,
		handleSubmit
	);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalHeader title={isEditing ? "ویرایش محصول" : "افزودن محصول"} onClose={onClose} />
			<ModalBody>
				<form>
					<FormField label="عنوان محصول" required id="title" error={getErrorMessage("title")}>
						<Input
							type="text"
							placeholder="نام را وارد کنید"
							error={getErrorMessage("title")}
							{...getFieldProps("title")}
						/>
					</FormField>
				</form>
			</ModalBody>
			<ModalFooter>
				<Button onClick={onSubmit} disabled={!dirty} loading={isPendingEdit || isPendingCreate}>
					ذخیره
				</Button>
				<Button variant="outlined">انصراف</Button>
			</ModalFooter>
		</Modal>
	);
}

export default ProductModal;
