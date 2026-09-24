import clsx from "clsx";
import styles from "./SelectionState.module.css";
import Button from "../../../ui/button/Button";
import TrashIcon from "../../../../assets/icons/trash.svg?react";
import MessageIcon from "../../../../assets/icons/message.svg?react";
import CrossIcon from "../../../../assets/icons/cross.svg?react";
import { useGetUserCustomers } from "../../../../api/customers/queries";
import useToggle from "../../../../hooks/useToggle";
import DeleteModal from "../../../ui/delete-modal/DeleteModal";
import { useDeleteManyCustomers } from "../../../../api/customers/mutations";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import CUSTOMER_KEYS from "../../../../api/customers/keys";
import { stringifyParams } from "../../../../utils/utils";

function SelectionState({ selection, customersParams }) {
	const { cancelSelection, selectionState } = selection;
	const { params } = customersParams;

	const queryClient = useQueryClient();

	const [isDeleteModalOpen, toggleIsDeleteModalOpen] = useToggle();
	const { mutateAsync: mutateDelete, isPending } = useDeleteManyCustomers();

	const { data } = useGetUserCustomers(params, { refetchOnMount: false });
	const { totalCustomers } = data || {};

	const selectionCount =
		selectionState.mode === "all"
			? totalCustomers - selectionState.excludedIds.length
			: selectionState.selectedIds.length;

	const deleteCustomers = async () => {
		const response = await mutateDelete(selectionState);

		if (response.success) {
			toast.success(response.message);
			queryClient.invalidateQueries({
				queryKey: CUSTOMER_KEYS.GET_USER_CUSTOMERS(stringifyParams(params)),
			});
			toggleIsDeleteModalOpen();
			cancelSelection();
		}
	};

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
				<Button
					size="small"
					IconStart={TrashIcon}
					variant="soft"
					color="danger"
					onClick={toggleIsDeleteModalOpen}
				>
					حذف همه
				</Button>
			</div>

			{isDeleteModalOpen && (
				<DeleteModal
					isOpen={isDeleteModalOpen}
					onClose={toggleIsDeleteModalOpen}
					title="حذف مشتری"
					subTitle="آیا مطمئن هستید؟ این عملیات قابل بازگشت نیست."
					messageTilte={`آیا از حذف ${selectionCount} مشتری انتخاب شده مطمئن  هستید؟`}
					message="تماس‌ها، یادداشت‌ها و سفارش‌های ثبت‌شده برای این مشتریان از سیستم پاک خواهد شد."
					onConfirm={deleteCustomers}
					loading={isPending}
				/>
			)}
		</div>
	);
}

export default SelectionState;
