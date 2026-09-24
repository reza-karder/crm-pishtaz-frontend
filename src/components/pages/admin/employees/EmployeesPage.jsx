import PageHeader from "../../../module/page-header/PageHeader";
import PlusIcon from "../../../../assets/icons/plus.svg?react";
import Button from "../../../ui/button/Button";
import EmployeesList from "./EmployeesList";

function EmployeesPage() {
	return (
		<>
			<PageHeader title="کارمندان" subTitle="مدیریت کارمندان سامانه">
				<Button IconStart={PlusIcon}>کارمند جدید</Button>
			</PageHeader>
      <EmployeesList />
		</>
	);
}

export default EmployeesPage;
