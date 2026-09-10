import styles from "./Header.module.css";
import MenuLogo from "../../assets/icons/menu.svg?react";
import IconBtn from "../ui/icon-btn/IconBtn";
import Brand from "../common/brand/Brand";

function Header({ toggleDrawer }) {
	return (
		<header className={styles.header}>
			<Brand />
			<IconBtn onClick={toggleDrawer} className={styles.drawer_btn}>
				<MenuLogo />
			</IconBtn>
		</header>
	);
}

export default Header;
