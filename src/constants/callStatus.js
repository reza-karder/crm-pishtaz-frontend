const CALL_STATUS = ["scheduled", "done", "rejected", "unanswered"];

const CALL_STATUS_OPTIONS = [
	{ label: "برنامه ریزی شده", value: "scheduled" },
	{ label: "انجام شده", value: "done" },
	{ label: "رد شده", value: "rejected" },
	{ label: "بدون جواب", value: "unanswered" },
];

const CALL_STATUS_COLORS = {
	scheduled: "primary",
	done: "success",
	rejected: "danger",
	unanswered: "warning",
};

const CALL_STATUS_LABELS = {
	scheduled: "برنامه ریزی شده",
	done: "انجام شده",
	rejected: "رد شده",
	unanswered: "بدون جواب",
};

export { CALL_STATUS, CALL_STATUS_COLORS, CALL_STATUS_OPTIONS, CALL_STATUS_LABELS };
