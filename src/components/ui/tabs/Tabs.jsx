import clsx from "clsx";
import styles from "./Tabs.module.css";

/**
 * @param {Object[]} tabItems
 * @param {title} tabItems[].title - title to show
 * @param {id} tabItems[].id - tab id
 */
function Tabs({ tabItems, activeTabId, onSelect, itemClassName }) {
	return (
		<ul className={styles.tabs}>
			{tabItems.map((tab) => (
				<li
					key={tab.id}
					onClick={() => onSelect(tab.id)}
					className={clsx(styles.tab_item, activeTabId === tab.id && styles.active, itemClassName)}
				>
					{tab.title}
				</li>
			))}
		</ul>
	);
}

export default Tabs;
