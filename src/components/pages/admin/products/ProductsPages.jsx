import PageHeader from "../../../module/page-header/PageHeader";
import PlusIcon from "../../../../assets/icons/plus.svg?react";
import Button from "../../../ui/button/Button";
import ProductsList from "./ProductsList";
import useCustomParams from "../../../../hooks/useCustomParams";
import useToggle from "../../../../hooks/useToggle";
import ProductModal from "./product-item/ProductModal";
import QueryBoundary from "../../../common/QueryBoundary";
import Loading from "./Loading";
import ErrorState from "../../../common/error-state/ErrorState";
import SearchInput from "../../../module/SearchInput";

const DEFAULT_PARAMS = {
	search: "",
	page: 1,
};

function ProductsPages() {
	const productsParams = useCustomParams(DEFAULT_PARAMS);
	const [isProductModalOpen, toggleIsProductModalOpen] = useToggle(false);

	return (
		<>
			<PageHeader title="محصولات" subTitle="این فهرست در فرم افزودن مشتری استفاده می‌شود">
				<Button IconStart={PlusIcon} onClick={toggleIsProductModalOpen}>
					محصول جدید
				</Button>
			</PageHeader>

			<div className="paper">
				<SearchInput
					initialValue={productsParams.params.search}
					placeholder="جستجوی محصول..."
					onChange={(search) => productsParams.updateParams({ search })}
				/>
			</div>
			<QueryBoundary loadingFallback={<Loading />} errorFallback={<ErrorState />}>
				<ProductsList productsParams={productsParams} />
			</QueryBoundary>

			{isProductModalOpen && (
				<ProductModal
					isOpen={isProductModalOpen}
					onClose={toggleIsProductModalOpen}
					params={productsParams.params}
				/>
			)}
		</>
	);
}

export default ProductsPages;
