import Button from "../../../ui/button/Button";
import styles from "./SubList.module.css";
import PlusIcon from "../../../../assets/icons/plus.svg?react";

function SubList({ Icon, title, onAdd, children }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.header}>
				<div className={styles.header__details}>
					<Icon />
					<p className={styles.header__title}>{title}</p>
				</div>
				<Button variant="soft" IconStart={PlusIcon} size="small" onClick={onAdd}>
					افزودن
				</Button>
			</div>
			<ul>{children}</ul>
		</div>
	);
}

export default SubList;
