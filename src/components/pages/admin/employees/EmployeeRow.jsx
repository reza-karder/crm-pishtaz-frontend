import {
	USER_ROLE_LABELS,
	USER_STATUS_COLORS,
	USER_STATUS_LABELS,
} from "../../../../constants/userLabels";
import { toPersianDateString } from "../../../../utils/utils";
import Badge from "../../../ui/badge/Badge";
import LinkButton from "../../../ui/button/LinkButton";
import { TableRow } from "../../../ui/table/Table";
import styles from "./EmployeeRow.module.css";
import ArrowIcon from "../../../../assets/icons/arrow-left.svg?react";

function EmployeeRow({ employee }) {
	const { name, status, role, createdAt, _id } = employee;

	return (
		<TableRow>
			<td className={styles.name}>{name}</td>
			<td className={styles.data}>{USER_ROLE_LABELS[role]}</td>
			<td>
				<Badge color={USER_STATUS_COLORS[status]}>{USER_STATUS_LABELS[status]}</Badge>
			</td>
			<td className={styles.data}>{toPersianDateString(createdAt)}</td>
			<td>
				<LinkButton to={`/employees/${_id}`} IconEnd={ArrowIcon} variant="text" color="normal">
					پرونده
				</LinkButton>
			</td>
		</TableRow>
	);
}

export default EmployeeRow;
