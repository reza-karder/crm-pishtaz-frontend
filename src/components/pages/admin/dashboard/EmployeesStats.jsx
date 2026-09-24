import { useGetAdminStats } from "../../../../api/stats/query";
import styles from "./EmployeesStats.module.css";

function getCallsCount(employee) {
	return employee.customers.reduce((total, customer) => {
		const doneCalls = customer.calls.filter((call) => call.status === "done");
		return doneCalls.length + total;
	}, 0);
}

function EmployeesStats() {
	const { data } = useGetAdminStats();

	return (
		<ul className={styles.employees_list}>
			{data?.employees.map((employee) => (
				<li key={employee._id} className={styles.employee}>
					<p className={styles.employee__name}>{employee.name}</p>
						<p className={styles.stat}>{employee.customers.length} مشتری - {getCallsCount(employee)} تماس</p>
				</li>
			))}
		</ul>
	);
}

export default EmployeesStats;
