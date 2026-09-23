import IconBtn from "../../../../ui/icon-btn/IconBtn"
import styles from "./JobItem.module.css" 
import PenIcon from "../../../../../assets/icons/pen.svg?react";
import TrashIcon from "../../../../../assets/icons/trash.svg?react";

function JobItem({ job }) {
  const { title } = job

  return (
  <li className={styles.job}>
			<p className={styles.job__title}>{title}</p>
			<div className={styles.job__actions}>
				<IconBtn>
					<PenIcon />
				</IconBtn>
				<IconBtn color="danger">
					<TrashIcon />
				</IconBtn>
			</div>
		</li>
  )
}

export default JobItem