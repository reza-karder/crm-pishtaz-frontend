import PageHeader from "../../../module/page-header/PageHeader";
import PlusIcon from "../../../../assets/icons/plus.svg?react";
import Button from "../../../ui/button/Button";

function EmployeesPage() {
	return (
		<>
			<PageHeader title="کارمندان" subTitle="مدیریت کارمندان سامانه">
				<Button IconStart={PlusIcon}>کارمند جدید</Button>
			</PageHeader>
		</>
	);
}

export default EmployeesPage;
