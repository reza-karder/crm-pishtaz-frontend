const ALL_OPTION = { label: "همه", value: "all" };

const STATUS_OPTIONS = [
	ALL_OPTION,
	{ label: "۲۴ ساعت اخیر", value: "24h" },
	{ label: "هفته اخیر", value: "week" },
];

const DATE_OPTIONS = [
	ALL_OPTION,
	{ label: "۲۴ ساعت اخیر", value: "24h" },
	{ label: "هفته اخیر", value: "week" },
	{ label: "ماه اخیر", value: "month" },
];

const CALL_OPTIONS = [
	ALL_OPTION,
	{ label: "دارای تماس", value: "scheduled" },
	{ label: "بدون تماس", value: "none" },
];

const SORT_OPTIONS = [
	{ label: "جدیدترین", value: "newest" },
	{ label: "قدیمی ترین", value: "oldest" },
	{ label: "بر اساس نام", value: "name" },
];

const CUSTOMER_TOOLBAR_FIELDS = [
	{
		label: "محصول خریداری شده",
		name: "purchased_product",
		id: "purchased_product",
		optionsKey: "product",
	},
	{
		label: "محصول مورد علاقه",
		name: "potential_products",
		id: "potential_products",
		optionsKey: "product",
	},
	{
		label: "شغل",
		name: "job",
		id: "job",
		optionsKey: "job",
	},
	{
		label: "وضعیت",
		name: "status",
		id: "status",
		options: STATUS_OPTIONS,
	},
	{
		label: "تاریخ افزودن",
		name: "date",
		id: "date",
		options: DATE_OPTIONS,
	},
	{
		label: "تماس ها",
		name: "call",
		id: "call",
		options: CALL_OPTIONS,
	},
];

export { CUSTOMER_TOOLBAR_FIELDS, SORT_OPTIONS, ALL_OPTION };
