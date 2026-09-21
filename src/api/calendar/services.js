import axiosClient from "../../lib/axiosClient";

const CALENDAR_SERVICES = {
	getCalendarCalls: (startDate, endDate) =>
		axiosClient.get(`/calendar/calls/${startDate}/${endDate}`),
  getCallsOfDay: (date) => axiosClient.get(`/calendar/${date}`)
};

export default CALENDAR_SERVICES