import { useParams } from "react-router";
import { useGetEmployee } from "../../../../api/user/queries";
import { toPersianDateString } from "../../../../utils/utils";
import PageHeader from "../../../module/page-header/PageHeader";
import styles from "./EmployeeProfile.module.css";
import BackLink from "../../../common/back-link/BackLink";
import Actions from "./Actions";

function EmployeeProfile() {
	const params = useParams();
	const { data } = useGetEmployee(params.employeeId);
	const { user } = data || {};

	return (
		<>
			<BackLink to="/admin/employees">بازگشت به کارمندان</BackLink>
			<PageHeader title={user?.name} subTitle={`عضویت از ${toPersianDateString(user?.createdAt)}`}>
				<Actions />
			</PageHeader>
		</>
	);
}

export default EmployeeProfile;
