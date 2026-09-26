import { useParams } from "react-router";
import { useGetEmployee } from "../../../../api/user/queries";
import { toPersianDateString } from "../../../../utils/utils";
import PageHeader from "../../../module/page-header/PageHeader";
import styles from "./EmployeeProfile.module.css";
import BackLink from "../../../common/back-link/BackLink";
import Actions from "./Actions";
import StatCard from "../../../module/stat-card/StatCard";
import PersonIcon from "../../../../assets/icons/person.svg?react";
import PhoneIcon from "../../../../assets/icons/phone.svg?react";
import EmployeeInfo from "./EmployeeInfo";

function EmployeeProfile() {
	const params = useParams();
	const { data } = useGetEmployee(params.employeeId);
	const { user, stats } = data || {};

	return (
		<>
			<BackLink to="/admin/employees">بازگشت به کارمندان</BackLink>
			<PageHeader title={user?.name} subTitle={`عضویت از ${toPersianDateString(user?.createdAt)}`}>
				<Actions />
			</PageHeader>

			<section className={styles.stats_sec}>
				<StatCard
					title="تعداد مشتریان"
					value={stats.customersCount}
					Icon={PersonIcon}
					color="success"
				/>
				<StatCard
					title="تعداد تماس های موفق"
					value={stats.doneCallsCount}
					Icon={PhoneIcon}
				/>
				<StatCard
					title="تعداد کل تماس ها"
					value={stats.doneCallsCount}
					Icon={PhoneIcon}
          color="warning"
				/>
			</section>

      <div className={styles.wrapper}>
        <EmployeeInfo />
      </div>
		</>
	);
}

export default EmployeeProfile;
