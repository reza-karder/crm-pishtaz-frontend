import useCustomerForm from "../../../hooks/useCustomerForm";
import Button from "../../ui/button/Button";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../../ui/modal/Modal";
import CustomerForm from "./CustomerForm";

function CustomerModal({ isOpen, onClose, customer }) {
	const isEditing = Boolean(customer);
	const customerForm = useCustomerForm(customer);

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
				<Button> ذخیره مشتری </Button>
				<Button variant="outlined" onClick={onClose}>
					انصراف
				</Button>
			</ModalFooter>
		</Modal>
	);
}

export default CustomerModal;
