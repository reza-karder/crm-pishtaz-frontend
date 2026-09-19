import { useGetUserCustomers } from "../../../../../api/customers/queries";
import Pagination from "../../../../ui/pagination/Pagination";
import CustomerRow from "./CustomerRow";
import styles from "./CustomersList.module.css";

const TABLE_HEADES = ["مشتری", "شماره تماس", "شغل", "وضعیت", "تاریخ افزودن", "جزئیات"];

function CustomersList({ customersParams, selection }) {
	const { params, updateParams } = customersParams;
	const { isSelected, toggleSelect, toggleSelectAll, selectionState } = selection;
	const { data } = useGetUserCustomers(params);
	const { customers, totalPages, totalCustomers, limit } = data || {};

	const customerDisplayStartRange = (params.page - 1) * limit + Math.min(1, totalCustomers);
	const customerDisplayEndRange = Math.min(customerDisplayStartRange + limit - 1, totalCustomers);

	return (
		<section className={styles.wrapper}>
			<table className={styles.table}>
				<thead>
					<tr>
						<th>
							<input
								type="checkbox"
								checked={selectionState.mode === "all"}
								onChange={toggleSelectAll}
							/>
						</th>
						{TABLE_HEADES.map((head) => (
							<th key={head}>{head}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{customers?.map((customer) => (
						<CustomerRow
							key={customer._id}
							customer={customer}
							isSelected={isSelected(customer._id)}
							onToggleSelect={(event) => toggleSelect(event, customer._id)}
						/>
					))}
				</tbody>
			</table>

			<div className={styles.pagination}>
				<p className={styles.pagination__count}>
					نمایش {customerDisplayStartRange} تا {customerDisplayEndRange} از {totalCustomers} مشتری
				</p>
				<Pagination
					totalPages={totalPages || 1}
					currentPage={params.page}
					onChange={(page) => updateParams({ page })}
				/>
			</div>
		</section>
	);
}

export default CustomersList;
