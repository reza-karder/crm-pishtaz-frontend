function getToday() {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	return today;
}

function getScheduledCalls(calls) {
	const today = getToday();
	return calls.filter((call) => new Date(call.date) >= today && call.status === "scheduled");
}

function getUnresolvedCalls(calls) {
	const today = getToday();
	return calls.filter((call) => new Date(call.date) < today && call.status === "scheduled");
}

function getResolvedCalls(calls) {
	return calls.filter((call) => call.status !== "scheduled");
}

export { getResolvedCalls, getScheduledCalls, getUnresolvedCalls };
