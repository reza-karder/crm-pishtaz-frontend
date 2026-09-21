import useCustomForm from "../../../../hooks/useCustomForm";
import { customerCallValidator } from "../../../../utils/validators";
import Button from "../../../ui/button/Button";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../../../ui/modal/Modal";
import CallForm from "./CallForm";

const INITIAL_FORM_DATA = {
	date: new Date(),
	status: "",
	notes: "",
};

function CallModal({ isOpen, onClose, initialValues, onAdd, onEdit }) {
	const isEditing = Boolean(initialValues);
	const title = isEditing ? "ویرایش تماس" : "افزودن تماس";

	const handleSubmit = (callData) => {
		if (isEditing) {
			onEdit(callData.key, callData);
		} else {
			onAdd(callData);
		}
	};

	const callForm = useCustomForm(
		initialValues || INITIAL_FORM_DATA,
		customerCallValidator,
		handleSubmit
	);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalHeader
				title={title}
				onClose={onClose}
				subTitle="تماس انجام‌شده یا تماس زمان‌بندی‌شده"
			/>
			<ModalBody>
				<CallForm callForm={callForm} />
			</ModalBody>
			<ModalFooter>
				<Button onClick={callForm.onSubmit}>ذخیره</Button>
				<Button variant="outlined" onClick={onClose}>
					انصراف
				</Button>
			</ModalFooter>
		</Modal>
	);
}

export default CallModal;
