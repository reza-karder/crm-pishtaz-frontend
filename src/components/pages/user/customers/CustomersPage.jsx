import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import PageHeader from "../../../module/page-header/PageHeader";
import Button from "../../../ui/button/Button";
import PlusIcon from "../../../../assets/icons/plus.svg?react";
import useToggle from "../../../../hooks/useToggle";
import CustomerModal from "../../../module/customer-modal/CustomerModal";

function CustomersPage() {
	useDocumentTitle("مشتریان");

	const [isCustomerModalOpen, toggleIsCustomerModalOpen] = useToggle(false);

	return (
		<>
			<PageHeader title="مشتریان" subTitle="مدیریت تمام مشتریان شما">
				<Button IconStart={PlusIcon} onClick={toggleIsCustomerModalOpen}>
					مشتری جدید
				</Button>
			</PageHeader>

			{isCustomerModalOpen && (
				<CustomerModal isOpen={isCustomerModalOpen} onClose={toggleIsCustomerModalOpen} />
			)}
		</>
	);
}

export default CustomersPage;
