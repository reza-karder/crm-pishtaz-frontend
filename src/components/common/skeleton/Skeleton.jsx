import clsx from "clsx";
import styles from "./Skeleton.module.css";

function Skeleton({ className, width, height }) {
	return <span className={clsx(styles.skeleton, className)} style={{ width, height }}></span>;
}

export default Skeleton;
