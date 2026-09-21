import { Link, useParams } from "react-router";
import styles from "./CallCard.module.css";
import Badge from "../../../ui/badge/Badge";
import { callStatusesColor, callStatusesLabel } from "../../../../constants/callStatus";
import IconBtn from "../../../ui/icon-btn/IconBtn";
import PenIcon from "../.../../../../../assets/icons/pen.svg?react";
import TrashIcon from "../.../../../../../assets/icons/trash.svg?react";
import NoteIcon from "../.../../../../../assets/icons/note.svg?react";
import clsx from "clsx";
import { useDeleteCall, useEditCall } from "../../../../api/call/mutations";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import CALENDAR_KEYS from "../../../../api/calendar/keys";
import { toUTCDateString } from "../../../../utils/calendar";
import useToggle from "../../../../hooks/useToggle";
import CallModal from "../../../module/customer-modal/calls-tab/CallModal";
import DeleteModal from "../../../ui/delete-modal/DeleteModal";

function CallCard({ call }) {
	const { customer, status, notes } = call;
	const params = useParams();

	const [isEditModalOpen, toggleIsEditModalOpen] = useToggle(false);
	const [isDeleteModalOpen, toggleIsDeleteModalOpen] = useToggle(false);

	const queryClient = useQueryClient();
	const { mutateAsync: mutateEditCall } = useEditCall();
	const { mutateAsync: mutateDeleteCall } = useDeleteCall();

	const syncData = () => {
		queryClient.invalidateQueries(CALENDAR_KEYS.GET_CALLS_OF_DAY(toUTCDateString(params.date)));
	};

	const editCall = async (_, callData) => {
		delete callData.customer;
		const response = await mutateEditCall(callData);

		if (response.success) {
			toast.success(response.message);
			syncData();
			toggleIsEditModalOpen();
		}
	};

	const deleteCall = async () => {
		const response = await mutateDeleteCall(call._id);

		if (response.success) {
			toast.success(response.message);
			syncData();
			toggleIsEditModalOpen();
		}
	};

	return (
		<li className={clsx("paper", styles.call)}>
			<div className={styles.call__header}>
				<div className={styles.call__info}>
					<Link to={`/customers/${customer._id}`}>{customer.name}</Link>
					<Badge color={callStatusesColor[status]}>{callStatusesLabel[status]}</Badge>
				</div>

				<div className={styles.call__actions}>
					<IconBtn onClick={toggleIsEditModalOpen}>
						<PenIcon />
					</IconBtn>
					<IconBtn color="danger" onClick={toggleIsDeleteModalOpen}>
						<TrashIcon />
					</IconBtn>
				</div>
			</div>

			{notes && (
				<div className={styles.note_wrapper}>
					<div className={styles.note__header}>
						<NoteIcon className={styles.note__icon} />
						<p className={styles.note__title}>یادداشت تماس</p>
					</div>
					<p className={styles.note__text}>{notes}</p>
				</div>
			)}

			{isEditModalOpen && (
				<CallModal
					isOpen={isEditModalOpen}
					initialValues={call}
					onClose={toggleIsEditModalOpen}
					onEdit={editCall}
				/>
			)}
			{isDeleteModalOpen && (
				<DeleteModal
					isOpen={isDeleteModalOpen}
					onConfirm={deleteCall}
					onClose={toggleIsDeleteModalOpen}
					title="حذف تماس"
					subTitle="آیا مطمئن هستید؟ این عملیات قابل بازگشت نیست."
					messageTilte={`آیا میخواهید این تماس را حذف کنید؟`}
					message="تمامی اطلاعات مربوط به این تماس از سیستم پاک خواهد شد"
				/>
			)}
		</li>
	);
}

export default CallCard;
