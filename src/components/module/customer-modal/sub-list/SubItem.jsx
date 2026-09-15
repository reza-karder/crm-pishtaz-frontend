import styles from "./SubItem.module.css";
import PenIcon from "../../../../assets/icons/pen.svg?react";
import TrashIcon from "../../../../assets/icons/trash.svg?react";
import IconBtn from "../../../ui/icon-btn/IconBtn";

function SubItem({ title, onDelete, onEdit, children }) {
	return (
		<li className={styles.item}>
			<p className={styles.item__title}>{title}</p>
			<div className={styles.item__actions}>
				{children}
				<IconBtn onClick={onEdit}>
					<PenIcon />
				</IconBtn>
				<IconBtn color="danger" onClick={onDelete}>
					<TrashIcon />
				</IconBtn>
			</div>
		</li>
	);
}

export default SubItem;
