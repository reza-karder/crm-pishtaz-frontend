import Pagination from "../../../../ui/pagination/Pagination";
import CustomerRow from "./CustomerRow";
import styles from "./CustomersList.module.css";

const TABLE_HEADES = ["مشتری", "شماره تماس", "شغل", "وضعیت", "تاریخ افزودن", "جزئیات"];

function CustomersList() {
	return (
		<section className={styles.wrapper}>
			<table className={styles.table}>
				<thead>
					<tr>
            <th><input type="checkbox" /></th>
						{TABLE_HEADES.map((head) => (
							<th key={head}>{head}</th>
						))}
					</tr>
				</thead>
				<tbody>
					<CustomerRow />
					<CustomerRow />
				</tbody>
			</table>

      <div className={styles.pagination}>
        <p className={styles.pagination__count}>نمایش ۱ تا ۱۰ از ۸۰ مشتری</p>
        <Pagination totalPages={10} currentPage={1} />
      </div>
		</section>
	);
}

export default CustomersList;
