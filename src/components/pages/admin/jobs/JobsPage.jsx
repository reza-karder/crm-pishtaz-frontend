import PageHeader from "../../../module/page-header/PageHeader";
import PlusIcon from "../../../../assets/icons/plus.svg?react";
import Button from "../../../ui/button/Button";
import useCustomParams from "../../../../hooks/useCustomParams";
import JobsList from "./JobsList";
import SearchInput from "./SearchInput";
import useToggle from "../../../../hooks/useToggle";
import JobModal from "./job-item/JobModal";

const DEFAULT_PARAMS = {
	search: "",
	page: 1,
};

function JobsPage() {
	const jobsParams = useCustomParams(DEFAULT_PARAMS);
	const [isJobModalOpen, toggleIsJobModalOpen] = useToggle(false);

	return (
		<>
			<PageHeader title="مشاغل" subTitle="این فهرست در فرم افزودن مشتری استفاده می‌شود">
				<Button IconStart={PlusIcon} onClick={toggleIsJobModalOpen}>
					شغل جدید
				</Button>
			</PageHeader>

			<div className="paper">
				<SearchInput jobsParams={jobsParams} />
			</div>
			<JobsList jobsParams={jobsParams} />

			{isJobModalOpen && (
				<JobModal
					isOpen={isJobModalOpen}
					onClose={toggleIsJobModalOpen}
					params={jobsParams.params}
				/>
			)}
		</>
	);
}

export default JobsPage;
