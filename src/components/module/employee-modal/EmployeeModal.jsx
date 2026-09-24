import Button from "../../ui/button/Button";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../../ui/modal/Modal";

function EmployeeModal({ isOpen, onClose, employee }) {
	const isEditing = Boolean(employee);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalHeader
				title={isEditing ? "ویرایش کارمند" : "افزودن کارمند"}
				subTitle="اطلاعات عمومی و حساس مربوط به کارمند"
			/>
      <ModalBody>
        
      </ModalBody>
      <ModalFooter>
        <Button>ذخیره</Button>
        <Button variant="outlined">انصراف</Button>
      </ModalFooter>
		</Modal>
	);
}

export default EmployeeModal;
