/**
 * this module is used for both desktop sidebar
 * and the mobile drawer
 */

import { NavLink, useNavigate } from "react-router";
import Brand from "../common/brand/Brand";
import styles from "./Sidebar.module.css";
import clsx from "clsx";
import IconBtn from "../ui/icon-btn/IconBtn";
import ExitIcon from "../../assets/icons/exit.svg?react";
import CrossIcon from "../../assets/icons/cross.svg?react";
import Skeleton from "../common/skeleton/Skeleton";
import { useGetUser } from "../../api/user/queries";
import { useSignout } from "../../api/auth/mutations";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import AUTH_KEYS from "../../api/auth/keys";

function Sidebar({ links, onClose }) {
	const { data, isPending } = useGetUser();
  const { mutateAsync: mutateSignout } = useSignout()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  
  const signout = async () => {
    const response = await mutateSignout()
    if(response?.success) {
      toast.success(response.message)
      navigate("/sign-in", { replace: true })
      queryClient.invalidateQueries({ queryKey: AUTH_KEYS.SESSION })
    }
  }

	return (
		<div className={styles.sidebar}>
			<div className={styles.header}>
				<Brand />
				<IconBtn className={styles.header__close_btn} onClick={onClose}>
					<CrossIcon />
				</IconBtn>
			</div>

			<nav className={styles.nav}>
				{links.map((link) => (
					<NavLink
						key={link.path}
						to={link.path}
						onClick={onClose}
            end
						className={({ isActive }) => clsx(styles.nav__link, isActive && styles.active)}
					>
						<link.Icon className={styles.link__icon} />
						<span className={styles.link__label}>{link.label}</span>
					</NavLink>
				))}
			</nav>

			<div className={styles.user}>
				{isPending ? (
					<Skeleton width={100} height={36} />
				) : (
					<div className={styles.user__info}>
						<span className={styles.info__avatar}>{data.user.name[0]}</span>
						<p className={styles.info__name}>{data.user.name}</p>
					</div>
				)}
				<IconBtn color="danger" onClick={signout}>
					<ExitIcon />
				</IconBtn>
			</div>
		</div>
	);
}

export default Sidebar;
