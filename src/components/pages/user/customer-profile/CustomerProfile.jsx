import clsx from "clsx";
import BackLink from "../../../common/back-link/BackLink";
import Tabs from "../../../ui/tabs/Tabs";
import Actions from "./actions/Actions";
import Avatar from "./Avatar";
import CustomerInfos from "./CustomerInfos";
import styles from "./CustomerProfile.module.css";
import { useState } from "react";
import ProductsTab from "./products-tab/ProductsTab";
import CallsTab from "./calls-tab/CallsTab";
import useDocumentTitle from "../../../../hooks/useDocumentTitle";
import { useParams } from "react-router";
import { useGetCustomerProfile } from "../../../../api/customers/queries";
import EmptyState from "../../../common/empty-state/EmptyState";

const TAB_ITEMS = [
	{ title: "محصولات", id: "products", Component: ProductsTab },
	{ title: "تماس ها", id: "calls", Component: CallsTab },
	{ title: "پیام ها", id: "messages", Component: () => null },
];

function CustomerProfile() {
	useDocumentTitle("پروفایل مشتری");
  
	const params = useParams();
	const { data, isFetching } = useGetCustomerProfile(params.customerId);

	const [activeTabId, setActiveTabId] = useState(TAB_ITEMS[0].id);
	const ActiveTabComponent = TAB_ITEMS.find((item) => item.id === activeTabId).Component;

	if (!isFetching && !data?.customer) {
		return (
			<EmptyState
				className="paper"
				title="هیچ مشتری یافت نشد"
				subtitle="مشتری مورد نظر یافت نشده یا برای شما ثبت نشده"
			/>
		);
	}

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
