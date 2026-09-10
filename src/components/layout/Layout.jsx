/**
 * this module is used for both user and admin layout
 * pass the links from constants to change the layout links
*/

import { Outlet } from "react-router";
import styles from "./Layout.module.css";
import Sidebar from "./Sidebar";
import useToggle from "../../hooks/useToggle";
import MobileDrawer from "./MobileDrawer";
import Header from "./Header";
import BottomNav from "./BottomNav";

function Layout({ links }) {
	const [isDrawerOpen, toggleIsDrawerOpen] = useToggle(false);

	return (
		<main className={styles.main}>
      <Header toggleDrawer={toggleIsDrawerOpen} />
			
			<aside className={styles.aside}>
				<Sidebar links={links} />
			</aside>
			<div className={styles.wrapper}>
				<button onClick={toggleIsDrawerOpen}>asdasd</button>
				<Outlet />
			</div>

      <BottomNav links={links.slice(0, 5)} />
      {isDrawerOpen && (
				<MobileDrawer links={links} isOpen={isDrawerOpen} onClose={toggleIsDrawerOpen} />
			)}
		</main>
	);
}

export default Layout;
