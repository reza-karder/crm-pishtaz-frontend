import styles from "./TooltipContent.module.css";

function TooltipContent({ active, payload }) {
	if (!active || !payload.length) return null;
	const firstPayload = payload[0]?.payload;

	return (
		<div className={styles.tooltip}>
			<p className={styles.tooltip__day}>{firstPayload?.label}</p>
			<p className={styles.tooltip__count}>تماس ها : {firstPayload?.y}</p>
		</div>
	);
}

export default TooltipContent;
