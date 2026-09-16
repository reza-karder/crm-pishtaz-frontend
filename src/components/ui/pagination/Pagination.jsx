import clsx from "clsx";
import styles from "./Pagination.module.css";
import ArrowRight from "../../../assets/icons/tailless-arrow-right.svg?react";
import ArrowLeft from "../../../assets/icons/tailless-arrow-left.svg?react";
import IconBtn from "../icon-btn/IconBtn";

function getPaginationItems(totalPages, currentPage) {
	let items = [];

	if (totalPages < 8) {
		return Array.from({ length: totalPages }, (_, index) => index + 1);
	}

	if (currentPage < 5) {
		items = [1, 2, 3, 4, 5, "gap", totalPages];
	}

	if (currentPage >= 5 && currentPage < totalPages - 3) {
		items = [1, "gap", currentPage - 1, currentPage, currentPage + 1, "gap", totalPages];
	}

	if (currentPage > totalPages - 4) {
		items = [1, "gap", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
	}

	return items;
}

function Pagination({ totalPages, currentPage, onChange }) {
	const paginationItems = getPaginationItems(totalPages, currentPage);

	return (
		<div dir="ltr" className={styles.pagination_wrapper}>
			<IconBtn className={styles.pagination__btn}>
				<ArrowLeft />
			</IconBtn>
			<div className={styles.pagination}>
				{paginationItems.map((item, index) => (
					<PaginationItem
						item={item}
						onChange={onChange}
						isActive={currentPage === item}
						key={item === "gap" ? `gap-${index}` : item}
					/>
				))}
			</div>
			<IconBtn className={styles.pagination__btn}>
				<ArrowRight />
			</IconBtn>
		</div>
	);
}

function PaginationItem({ item, onChange, isActive }) {
	if (item === "gap") {
		return <span className={styles.pagination__gap}>...</span>;
	}

	return (
		<button
			onClick={() => onChange(item)}
			className={clsx(styles.pagination__page, isActive && styles.active)}
		>
			{item}
		</button>
	);
}

export default Pagination;
