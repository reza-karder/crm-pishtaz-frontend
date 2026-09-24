import clsx from "clsx";
import { useGetUserCustomers } from "../../../../../api/customers/queries";
import EmptyState from "../../../../common/empty-state/EmptyState";
import CustomerRow from "./CustomerRow";
import styles from "./CustomersList.module.css";
import CounterPagination from "../../../../module/counter-pagination/CounterPagination";
import { stringifyParams } from "../../../../../utils/utils";

const TABLE_HEADES = ["مشتری", "شماره تماس", "شغل", "وضعیت", "تاریخ افزودن", "جزئیات"];

function CustomersList({ customersParams, selection }) {
	const { params, updateParams } = customersParams;
	const { isSelected, toggleSelect, toggleSelectAll, selectionState } = selection;

	const { data } = useGetUserCustomers(stringifyParams(params));
	const { customers, totalPages, totalCustomers, limit } = data || {};

	if (!data.totalCustomers) {
		return (
			<EmptyState
				className={clsx("paper", styles.empty_state)}
				title="هیچ مشتری مطابق خواست شما پیدا نشد"
				subtitle="هیچ مشتری با توجه به این فیلتر ها پیدا نشده"
			/>
		);
	}

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

			<CounterPagination
				label="مشتری"
				limit={limit}
				totalPages={totalPages}
				currentPage={params.page}
				totalCount={totalCustomers}
        wrapperClassName={styles.pagination_wrapper}
				onChange={(page) => updateParams({ page })}
			/>
		</section>
	);
}

export default CustomersList;
