/**
 * this module is used for both user and admin layout
 * pass the links from constants to change the layout links
*/

import { Outlet } from "react-router";
import styles from "./Layout.module.css";
import Sidebar from "./Sidebar";

function Layout({ links }) {
	return (
		<main className={styles.main}>
			<aside className={styles.aside}>
				<Sidebar links={links} />
			</aside>
			<div className={styles.wrapper}>
				<button onClick={toggleIsDrawerOpen}>asdasd</button>
				<Outlet />
			</div>
		</main>
	);
}

export default Layout;
