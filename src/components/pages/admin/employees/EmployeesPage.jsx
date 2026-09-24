import PageHeader from "../../../module/page-header/PageHeader";
import PlusIcon from "../../../../assets/icons/plus.svg?react";
import Button from "../../../ui/button/Button";
import EmployeesList from "./EmployeesList";
import useToggle from "../../../../hooks/useToggle";
import EmployeeModal from "../../../module/employee-modal/EmployeeModal";

function EmployeesPage() {
	const [isEmployeeModalOpen, toggleIsEmployeeModalOpen] = useToggle(false);

	return (
		<>
			<PageHeader title="کارمندان" subTitle="مدیریت کارمندان سامانه">
				<Button IconStart={PlusIcon} onClick={toggleIsEmployeeModalOpen}>
					کارمند جدید
				</Button>
			</PageHeader>
			<EmployeesList />
			{isEmployeeModalOpen && (
				<EmployeeModal isOpen={isEmployeeModalOpen} onClose={toggleIsEmployeeModalOpen} />
			)}
		</>
	);
}

export default EmployeesPage;
