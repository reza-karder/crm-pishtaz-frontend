const callStatuses = ["scheduled", "done", "rejected", "unanswered"];

const callStatusOptions = [
	{ label: "برنامه ریزی شده", value: "scheduled" },
	{ label: "انجام شده", value: "done" },
	{ label: "رد شده", value: "rejected" },
	{ label: "بدون جواب", value: "unanswered" },
];

const callStatusesColor = {
	scheduled: "primary",
	done: "success",
	rejected: "danger",
	unanswered: "warning",
};

const callStatusesLabel = {
	scheduled: "برنامه ریزی شده",
	done: "انجام شده",
	rejected: "رد شده",
	unanswered: "بدون جواب",
};

export { callStatuses, callStatusesColor, callStatusOptions, callStatusesLabel };
