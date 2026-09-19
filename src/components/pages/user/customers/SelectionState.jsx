import clsx from "clsx";
import styles from "./SelectionState.module.css";
import Button from "../../../ui/button/Button";
import TrashIcon from "../../../../assets/icons/trash.svg?react";
import MessageIcon from "../../../../assets/icons/message.svg?react";
import CrossIcon from "../../../../assets/icons/cross.svg?react";
import { useGetUserCustomers } from "../../../../api/customers/queries";

function SelectionState({ selection, customersParams }) {
	const { cancelSelection, selectionState } = selection;
	const { params } = customersParams;

	const { data } = useGetUserCustomers(params);
  const { totalCustomers } = data || {}

	const selectionCount =
		selectionState.mode === "all"
			? totalCustomers - selectionState.excludedIds.length
			: selectionState.selectedIds.length;

	return (
		<div className={clsx("paper", styles.selection)}>
			<p className={styles.selection__count}>{selectionCount} مشتری انتخاب شده</p>
			<div className={styles.selection__actions}>
				<Button
					size="small"
					IconStart={CrossIcon}
					variant="soft"
					color="normal"
					onClick={cancelSelection}
				>
					لغو انتخاب
				</Button>
				<Button size="small" IconStart={MessageIcon} variant="soft">
					ارسال پیام
				</Button>
				<Button size="small" IconStart={TrashIcon} variant="soft" color="danger">
					حذف همه
				</Button>
			</div>
		</div>
	);
}

export default SelectionState;
