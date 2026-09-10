import styles from "./MobileDrawer.module.css";
import Sidebar from "./Sidebar";

function MobileDrawer({ links, onClose }) {
	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<Sidebar links={links} onClose={onClose} />
			</div>
			<div className={styles.backdrop} onClick={onClose}></div>
		</div>
	);
}

export default MobileDrawer;
