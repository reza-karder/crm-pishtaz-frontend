import PageHeader from "../../../module/page-header/PageHeader";
import StatCard from "../../../module/stat-card/StatCard";
import styles from "./NotificationPage.module.css";
import PhoneIcon from "../../../../assets/icons/phone.svg?react";
import PhoneMissedIcon from "../../../../assets/icons/phone-missed.svg?react";
import { useSuspenseGetNotifications } from "../../../../api/notification/query";
import CallsList from "./CallsList";

function NotificationPage() {
	const { data } = useSuspenseGetNotifications();
	const { unresolvedCalls, callsOfDay } = data?.notifications || {};

	return (
		<>
			<PageHeader title="اعلان ها" subTitle="مشاهده تماس های روز و رسیدگی نشده" />

			<div className={styles.stats}>
				<StatCard Icon={PhoneIcon} title="تماس های امروز" value={callsOfDay?.length} />
				<StatCard
					Icon={PhoneMissedIcon}
					title="تماس های رسیدگی نشده"
					color="danger"
					value={unresolvedCalls?.length}
				/>
			</div>

			<CallsList key="calls-of-day" title="تماس های امروز" calls={callsOfDay} />
			<CallsList key="unresolved-calls" title="تماس های رسیدگی نشده" calls={unresolvedCalls} />
		</>
	);
}

export default NotificationPage;
