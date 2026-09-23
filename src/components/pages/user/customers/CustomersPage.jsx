import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import PageHeader from "../../../module/page-header/PageHeader";
import Button from "../../../ui/button/Button";
import PlusIcon from "../../../../assets/icons/plus.svg?react";
import useToggle from "../../../../hooks/useToggle";
import CustomerModal from "../../../module/customer-modal/CustomerModal";
import CustomersToolbar from "./CustomersToolbar";
import SelectionState from "./SelectionState";
import CustomersList from "./customers-list/CustomersList";
import useSelection from "./hooks/useSelection";
import QueryBoundary from "../../../common/QueryBoundary";
import Loading from "./customers-list/Loading";
import ErrorState from "../../../common/error-state/ErrorState";
import useCustomParams from "../../../../hooks/useCustomParams";

const DEFAULT_PARAMS = {
	search: "",
	sort: "newest",
	purchasedProduct: "all",
	potentialProduct: "all",
	job: "all",
	status: "all",
	date: "all",
	call: "all",
	page: 1,
};

function CustomersPage() {
	useDocumentTitle("مشتریان");

	const [isCustomerModalOpen, toggleIsCustomerModalOpen] = useToggle(false);

	const customersParams = useCustomParams(DEFAULT_PARAMS);
	const selection = useSelection();

	return (
		<>
			<PageHeader title="مشتریان" subTitle="مدیریت تمام مشتریان شما">
				<Button IconStart={PlusIcon} onClick={toggleIsCustomerModalOpen}>
					مشتری جدید
				</Button>
			</PageHeader>

			<CustomersToolbar customersParams={customersParams} />
			{selection.isSelecting && (
				<SelectionState selection={selection} customersParams={customersParams} />
			)}
			<QueryBoundary loadingFallback={<Loading />} errorFallback={<ErrorState />}>
				<CustomersList customersParams={customersParams} selection={selection} />
			</QueryBoundary>

			{isCustomerModalOpen && (
				<CustomerModal isOpen={isCustomerModalOpen} onClose={toggleIsCustomerModalOpen} />
			)}
		</>
	);
}

export default CustomersPage;
