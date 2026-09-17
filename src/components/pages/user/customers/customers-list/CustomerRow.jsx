import Badge from "../../../../ui/badge/Badge";
import styles from "./CustomerRow.module.css";
import ArrowIcon from "../../../../../assets/icons/tailless-arrow-left.svg?react";
import LinkButton from "../../../../ui/button/LinkButton";

function CustomerRow() {
	return (
		<tr className={styles.row}>
      <td>
        <input type="checkbox" />
      </td>
			<td>
				<div className={styles.name_wrapper}>
					<span className={styles.avatar}>ع</span>
					<p className={styles.name}>علی حسینی</p>
				</div>
			</td>
			<td className={styles.phone}>۰۹۱۲۱۱۱۲۲۳۳</td>
			<td className={styles.job}>پیمانکار ساختمانی</td>
			<td>
				<Badge color="success">فعال</Badge>
			</td>
			<td className={styles.date}>۱۴۰۴/۰۳/۱۲</td>
			<td>
				<LinkButton IconEnd={ArrowIcon} variant="text" color="normal">
					پرونده
				</LinkButton>
			</td>
		</tr>
	);
}

export default CustomerRow;
