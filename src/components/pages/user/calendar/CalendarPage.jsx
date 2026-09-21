import PageHeader from "../../../module/page-header/PageHeader";
import Calendar from "./calendar/Calendar";

function CalendarPage() {
	return (
		<>
			<PageHeader
				title="تقویم کاری"
				subTitle="تعداد تماس‌های هر روز را ببینید و روی روز کلیک کنید."
			/>
			<Calendar />
		</>
	);
}

export default CalendarPage;
