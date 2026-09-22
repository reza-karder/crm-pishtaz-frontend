import styles from "./QuickAccess.module.css";
import PersonIcon from "../../../../assets/icons/person.svg?react";
import ListIcon from "../../../../assets/icons/list.svg?react";
import PhoneIcon from "../../../../assets/icons/phone.svg?react";
import { Link } from "react-router";
import { toUTCDateString } from "../../../../utils/calendar";

const QUECK_ACCESS_LINKS = [
	{ path: `/calendar/${toUTCDateString(new Date())}`, label: "تماس های امروز", Icon: PhoneIcon },
	{ path: "/customers", label: "فهرست مشتریان", Icon: ListIcon },
];

function QuickAccess({ openCustomerModal }) {
	return (
		<section className="paper">
			<div>
				<p className="paper__title">دسترسی سریع</p>
				<p className="paper__subtitle">کارهایی که بیشتر انجام می‌دهید</p>
			</div>
			<div className={styles.quick_access_actions}>
				<button className={styles.action} onClick={openCustomerModal}>
					<PersonIcon className={styles.action__icon} />
					<span className={styles.action__label}>افزودن مشتری</span>
				</button>
				{QUECK_ACCESS_LINKS.map((link) => (
					<Link key={link.path} to={link.path} className={styles.action}>
						<link.Icon className={styles.action__icon} />
						<span className={styles.action__label}>{link.label}</span>
					</Link>
				))}
			</div>
		</section>
	);
}

export default QuickAccess;
