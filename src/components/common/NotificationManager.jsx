import { toast } from "sonner";
import { useGetNotifications } from "../../api/notification/query";
import { useEffect } from "react";

function hasVisitedToday() {
	const lastVisitDate = new Date(JSON.parse(localStorage.getItem("last-notification-visit")));
	const today = new Date();
	return lastVisitDate.toDateString() === today.toDateString();
}

function saveVisit() {
	const today = new Date();
	localStorage.setItem("last-notification-visit", JSON.stringify(today));
}

function createMessage(unresolvedCallsCount, callsOfdayCount) {
	if (unresolvedCallsCount && callsOfdayCount) {
		return `${unresolvedCallsCount} تماس رسیدگی نشده از روز قبل و ${callsOfdayCount} تماس برای امروز داری`;
	}

	if (unresolvedCallsCount) {
		return `${unresolvedCallsCount} تماس رسیدگی نشده از روز قبل داری`;
	}

	if (callsOfdayCount) {
		return `${callsOfdayCount} تماس برای امروز داری`;
	}

	return null;
}

function NotificationManager() {
	const { data, isSuccess } = useGetNotifications({ enabled: !hasVisitedToday() });

	useEffect(() => {
		if (isSuccess && !hasVisitedToday()) {
			const { unresolvedCalls, callsOfDay } = data.notifications;
			const message = createMessage(unresolvedCalls.length, callsOfDay.length);

			if (message) {
				toast.info(message, { duration: 10000 });
				saveVisit();
			}
		}
	}, [isSuccess, data]);

	return null;
}

export default NotificationManager;
