import { Link } from "react-router";
import styles from "./BackLink.module.css";
import ArrowIcon from "../../../assets/icons/arrow-right.svg?react";

function BackLink({ children, to }) {
	return (
		<Link to={to} className={styles.link}>
			<ArrowIcon className={styles.icon} />
			{children}
		</Link>
	);
}

export default BackLink;
