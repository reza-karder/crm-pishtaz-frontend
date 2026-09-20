function getScheduledCalls(calls) {
	const today = new Date();
	return calls.filter(
		(call) => new Date(call.date).getDate() >= today.getDate() && call.status === "scheduled"
	);
}

function getUnresolvedCalls(calls) {
	const today = new Date();
	return calls.filter(
		(call) => new Date(call.date).getDate() < today.getDate() && call.status === "scheduled"
	);
}

function getResolvedCalls(calls) {
  console.log({calls});
	return calls.filter((call) => call.status !== "scheduled");
}

export { getResolvedCalls, getScheduledCalls, getUnresolvedCalls };
