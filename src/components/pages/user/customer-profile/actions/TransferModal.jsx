import { useState } from "react";
import { useGetActiveUsers } from "../../../../../api/user/queries";
import Skeleton from "../../../../common/skeleton/Skeleton";
import Button from "../../../../ui/button/Button";
import FormField from "../../../../ui/form-field/FormField";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../../../../ui/modal/Modal";
import styles from "./TransferModal.module.css";
import clsx from "clsx";
import useCustomForm from "../../../../../hooks/useCustomForm";
import { transferCustomerValidator } from "../../../../../utils/validators";
import { useTransferCustomer } from "../../../../../api/customers/mutations";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import CUSTOMER_KEYS from "../../../../../api/customers/keys";

function TransferModal({ isOpen, onClose, customerId }) {
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { data, isPending: isPendingUsers } = useGetActiveUsers();
	const { mutateAsync: mutateTransfer, isPending: isPendingTransfer } = useTransferCustomer();

	const handleSubmit = async (data) => {
		const response = await mutateTransfer({ destinationEmployeeId: data.userId, customerId });

		if (response.success) {
			toast.success(response.message);
			navigate("/customers");
			queryClient.invalidateQueries({ queryKey: CUSTOMER_KEYS.GET_CUSTOMER_PROFILE });
		}
	};

	const { values, getErrorMessage, setFieldValue, onSubmit } = useCustomForm(
		{ userId: "" },
		transferCustomerValidator,
		handleSubmit
	);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalHeader
				title="انتقال مشتری به کارمند دیگر"
				subTitle="کارمند مقصد را انتخاب کنید"
				onClose={onClose}
			/>
			<ModalBody>
				<FormField label="کارمند مقصد" required id="user" error={getErrorMessage("userId")}>
					{isPendingUsers ? (
						<Loading />
					) : (
						<ul className={styles.users_list}>
							{data?.users.map((user) => (
								<UserItem
									key={user._id}
									user={user}
									onSelect={() => setFieldValue("userId", user._id)}
									checked={values.userId === user._id}
								/>
							))}
						</ul>
					)}
				</FormField>
			</ModalBody>
			<ModalFooter>
				<Button onClick={onSubmit} loading={isPendingTransfer}>
					انتقال
				</Button>
				<Button variant="outlined" onClick={onClose}>
					انصراف
				</Button>
			</ModalFooter>
		</Modal>
	);
}

function Loading() {
	return (
		<div className={styles.loading}>
			<Skeleton className={styles.skeleton} height={60} />
			<Skeleton className={styles.skeleton} height={60} />
			<Skeleton className={styles.skeleton} height={60} />
		</div>
	);
}

function UserItem({ user, checked, onSelect }) {
	return (
		<li className={clsx(styles.user, checked && styles.checked)}>
			<label htmlFor={user._id} className={styles.user__label}>
				<input
					type="radio"
					name="user"
					id={user._id}
					className={styles.user__radio}
					checked={checked}
					onChange={onSelect}
				/>
				<p className={styles.user__name}>{user.name}</p>
			</label>
		</li>
	);
}

export default TransferModal;
