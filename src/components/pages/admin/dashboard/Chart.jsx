import { XAxis, CartesianGrid, Tooltip, LineChart, Line } from "recharts";
import styles from "./Chart.module.css";
import TooltipContent from "../../../module/call-chart-tooltip/TooltipContent";

// returns Array of {label: String, y: Number}
function generateData(calls) {
	const data = calls.map((callsOfMonth, index) => {
		const date = new Date();
		date.setMonth(date.getMonth() - index);
		const label = date.toLocaleDateString("fa-IR", { month: "long" });

		return { label, y: callsOfMonth.length };
	});
	return data.reverse();
}

function Chart({ calls = [] }) {
	const data = generateData(calls);

	return (
		<LineChart responsive data={data} className={styles.chart}>
			<CartesianGrid vertical={false} />
			<Tooltip content={TooltipContent} />
			<XAxis dataKey="label" axisLine={false} fontSize="var(--fs-xs)" interval={0} />
			<Line dataKey="y" fill="var(--clr-primary)" />
		</LineChart>
	);
}

export default Chart;
