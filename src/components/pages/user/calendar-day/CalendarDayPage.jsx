import { useParams } from "react-router";
import BackLink from "../../../common/back-link/BackLink";
import PageHeader from "../../../module/page-header/PageHeader";
import { createPersianDate } from "../../../../utils/calendar";
import { useState } from "react";
import StatusFilter from "./StatusFilter";
import { useGetCallsOfDay } from "../../../../api/calendar/queries";
import Loading from "./Loading";
import CallsList from "./CallsList";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import DateObject from "react-date-object";
import { toPersianDateString } from "../../../../utils/utils";

function CalendarDayPage() {
	useDocumentTitle("تقویم");

	const { date } = useParams();
	const [status, setStatus] = useState("all");

	const pageTitle = createPersianDate({
		format: "",
		date: toPersianDateString(date),
	}).format("dddd DD MMMM YYYY");

	const { data, isPending } = useGetCallsOfDay(date);
	const calls =
		data?.calls?.filter((call) => (status === "all" ? true : call.status === status)) || [];

	return (
		<>
			<BackLink to="/calendar">بازگشت به تقویم</BackLink>
			<PageHeader title={pageTitle} subTitle="تماس های ثبت شده برای امروز" />
			<StatusFilter status={status} onSelect={setStatus} />
			{isPending ? <Loading /> : <CallsList calls={calls} />}
		</>
	);
}

export default CalendarDayPage;
