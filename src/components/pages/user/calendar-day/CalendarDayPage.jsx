import { useParams } from "react-router";
import BackLink from "../../../common/back-link/BackLink";
import PageHeader from "../../../module/page-header/PageHeader";
import styles from "./CalendarDayPage.module.css";
import { createPersianDate } from "../../../../utils/calendar";
import { useState } from "react";
import StatusFilter from "./StatusFilter";

function CalendarDayPage() {
	const { date } = useParams();
	const [status, setStatus] = useState("all");

	const pageTitle = createPersianDate({ format: "dddd DD MMMM YYYY", ...date }).format();

	return (
		<>
			<BackLink to="/calendar">بازگشت به تقویم</BackLink>
			<PageHeader title={pageTitle} subTitle="تماس های ثبت شده برای امروز" />
      <StatusFilter status={status} onSelect={setStatus} />
			
		</>
	);
}

export default CalendarDayPage;
