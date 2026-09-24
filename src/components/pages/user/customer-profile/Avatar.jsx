import { useGetCustomerProfile } from "../../../../api/customers/queries";
import styles from "./Avatar.module.css";
import CalendarIcon from "../../../../assets/icons/calendar.svg?react";
import PersonIcon from "../../../../assets/icons/person.svg?react";
import { useParams } from "react-router";
import { toPersianDateString } from "../../../../utils/utils";

function Avatar() {
  const params = useParams()

	const { data } = useGetCustomerProfile(params.customerId);
	const { name, createdAt } = data?.customer || {};

	return (
		<div className={styles.avatar}>
			<span className={styles.avatar__photo}>
				<PersonIcon />
			</span>
			<div>
				<h1 className={styles.avatar__name}>{name}</h1>
				<div className={styles.avatar__date}>
					<CalendarIcon className={styles.date__icon} />
					<span> افزوده شده در {toPersianDateString(createdAt)} </span>
				</div>
			</div>
		</div>
	);
}

export default Avatar;
