import Button from "../../../../ui/button/Button";
import styles from "./Actions.module.css";
import TrashIcon from "../../../../../assets/icons/trash.svg?react";
import PenIcon from "../../../../../assets/icons/pen.svg?react";
import ArrowIcon from "../../../../../assets/icons/arrow-sync.svg?react";
import MessageIcon from "../../../../../assets/icons/message.svg?react";
import StatusSwitch from "./StatusSwitch";
import { useNavigate, useParams } from "react-router";
import { useGetCustomerProfile } from "../../../../../api/customers/queries";
import useToggle from "../../../../../hooks/useToggle";
import CustomerModal from "../../../../module/customer-modal/CustomerModal";
import DeleteModal from "../../../../ui/delete-modal/DeleteModal";
import { useDeleteCustomer } from "../../../../../api/customers/mutations";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import CUSTOMER_KEYS from "../../../../../api/customers/keys";

function Actions() {
	const [isEditModalOpen, toggleEditModal] = useToggle(false);
	const [isDeleteModalOpen, toggleDeleteModal] = useToggle(false);

	const params = useParams();
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { mutateAsync: mutateDelete, isPending } = useDeleteCustomer();

	const { data } = useGetCustomerProfile(params.customerId);
	const { customer } = data || {};

	const deleteCustomer = async () => {
		const response = await mutateDelete(customer._id);

		if (response.success) {
			toast.success(response.message);
			queryClient.invalidateQueries(CUSTOMER_KEYS.GET_CUSTOMER_PROFILE(customer._id));
			navigate("/customers");
		}
	};

	return (
		<div className={styles.actions}>
			<StatusSwitch />
			<div className={styles.actions__basic}>
				<Button size="small" IconStart={MessageIcon} variant="outlined" color="normal">
					پیامک
				</Button>
				<Button size="small" IconStart={ArrowIcon} variant="outlined" color="normal">
					انتقال
				</Button>
				<Button
					onClick={toggleEditModal}
					size="small"
					IconStart={PenIcon}
					variant="outlined"
					color="normal"
				>
					ویرایش
				</Button>
				<Button onClick={toggleDeleteModal} size="small" IconStart={TrashIcon} color="danger">
					حذف
				</Button>
			</div>

			{isEditModalOpen && (
				<CustomerModal onClose={toggleEditModal} isOpen={isEditModalOpen} customer={customer} />
			)}

			{isDeleteModalOpen && (
				<DeleteModal
					isOpen={isDeleteModalOpen}
					onClose={toggleDeleteModal}
					onConfirm={deleteCustomer}
          loading={isPending}
					title="حذف مشتری"
					subTitle="آیا مطمئن هستید؟ این عملیات قابل بازگشت نیست."
					messageTilte={`آیا میخواهید ${customer.name} را حذف کنید؟`}
					message="تماس‌ها، یادداشت‌ها و سفارش‌های ثبت‌شده برای این مشتری از سیستم پاک خواهد شد."
				/>
			)}
		</div>
	);
}

export default Actions;
