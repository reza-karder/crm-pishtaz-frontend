import { useNavigate } from "react-router";
import styles from "./DeleteModal.module.css";
import clsx from "clsx";
import { useGetActiveUsers } from "../../../../api/user/queries";
import useCustomForm from "../../../../hooks/useCustomForm";
import { deleteEmployeeSchema } from "../../../../utils/validators";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../../../ui/modal/Modal";
import FormField from "../../../ui/form-field/FormField";
import Button from "../../../ui/button/Button";
import Skeleton from "../../../common/skeleton/Skeleton";
import { useDeleteEmployee } from "../../../../api/user/mutation";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import USER_KEYS from "../../../../api/user/keys";

function DeleteModal({ isOpen, onClose, employeeId }) {
	const navigate = useNavigate();

  const queryClient = useQueryClient()
	const { mutateAsync: mutateDeleteEmployee, isPending } = useDeleteEmployee();
	const { data, isPending: isPendingUsers } = useGetActiveUsers();
  const users = data?.users?.filter(user => user._id !== employeeId) || []

	const handleSubmit = async (formData) => {
		const data = { substituteEmployeeId: formData.substituteEmployeeId, employeeId };
		const response = await mutateDeleteEmployee(data);

		if (response.success) {
			toast.success(response.message);
			navigate("/admin/employees");
      queryClient.invalidateQueries({ queryKey: USER_KEYS.GET_ACTIVE_USERS })
      onClose()
		}
	};

	const { values, getErrorMessage, setFieldValue, onSubmit } = useCustomForm(
		{ substituteEmployeeId: "" },
		deleteEmployeeSchema,
		handleSubmit
	);

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalHeader
				title="انتقال مشتریان به کارمند دیگر"
				subTitle="برای حذف این کارمند باید انتخاب کنید که مشتریان آن به چه کسی انتقال داده شود"
				onClose={onClose}
			/>
			<ModalBody>
				<FormField label="کارمند مقصد" required id="user" error={getErrorMessage("substituteEmployeeId")}>
					{isPendingUsers ? (
						<Loading />
					) : (
						<ul className={styles.users_list}>
							{users.map((user) => (
								<UserItem
									key={user._id}
									user={user}
									onSelect={() => setFieldValue("substituteEmployeeId", user._id)}
									checked={values.substituteEmployeeId === user._id}
								/>
							))}
						</ul>
					)}
				</FormField>
			</ModalBody>
			<ModalFooter>
				<Button type="submit" onClick={onSubmit} loading={isPending}>
					حذف
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

export default DeleteModal;
