import clsx from "clsx";
import styles from "./CustomerInfos.module.css";
import PhoneIcon from "../../../../assets/icons/phone.svg?react";
import EmailIcon from "../../../../assets/icons/email.svg?react";
import SuitcaseIcon from "../../../../assets/icons/suitcase.svg?react";
import LocationIcon from "../../../../assets/icons/location.svg?react";
import { useParams } from "react-router";
import { useGetCustomerProfile } from "../../../../api/customers/queries";
import Note from "../../../module/note/Note";

function getValue(obj, path) {
	return path.split(".").reduce((value, key) => value?.[key], obj);
}

const INFO_ITEMS = [
	{ title: "تماس اصلی", Icon: PhoneIcon, key: "phonePrimary" },
	{ title: "تماس دوم", Icon: PhoneIcon, key: "phoneSecondary" },
	{ title: "ایمیل", Icon: EmailIcon, key: "email" },
	{ title: "شغل", Icon: SuitcaseIcon, key: "job.title" },
	{ title: "آدرس", Icon: LocationIcon, key: "address" },
];

function CustomerInfos() {
	const params = useParams();

	const { data } = useGetCustomerProfile(params.customerId);
	const { customer } = data || {};

	return (
		<section className={clsx("paper", styles.wrapper)}>
			<ul>
				{INFO_ITEMS.map((info) => (
					<li key={info.key} className={styles.info}>
						<span className={styles.info__icon}>
							<info.Icon />
						</span>
						<div>
							<p className={styles.info__title}>{info.title}</p>
							<p className={styles.info__value}>{getValue(customer, info.key) || "----------"}</p>
						</div>
					</li>
				))}
			</ul>
			<Note note={customer?.notes} title="یادداشت مشتری" />
		</section>
	);
}

export default CustomerInfos;
