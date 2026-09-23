import PageHeader from "../../../module/page-header/PageHeader";
import PlusIcon from "../../../../assets/icons/plus.svg?react";
import Button from "../../../ui/button/Button";
import useCustomParams from "../../../../hooks/useCustomParams";
import JobsList from "./JobsList";

const DEFAULT_PARAMS = {
	search: "",
	page: 1,
};

function JobsPage() {
  const jobsParams = useCustomParams(DEFAULT_PARAMS)

	return (
		<>
			<PageHeader title="مشاغل" subTitle="این فهرست در فرم افزودن مشتری استفاده می‌شود">
				<Button IconStart={PlusIcon}>شغل جدید</Button>
			</PageHeader>

      <JobsList jobsParams={jobsParams} />
		</>
	);
}

export default JobsPage;
