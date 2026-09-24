import clsx from "clsx";
import Pagination from "../../ui/pagination/Pagination";
import styles from "./CounterPagination.module.css";

function CounterPagination({ currentPage, totalPages, totalCount, onChange, limit, label, wrapperClassName }) {
	const counterStartRange = (currentPage - 1) * limit + Math.min(1, totalCount);
	const counterEndRange = Math.min(counterStartRange + limit - 1, totalCount);

	return (
		<div className={clsx(styles.pagination, wrapperClassName)}>
			<p className={styles.pagination__count}>
				نمایش {counterStartRange} تا {counterEndRange} از {totalCount} {label}
			</p>
			<Pagination currentPage={Number(currentPage)} totalPages={totalPages} onChange={onChange} />
		</div>
	);
}

export default CounterPagination;
