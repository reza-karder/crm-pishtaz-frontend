import { useState } from "react";
import styles from "./Calendar.module.css";
import { getDaysOfMonth, createPersianDate, toUTCDateString, isToday } from "../../../../../utils/calendar";
import IconBtn from "../../../../ui/icon-btn/IconBtn";
import ArrowRightIcon from "../../../../../assets/icons/tailless-arrow-right.svg?react";
import ArrowLeftIcon from "../../../../../assets/icons/tailless-arrow-left.svg?react";
import clsx from "clsx";
import DateObject from "react-date-object";
import { useGetCalendarCalls } from "../../../../../api/calendar/queries";
import Skeleton from "../../../../common/skeleton/Skeleton";
import GridItem from "./GridItem";

const weekDaysDesktop = ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهار شنبه", "پنج شنبه", "جمعه"];
const weekDaysMobile = ["ش", "ی", "د", "س", "چ", "پ", "ج"];

function Calendar() {
	const [date, setDate] = useState(createPersianDate);
	const daysOfMonth = getDaysOfMonth(date.month.number, date.year);

	const startDate = toUTCDateString(daysOfMonth[0]);
	const endDate = toUTCDateString(daysOfMonth[daysOfMonth.length - 1]);
	const { data, isPending } = useGetCalendarCalls(startDate, endDate);

	const addToMonth = (amount) => {
		setDate((prevValue) => {
			return new DateObject(prevValue.add(amount, "month"));
		});
	};

	return (
		<div className={clsx("paper", styles.calendar)}>
			<div className={styles.calendar__header}>
				<IconBtn onClick={() => addToMonth(-1)}>
					<ArrowRightIcon />
				</IconBtn>
				<p className={styles.calendar__title}>
					{date.month.name} {date.year}
				</p>
				<IconBtn onClick={() => addToMonth(+1)}>
					<ArrowLeftIcon />
				</IconBtn>
			</div>

			<div className={clsx(styles.calendar__week_days, styles.desktop)}>
				{weekDaysDesktop.map((day) => (
					<p key={day} className={styles.week_day}>
						{day}
					</p>
				))}
			</div>

			<div className={clsx(styles.calendar__week_days, styles.mobile)}>
				{weekDaysMobile.map((day) => (
					<p key={day} className={styles.week_day}>
						{day}
					</p>
				))}
			</div>

			<nav className={styles.calendar__grid}>
				{daysOfMonth.map((day, index) =>
					isPending ? (
						<Skeleton className={styles.grid__sekeleton} />
					) : (
						<GridItem
							key={day.toString()}
							to={toUTCDateString(day)}
							day={day.day}
							isToday={isToday(day )}
							callsCount={data?.calls[index]?.length}
						/>
					)
				)}
			</nav>
		</div>
	);
}

export default Calendar;
