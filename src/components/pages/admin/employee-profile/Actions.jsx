import { useParams } from "react-router";
import PenIcon from "../../../../assets/icons/pen.svg?react";
import TrashIcon from "../../../../assets/icons/trash.svg?react";
import useToggle from "../../../../hooks/useToggle";
import EmployeeModal from "../../../module/employee-modal/EmployeeModal";
import Button from "../../../ui/button/Button";
import styles from "./Actions.module.css";
import { useGetEmployee } from "../../../../api/user/queries";
import DeleteModal from "./DeleteModal";

function Actions() {
	const [isEmployeeModalOpen, toggleIsEmployeeModalOpen] = useToggle(false);
	const [isDeleteModalOpen, toggleIsDeleteModalOpen] = useToggle(false);

	const params = useParams();
	const { data } = useGetEmployee(params.employeeId);

	return (
		<div className={styles.wrapper}>
			<Button
				size="small"
				variant="outlined"
				color="normal"
				IconStart={PenIcon}
				onClick={toggleIsEmployeeModalOpen}
			>
				ویرایش
			</Button>
			<Button size="small" color="danger" IconStart={TrashIcon} onClick={toggleIsDeleteModalOpen}>
				حذف
			</Button>

			{isEmployeeModalOpen && (
				<EmployeeModal
					isOpen={isEmployeeModalOpen}
					onClose={toggleIsEmployeeModalOpen}
					employee={data?.user}
				/>
			)}

			{isDeleteModalOpen && (
				<DeleteModal
					isOpen={isDeleteModalOpen}
					onClose={toggleIsDeleteModalOpen}
					employeeId={data?.user?._id}
				/>
			)}
		</div>
	);
}

export default Actions;
