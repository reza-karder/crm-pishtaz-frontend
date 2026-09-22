import { CALL_STATUS_OPTIONS } from "../../../../constants/callStatus";
import Button from "../../../ui/button/Button";
import styles from "./StatusFilter.module.css";

const STATUS_OPTIONS = [{ label: "همه", value: "all" }, ...CALL_STATUS_OPTIONS];

function StatusFilter({ status, onSelect }) {
	return (
		<div className={styles.status_wrapper}>
			<ul className={styles.status_list}>
				{STATUS_OPTIONS.map((option) => (
					<li key={option.value}>
						<Button
							size="small"
							onClick={() => onSelect(option.value)}
							variant={status === option.value ? "contained" : "outlined"}
						>
							{option.label}
						</Button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default StatusFilter;
