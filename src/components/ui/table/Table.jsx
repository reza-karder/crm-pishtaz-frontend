import clsx from "clsx";
import styles from "./Table.module.css";

function Table({ heads, className, children }) {
	return (
		<table className={clsx(styles.table, className)}>
			<thead>
				<tr>
					{heads.map((head) => (
						<th key={head}>{head}</th>
					))}
				</tr>
			</thead>
			<tbody>{children}</tbody>
		</table>
	);
}

export function TableRow({ children }) {
	return <tr className={clsx(styles.row)}>{children}</tr>;
}

export default Table;
