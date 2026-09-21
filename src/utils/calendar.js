import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function createPersianDate(options = {}) {
	return new DateObject({
		calendar: persian,
		locale: persian_fa,
		...options,
	});
}

// returns array of days starting from saturday even it's for last month
function getDaysOfMonth(month, year) {
	const firstDayOfMonth = createPersianDate({ year, month, day: 1 });

	const leadingDaysCount = firstDayOfMonth.weekDay.index;
	const totalCellsToRender = leadingDaysCount + firstDayOfMonth.month.length;

	const daysOfMonth = [];

	for (let i = -leadingDaysCount; i < totalCellsToRender - leadingDaysCount; i++) {
		const date = new DateObject(firstDayOfMonth).add(i, "day");
		daysOfMonth.push(date);
	}
	return daysOfMonth;
}

function toUTCDateString(date) {
	return new DateObject(date)
		.toUTC()
		.toDate()
		.toLocaleDateString("en-IR", { timeZone: "UTC" })
		.replaceAll("/", "-");
}

function isToday(date) {
  const today = createPersianDate()
  return today.toString() === date.toString()
}

export { getDaysOfMonth, createPersianDate, toUTCDateString, isToday };
