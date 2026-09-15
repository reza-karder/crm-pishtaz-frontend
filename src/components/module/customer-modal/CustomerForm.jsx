import { useState } from "react";
import Tabs from "../../ui/tabs/Tabs"
import CallsTab from "./calls-tab/CallsTab";
import ProductsTab from "./products-tab/ProductsTab";
import InformationTab from "./info-tab/InformationTab";

const TAB_ITEMS = [
	{ id: "information", title: "اطلاعات پایه", Component: InformationTab },
	{ id: "products", title: "محصولات", Component: ProductsTab },
	{ id: "calls", title: "تماس ها", Component: CallsTab },
];

function CustomerForm({ customerForm }) {
	const [activeTabId, setActiveTabId] = useState(TAB_ITEMS[0].id);
	const ActiveTab = TAB_ITEMS.find((tab) => tab.id === activeTabId).Component;

	return (
		<div>
			<Tabs activeTabId={activeTabId} onSelect={setActiveTabId} tabItems={TAB_ITEMS} />
			<ActiveTab customerForm={customerForm} />
		</div>
	);
}

export default CustomerForm;
