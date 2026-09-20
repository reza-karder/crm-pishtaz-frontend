import clsx from "clsx";
import BackLink from "../../../common/back-link/BackLink";
import Tabs from "../../../ui/tabs/Tabs";
import Actions from "./actions/Actions";
import Avatar from "./Avatar";
import CustomerInfos from "./CustomerInfos";
import styles from "./CustomerProfile.module.css";
import { useState } from "react";

const TAB_ITEMS = [
	{ title: "محصولات", id: "products", Component: () => null },
	{ title: "تماس ها", id: "calls", Component: () => null },
	{ title: "پیام ها", id: "messages", Component: () => null },
];

function CustomerProfile() {
	const [activeTabId, setActiveTabId] = useState(TAB_ITEMS[0].id);
	const ActiveTabComponent = TAB_ITEMS.find((item) => item.id === activeTabId).Component;

	return (
		<>
			<BackLink to="/customers">بازگشت به مشتریان</BackLink>
			<Avatar />
			<Actions />
      
			<div className={styles.wrapper}>
				<CustomerInfos />
				<section className={clsx("paper", styles.tabs__section)}>
					<Tabs
						tabItems={TAB_ITEMS}
						activeTabId={activeTabId}
						onSelect={setActiveTabId}
						itemClassName={styles.tab__item}
					/>
					<ActiveTabComponent />
				</section>
			</div>
		</>
	);
}

export default CustomerProfile;
