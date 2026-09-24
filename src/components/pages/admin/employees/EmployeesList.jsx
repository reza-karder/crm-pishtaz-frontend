import { useGetAllUsers } from "../../../../api/user/queries";
import EmptyState from "../../../common/empty-state/EmptyState";
import Table from "../../../ui/table/Table";
import EmployeeRow from "./EmployeeRow";
import styles from "./EmployeesList.module.css";

const HEADS = ["نام", "نقش", "وضعیت", "تاریخ افزودن", "پرونده"];

function EmployeesList() {
	const { data } = useGetAllUsers();
	const { users: employees } = data || {};

	if (!employees?.length) {
		return (
			<div className="paper">
				<EmptyState
					title="هیچ کارمندی یافت نشده"
					subtitle="هیچ کارمنده تا به حال به سامانه اضافه نشده"
				/>
			</div>
		);
	}

	return (
		<section className="table_wrapper">
			<Table heads={HEADS} className={styles.table}>
				{employees?.map((employee) => (
					<EmployeeRow key={employee._id} employee={employee} />
				))}
			</Table>
		</section>
	);
}

export default EmployeesList;
