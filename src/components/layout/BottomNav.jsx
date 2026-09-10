import { NavLink } from "react-router";
import styles from "./BottomNav.module.css";
import clsx from "clsx";

function BottomNav({ links }) {
	return (
		<nav className={styles.nav}>
			{links.map((link) => (
				<NavLink
					key={link.path}
					to={link.path}
					className={({ isActive }) => clsx(styles.nav__link, isActive && styles.active)}
				>
					<link.Icon className={styles.link__icon} />
					<span className={styles.link__label}>{link.label}</span>
				</NavLink>
			))}
		</nav>
	);
}

export default BottomNav;
