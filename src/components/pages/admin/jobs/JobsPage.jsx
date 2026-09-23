import PageHeader from "../../../module/page-header/PageHeader";
import PlusIcon from "../../../../assets/icons/plus.svg?react";
import Button from "../../../ui/button/Button";

function JobsPage() {
	return (
		<>
			<PageHeader title="مشاغل" subTitle="این فهرست در فرم افزودن مشتری استفاده می‌شود">
				<Button IconStart={PlusIcon}>شغل جدید</Button>
			</PageHeader>
		</>
	);
}

export default JobsPage;
