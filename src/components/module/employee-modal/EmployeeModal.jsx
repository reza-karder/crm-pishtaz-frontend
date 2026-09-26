import { toast } from "sonner";
import { useCreateEmployee, useEditEmployee } from "../../../api/user/mutation";
import useCustomForm from "../../../hooks/useCustomForm";
import { employeeFormSchema } from "../../../utils/validators";
import Button from "../../ui/button/Button";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../../ui/modal/Modal";
import EmployeeForm from "./EmployeeForm";
import { useQueryClient } from "@tanstack/react-query";
import USER_KEYS from "../../../api/user/keys";
import { useParams } from "react-router";

const INITIAL_FORM_DATA = {
	name: "",
	phone: "",
	email: "",
	password: "",
	status: "",
	role: "",
};

function EmployeeModal({ isOpen, onClose, employee }) {
	const isEditing = Boolean(employee);
	const params = useParams();

	const queryClient = useQueryClient();
	const { mutateAsync: mutateCreateEmployee, isPending: isPendingCreate } = useCreateEmployee();
	const { mutateAsync: mutateEditEmployee, isPending: isPendingEdit } = useEditEmployee();

	const syncData = () => {
		queryClient.invalidateQueries({ queryKey: USER_KEYS.GET_ALL_USERS });
		queryClient.invalidateQueries({ queryKey: USER_KEYS.GET_EMPLOYEE(params.employeeId) });
	};

	const createEmployee = async (employeeData) => {
		const response = await mutateCreateEmployee(employeeData);

		if (!response.success) {
			toast.warning(response.message);
			return;
		}

		toast.success(response.message);
		syncData();
		onClose();
	};

	const editEmployee = async (employeeData) => {
		const response = await mutateEditEmployee(employeeData);

		if (!response.success) {
			toast.warning(response.message);
			return;
		}

		toast.success(response.message);
		syncData();
		onClose();
	};

	const handleSubmit = (employeeData) => {
		if (isEditing) {
			editEmployee(employeeData);
		} else {
			createEmployee(employeeData);
		}
	};

	const employeeForm = useCustomForm(
		employee || INITIAL_FORM_DATA,
		employeeFormSchema,
		handleSubmit
	);

	return (
		<Modal isOpen={isOpen} onClose={onClose} style={{ width: 567 }}>
			<ModalHeader
				title={isEditing ? "ویرایش کارمند" : "افزودن کارمند"}
				subTitle="اطلاعات عمومی و حساس مربوط به کارمند"
				onClose={onClose}
			/>
			<ModalBody>
				<EmployeeForm employeeForm={employeeForm} />
			</ModalBody>
			<ModalFooter>
				<Button
					onClick={employeeForm.onSubmit}
					disabled={!employeeForm.dirty}
					loading={isPendingCreate || isPendingEdit}
				>
					ذخیره
				</Button>
				<Button variant="outlined">انصراف</Button>
			</ModalFooter>
		</Modal>
	);
}

export default EmployeeModal;
