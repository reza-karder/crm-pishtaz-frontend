import PageHeader from "../../../module/page-header/PageHeader";
import StatCard from "../../../module/stat-card/StatCard";
import styles from "./NotificationPage.module.css";
import PhoneIcon from "../../../../assets/icons/phone.svg?react";
import { useSuspenseGetNotifications } from "../../../../api/notification/query";

function NotificationPage() {
	const { data } = useSuspenseGetNotifications();
	const { unresolvedCalls, callsOfDay } = data?.notifications || {};

	return (
		<>
			<PageHeader title="اعلان ها" subTitle="مشاهده تماس های روز و رسیدگی نشده" />
      
			<div className={styles.stats}>
				<StatCard
					Icon={PhoneIcon}
					title="تماس های امروز"
					value={callsOfDay?.length}
				/>
				<StatCard
					Icon={PhoneIcon}
					title="تماس های رسیدگی نشده"
          color="danger"
					value={unresolvedCalls?.length}
				/>
			</div>
		</>
	);
}

export default NotificationPage;
