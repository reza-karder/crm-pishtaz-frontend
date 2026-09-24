import { BarChart, Bar, XAxis, CartesianGrid, Tooltip } from "recharts";
import styles from "./Chart.module.css";
import TooltipContent from "../../../module/call-chart-tooltip/TooltipContent";

// returns Array of {label: String, y: Number}
function generateData(callsOfLast7Days) {
  const data = Array.from({ length: 7 }, (_, index) => {
    const callsOfDay = callsOfLast7Days[index] || [];

    const date = new Date();
    date.setDate(date.getDate() - index);
    const label = date.toLocaleDateString('fa-IR', { weekday: 'long' });

    return { label, y: callsOfDay.length };
  });

  return data.reverse();
}

function Chart({ callsOfLast7Days }) {
  const data = generateData(callsOfLast7Days)

	return (
		<BarChart responsive data={data} className={styles.chart}>
			<CartesianGrid vertical={false} />
			<Tooltip content={TooltipContent} />
			<XAxis dataKey="label" axisLine={false} fontSize="var(--fs-xs)" />
			<Bar dataKey="y" radius={[10, 10, 0, 0]} fill="var(--clr-primary)" />
		</BarChart>
	);
}

export default Chart;
