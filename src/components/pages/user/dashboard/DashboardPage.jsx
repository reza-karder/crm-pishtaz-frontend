import { useGetUserStats } from "../../../../api/user/queries";
import StatCard from "../../../module/stat-card/StatCard";
import styles from "./DashboardPage.module.css";
import PersonIcon from "../../../../assets/icons/person.svg?react";
import PhoneIcon from "../../../../assets/icons/phone.svg?react";
import Chart from "./Chart";
import clsx from "clsx";
import PageHeader from "../../../module/page-header/PageHeader";
import Button from "../../../ui/button/Button";
import PlusIcon from "../../../../assets/icons/plus.svg?react";

function DashboardPage() {
	const { data } = useGetUserStats();
	const { todayCalls, allCallsCount, customersCount, last7DaysCalls } = data.stats;
	const pageHeaderLabel = todayCalls.length
		? `امروز ${todayCalls.length || "هیچ"} تماس در برنامه کاری شما ثبت شده است.`
		: "هیچ تماسی برای امروز ثبت نشده است";

	return (
		<>
			<PageHeader title={`سلام ${data.user.name}`} subTitle={pageHeaderLabel}>
				<Button IconStart={PlusIcon}>مشتری جدید</Button>
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
					<Chart last7DaysCalls={last7DaysCalls} />
				</section>
			</div>
		</>
	);
}

export default DashboardPage;
