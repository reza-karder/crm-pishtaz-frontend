import clsx from "clsx";
import styles from "./SelectionState.module.css";
import Button from "../../../ui/button/Button";
import TrashIcon from "../../../../assets/icons/trash.svg?react";
import MessageIcon from "../../../../assets/icons/message.svg?react";
import CrossIcon from "../../../../assets/icons/cross.svg?react";

function SelectionState() {
	return (
		<div className={clsx("paper", styles.selection)}>
      <p className={styles.selection__count}>1 مشتری انتخاب شده</p>
			<div className={styles.selection__actions}>
				<Button size="small" IconStart={CrossIcon} variant="outlined" color="normal">
					لغو انتخاب
				</Button>
				<Button size="small" IconStart={MessageIcon}>
					ارسال پیام
				</Button>
				<Button size="small" IconStart={TrashIcon} color="danger">
					حذف همه
				</Button>
			</div>
		</div>
	);
}

export default SelectionState;
