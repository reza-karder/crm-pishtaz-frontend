import { useState } from "react";
import useToggle from "../../../../hooks/useToggle";
import SubList from "../sub-list/SubList";
import SubItem from "../sub-list/SubItem";
import { callStatusesColor, callStatusesLabel } from "../../../../constants/callStatus";
import Badge from "../../../ui/badge/Badge";
import CallModal from "./CallModal";
import PhoneIcon from "../../../../assets/icons/phone.svg?react"


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
    addCall(...args)
    toggleIsModalOpen()
  }

  const handleEdit = (...args) => {
    editCall(...args)
    toggleIsModalOpen()
  }

	return (
		<div>
			<SubList title="تماس‌ها" Icon={PhoneIcon} onAdd={openAddModal}>
				{values.calls.map((call) => (
					<SubItem
						key={call.id}
						onDelete={() => deleteCall(call.key)}
						onEdit={() => openEditModal(call)}
						title={new Date(call.date).toLocaleDateString("fa-IR")}
					>
						<Badge color={callStatusesColor[call.status]}>{callStatusesLabel[call.status]}</Badge>
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
