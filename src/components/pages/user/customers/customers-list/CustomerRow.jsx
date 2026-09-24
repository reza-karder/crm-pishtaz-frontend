import Badge from "../../../../ui/badge/Badge";
import styles from "./CustomerRow.module.css";
import ArrowIcon from "../../../../../assets/icons/tailless-arrow-left.svg?react";
import LinkButton from "../../../../ui/button/LinkButton";
import {
	CUSTOMER_STATUSES_COLOR,
	CUSTOMER_STATUSES_LABEL,
} from "../../../../../constants/customerStatus";
import { toPersianDateString } from "../../../../../utils/utils";
import { TableRow } from "../../../../ui/table/Table";

function CustomerRow({ customer, isSelected, onToggleSelect }) {
	const { name, job, phonePrimary, createdAt, _id, status } = customer;

	return (
		<TableRow>
			<td>
				<input type="checkbox" checked={isSelected} onChange={onToggleSelect} />
			</td>
			<td>
				<div className={styles.name_wrapper}>
					<span className={styles.avatar}>{name[0]}</span>
					<p className={styles.name}>{name}</p>
				</div>
			</td>
			<td className={styles.phone}>{phonePrimary}</td>
			<td className={styles.job}>{job?.title}</td>
			<td>
				<Badge color={CUSTOMER_STATUSES_COLOR[status]}>{CUSTOMER_STATUSES_LABEL[status]}</Badge>
			</td>
			<td className={styles.date}>{toPersianDateString(createdAt)}</td>
			<td>
				<LinkButton to={`/customers/${_id}`} IconEnd={ArrowIcon} variant="text" color="normal">
					پرونده
				</LinkButton>
			</td>
		</TableRow>
	);
}

export default CustomerRow;
