const USER_ROLES = ["admin", "employee"]
const USER_STATUS = ["active", "ban"]

const USER_STATUS_LABELS = {
	active: "فعال",
	ban: "مسدود",
};

const USER_STATUS_COLORS = {
	active: "success",
	ban: "mute",
};

const USER_STATUS_OPTIONS = [
	{ label: "فعال", value: "active" },
	{ label: "مسدود", value: "ban" },
];

const USER_ROLE_LABELS = {
	employee: "کارمند",
	admin: "ادمین",
};

const USER_ROLE_OPTIONS = [
	{ label: "ادمین", value: "admin" },
	{ label: "کارمند", value: "employee" },
];

export {
	USER_ROLE_LABELS,
	USER_STATUS_COLORS,
	USER_STATUS_LABELS,
	USER_ROLE_OPTIONS,
	USER_STATUS_OPTIONS,
  USER_ROLES,
  USER_STATUS
};
