import { Link, useParams } from "react-router";
import styles from "./CallCard.module.css";
import Badge from "../../../ui/badge/Badge";
import { callStatusesColor, callStatusesLabel } from "../../../../constants/callStatus";
import IconBtn from "../../../ui/icon-btn/IconBtn";
import PenIcon from "../.../../../../../assets/icons/pen.svg?react";
import TrashIcon from "../.../../../../../assets/icons/trash.svg?react";
import NoteIcon from "../.../../../../../assets/icons/note.svg?react";
import clsx from "clsx";
import { useEditCall } from "../../../../api/call/mutations";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import CALENDAR_KEYS from "../../../../api/calendar/keys";
import { toUTCDateString } from "../../../../utils/calendar";
import useToggle from "../../../../hooks/useToggle";
import CallModal from "../../../module/customer-modal/calls-tab/CallModal";

function CallCard({ call }) {
	const { customer, status, notes } = call;
	const params = useParams();

	const [isEditModalOpen, toggleIsEditModalOpen] = useToggle(false);

	const queryClient = useQueryClient();
	const { mutateAsync: mutateeditCall } = useEditCall();

	const syncData = () => {
		queryClient.invalidateQueries(CALENDAR_KEYS.GET_CALLS_OF_DAY(toUTCDateString(params.date)));
	};

	const editCall = async (_,callData) => {
    delete callData.customer
		const response = await mutateeditCall(callData);

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
					<IconBtn color="danger">
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
		</li>
	);
}

export default CallCard;
