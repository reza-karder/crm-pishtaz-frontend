import PenIcon from "../../../../assets/icons/pen.svg?react";
import TrashIcon from "../../../../assets/icons/trash.svg?react";
import Button from "../../../ui/button/Button";
import styles from "./Actions.module.css";

function Actions() {
	return (
		<div className={styles.wrapper}>
			<Button size="small" variant="outlined" color="normal" IconStart={PenIcon}>
				ویرایش
			</Button>
			<Button size="small" color="danger" IconStart={TrashIcon}>
				حذف
			</Button>
		</div>
	);
}

export default Actions;
