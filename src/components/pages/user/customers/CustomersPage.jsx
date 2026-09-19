import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import PageHeader from "../../../module/page-header/PageHeader";
import Button from "../../../ui/button/Button";
import PlusIcon from "../../../../assets/icons/plus.svg?react";
import useToggle from "../../../../hooks/useToggle";
import CustomerModal from "../../../module/customer-modal/CustomerModal";
import CustomersToolbar from "./CustomersToolbar";
import SelectionState from "./SelectionState";
import CustomersList from "./customers-list/CustomersList";
import useCustomersParams from "./hooks/useCustomersParams";
import useSelection from "./hooks/useSelection";

function CustomersPage() {
	useDocumentTitle("مشتریان");

	const [isCustomerModalOpen, toggleIsCustomerModalOpen] = useToggle(false);

	const customersParams = useCustomersParams();
	const selection = useSelection();

	return (
		<>
			<PageHeader title="مشتریان" subTitle="مدیریت تمام مشتریان شما">
				<Button IconStart={PlusIcon} onClick={toggleIsCustomerModalOpen}>
					مشتری جدید
				</Button>
			</PageHeader>

			<CustomersToolbar customersParams={customersParams} />
			{selection.isSelecting && <SelectionState selection={selection} customersParams={customersParams} />}
			<CustomersList customersParams={customersParams} selection={selection} />

			{isCustomerModalOpen && (
				<CustomerModal isOpen={isCustomerModalOpen} onClose={toggleIsCustomerModalOpen} />
			)}
		</>
	);
}

export default CustomersPage;
