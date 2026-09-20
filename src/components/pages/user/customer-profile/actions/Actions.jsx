import Button from "../../../../ui/button/Button";
import styles from "./Actions.module.css";
import TrashIcon from "../../../../../assets/icons/trash.svg?react";
import PenIcon from "../../../../../assets/icons/pen.svg?react";
import ArrowIcon from "../../../../../assets/icons/arrow-sync.svg?react";
import MessageIcon from "../../../../../assets/icons/message.svg?react";
import StatusSwitch from "./StatusSwitch";
import { useParams } from "react-router";
import { useGetCustomerProfile } from "../../../../../api/customers/queries";
import useToggle from "../../../../../hooks/useToggle";
import CustomerModal from "../../../../module/customer-modal/CustomerModal";

function Actions() {
  const [isEditModalOpen, toggleeditModal] = useToggle(false)

  const params = useParams()
  const { data } = useGetCustomerProfile(params.customerId)


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
				<Button onClick={toggleeditModal} size="small" IconStart={PenIcon} variant="outlined" color="normal">
					ویرایش
				</Button>
				<Button size="small" IconStart={TrashIcon} color="danger">
					حذف
				</Button>
			</div>
      {isEditModalOpen && <CustomerModal onClose={toggleeditModal} isOpen={isEditModalOpen} customer={data?.customer} />}
		</div>
	);
}

export default Actions;
