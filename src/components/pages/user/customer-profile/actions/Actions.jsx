import Button from "../../../../ui/button/Button";
import styles from "./Actions.module.css";
import TrashIcon from "../../../../../assets/icons/trash.svg?react";
import PenIcon from "../../../../../assets/icons/pen.svg?react";
import ArrowIcon from "../../../../../assets/icons/arrow-sync.svg?react";
import MessageIcon from "../../../../../assets/icons/message.svg?react";
import StatusSwitch from "./StatusSwitch";

function Actions() {
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
				<Button size="small" IconStart={PenIcon} variant="outlined" color="normal">
					ویرایش
				</Button>
				<Button size="small" IconStart={TrashIcon} color="danger">
					حذف
				</Button>
			</div>
		</div>
	);
}

export default Actions;
