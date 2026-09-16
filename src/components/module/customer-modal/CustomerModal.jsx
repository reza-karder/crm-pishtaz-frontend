import { toast } from "sonner";
import { useCreateCustomer, useEditCustomer } from "../../../api/customers/mutations";
import useCustomerForm from "./hooks/useCustomerForm";
import Button from "../../ui/button/Button";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../../ui/modal/Modal";
import CustomerForm from "./CustomerForm";
import { useQueryClient } from "@tanstack/react-query";
import CUSTOMER_KEYS from "../../../api/customers/keys";
import USER_KEYS from "../../../api/user/keys";

function CustomerModal({ isOpen, onClose, customer }) {
	const isEditing = Boolean(customer);
	const queryClient = useQueryClient();
	const { mutateAsync: mutateCreateCustomer, isPending: isCreatingCustomer } = useCreateCustomer();
	const { mutateAsync: mutateEditCustomer, isPending: isEditingCustomer } = useEditCustomer();

	const addCustomerToCache = (customer) => {
		queryClient.setQueriesData({ queryKey: CUSTOMER_KEYS.GET_USER_CUSTOMERS }, (prevData) => {
			if (!prevData) return prevData;
			return {
				...prevData,
				customers: [customer, ...prevData.customers],
			};
		});
	};

	const createCustomer = async (customer) => {
		const response = await mutateCreateCustomer(customer);

		if (!response.success) {
			toast.warning(response.message);
			return;
		}

		toast.success(response.message);

		// sync new customer across the app
		queryClient.invalidateQueries({ queryKey: USER_KEYS.GET_USER_STATS });
		addCustomerToCache(response.customer);

		onClose();
	};

	const editCustomerInCache = (editedCustomer) => {
		queryClient.setQueriesData({ queryKey: CUSTOMER_KEYS.GET_USER_CUSTOMERS }, (prevData) => {
			if (!prevData) return prevData;

			const updatedCustomers = prevData.customers.map((customer) =>
				customer._id === editedCustomer._id ? editedCustomer : customer
			);

			return {
				...prevData,
				customers: updatedCustomers,
			};
		});
	};

	const editCustomer = async (customer) => {
		const response = await mutateEditCustomer(customer);

		if (!response.success) {
			toast.warning(response.message);
			return;
		}

		toast.success(response.message);

		// sync edited customer across the app
		queryClient.invalidateQueries({ queryKey: USER_KEYS.GET_USER_STATS });
		editCustomerInCache(response.customer);

		onClose();
	};

	const handleSubmit = (customer) => {
		if (isEditing) {
			editCustomer(customer);
		} else {
			createCustomer(customer);
		}
	};

	const customerForm = useCustomerForm(customer, handleSubmit);

	return (
		<Modal onClose={onClose} isOpen={isOpen} style={{ width: "clamp(0px, 100%, 768px)" }}>
			<ModalHeader
				title="افزودن مشتری جدید"
				subTitle="اطلاعات پایه، محصولات و تماس‌های مشتری"
				onClose={onClose}
			/>
			<ModalBody>
				<CustomerForm customerForm={customerForm} />
			</ModalBody>
			<ModalFooter>
				<Button onClick={customerForm.onSubmit} loading={isCreatingCustomer || isEditingCustomer}>
					ذخیره مشتری
				</Button>
				<Button variant="outlined" onClick={onClose}>
					انصراف
				</Button>
			</ModalFooter>
		</Modal>
	);
}

export default CustomerModal;
