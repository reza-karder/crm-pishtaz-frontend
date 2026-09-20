import styles from "./StatusSwitch.module.css";
import CheckIcon from "../../../../../assets/icons/check.svg?react";
import SnowIcon from "../../../../../assets/icons/snow.svg?react";
import clsx from "clsx";
import useToggle from "../../../../../hooks/useToggle";
import { useParams } from "react-router";
import { useGetCustomerProfile } from "../../../../../api/customers/queries";
import { useToggleCustomerStatus } from "../../../../../api/customers/mutations";
import { toast } from "sonner";

function StatusSwitch() {
	const params = useParams();
	const { data } = useGetCustomerProfile(params.customerId);
  const { mutateAsync: mutateToggleStatus } = useToggleCustomerStatus()

	const [isActive, toggleIsActive] = useToggle(data?.customer?.status === "active");

  const toggleStatus = async () => {
    const response = await mutateToggleStatus(data.customer._id)

    if(!response.success) {
      toggleIsActive()
      toast.error("مشکلی در تغییر وضعیت مشتری پیش آمده دوباره امتحان کنید")
    }
  }

  const handleToggle = () => {
    toggleIsActive()
    toggleStatus()
  }

	return (
		<button className={clsx(styles.switch, isActive && styles.active)} onClick={handleToggle}>
			<div className={clsx(styles.switch__status, styles.active_status)}>
				<CheckIcon className={styles.status__icon} />
				<span className={styles.status__label}>فعال</span>
			</div>
			<div className={clsx(styles.switch__status, styles.cold_status)}>
				<SnowIcon className={styles.status__icon} />
				<span className={styles.status__label}>غیر فعال</span>
			</div>
		</button>
	);
}

export default StatusSwitch;
