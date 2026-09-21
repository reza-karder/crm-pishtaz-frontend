import { useQuery } from "@tanstack/react-query";
import CALENDAR_KEYS from "./keys";
import CALENDAR_SERVICES from "./services";

const useGetCalendarCalls = (startDate, endDate) => {
	return useQuery({
		queryKey: CALENDAR_KEYS.GET_CALENDAR_CALLS(startDate, endDate),
		queryFn: () => CALENDAR_SERVICES.getCalendarCalls(startDate, endDate),
	});
};

const useGetCallsOfDay = (date) => {
	return useQuery({
		queryKey: CALENDAR_KEYS.GET_CALLS_OF_DAY(date),
		queryFn: () => CALENDAR_SERVICES.getCallsOfDay(date),
	});
};

export { useGetCalendarCalls, useGetCallsOfDay };
