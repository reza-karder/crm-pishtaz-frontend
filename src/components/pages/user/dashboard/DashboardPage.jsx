import { useGetUserStats } from "../../../../api/user/queries";
import StatCard from "../../../module/stat-card/StatCard";
import styles from "./DashboardPage.module.css";
import PersonIcon from "../../../../assets/icons/person.svg?react";
import PhoneIcon from "../../../../assets/icons/phone.svg?react";
import QuickAccess from "./QuickAccess";
import Chart from "./Chart";
import clsx from "clsx";
import PageHeader from "../../../module/page-header/PageHeader";
import Button from "../../../ui/button/Button";
import PlusIcon from "../../../../assets/icons/plus.svg?react";
import ArrowIcon from "../../../../assets/icons/arrow-left.svg?react";
import CallsList from "./CallsList";
import EmptyState from "../../../common/empty-state/EmptyState";
import LinkButton from "../../../ui/button/LinkButton";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import CustomerModal from "../../../module/customer-modal/CustomerModal";
import useToggle from "../../../../hooks/useToggle";

function DashboardPage() {
	useDocumentTitle("داشبورد");
	const [isCustomerModalOpen, toggleIsCustomerModalOpen] = useToggle(false);
	const { data } = useGetUserStats();
	const { todayCalls, allCallsCount, customersCount, callsOfLast7Days } = data.stats;
	const pageHeaderLabel = todayCalls.length
		? `امروز ${todayCalls.length || "هیچ"} تماس در برنامه کاری شما ثبت شده است.`
		: "هیچ تماسی برای امروز ثبت نشده است";

	return (
		<>
			<PageHeader title={`سلام ${data.user.name}`} subTitle={pageHeaderLabel}>
				<Button IconStart={PlusIcon} onClick={toggleIsCustomerModalOpen}>
					مشتری جدید
				</Button>
			</PageHeader>

			<section className={styles.stats_sec}>
				<StatCard color="primary" Icon={PhoneIcon} title="تماس های امروز" value={allCallsCount} />
				<StatCard color="success" Icon={PersonIcon} title="تعداد مشتریان" value={customersCount} />
			</section>

			<div className={styles.wrapper}>
				<section className={clsx("paper", styles.chart_sec)}>
					<div>
						<p className="paper__title">تماس‌های هفته</p>
						<p className="paper__subtitle">تعداد تماس‌های انجام‌شده در ۷ روز گذشته</p>
					</div>
					<Chart callsOfLast7Days={callsOfLast7Days} />
				</section>
				<section className={clsx("paper", styles.calls_sec)}>
					<div className={styles.calls__header}>
						<p className="paper__title">تماس‌های هفته</p>
						<LinkButton to="/calendar" IconEnd={ArrowIcon} variant="text" color="normal">
							تقویم
						</LinkButton>
					</div>
					{todayCalls.length ? (
						<CallsList calls={todayCalls} />
					) : (
						<EmptyState
							className={styles.empty_state}
							title="موردی یافت نشد"
							subtitle="هیچ تماسی برای امروز ثبت نشده"
						/>
					)}
				</section>
			</div>

			{isCustomerModalOpen && (
				<CustomerModal isOpen={isCustomerModalOpen} onClose={toggleIsCustomerModalOpen} />
			)}
			<QuickAccess openCustomerModal={toggleIsCustomerModalOpen} />
		</>
	);
}

export default DashboardPage;
