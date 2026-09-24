import { useState } from "react";
import useToggle from "../../../../hooks/useToggle";
import SubList from "../sub-list/SubList";
import SubItem from "../sub-list/SubItem";
import { CALL_STATUS_COLORS, CALL_STATUS_LABELS } from "../../../../constants/callStatus";
import Badge from "../../../ui/badge/Badge";
import CallModal from "./CallModal";
import PhoneIcon from "../../../../assets/icons/phone.svg?react";
import { toPersianDateString } from "../../../../utils/utils";

function CallsTab({ customerForm }) {
	const { editCall, addCall, deleteCall, values } = customerForm;
	const [isModalOpen, toggleIsModalOpen] = useToggle(false);
	const [editingCall, setEditingCall] = useState(null);

	const openAddModal = () => {
		setEditingCall(null);
		toggleIsModalOpen();
	};

	const openEditModal = (call) => {
		setEditingCall(call);
		toggleIsModalOpen();
	};

	const handleAdd = (...args) => {
		addCall(...args);
		toggleIsModalOpen();
	};

	const handleEdit = (...args) => {
		editCall(...args);
		toggleIsModalOpen();
	};

	return (
		<div>
			<SubList title="تماس‌ها" Icon={PhoneIcon} onAdd={openAddModal}>
				{values.calls.map((call) => (
					<SubItem
						key={call.id}
						onDelete={() => deleteCall(call.key)}
						onEdit={() => openEditModal(call)}
						title={toPersianDateString(call.date)}
					>
						<Badge color={CALL_STATUS_COLORS[call.status]}>{CALL_STATUS_LABELS[call.status]}</Badge>
					</SubItem>
				))}
			</SubList>

			{isModalOpen && (
				<CallModal
					isOpen={isModalOpen}
					onClose={toggleIsModalOpen}
					initialValues={editingCall}
					onAdd={handleAdd}
					onEdit={handleEdit}
				/>
			)}
		</div>
	);
}

export default CallsTab;
