/** use this module to protect the routes
 * you must pass every time
*/

import { BeatLoader } from "react-spinners";
import { useCheckSession } from "../../../api/auth/queries";
import styles from "./WithAuth.module.css";
import { Navigate, Outlet } from "react-router";

function WithAuth({ role }) {
	const { data, isPending } = useCheckSession();

  if(!data?.success) {
    return <Navigate to="/sign-in" />
  }

  if(data.user.role !== role) {
    const path = role === "admin" ? "/admin" : "/"
    return <Navigate to={path} />
  }

	if (isPending) {
		return (
			<div className={styles.loader}>
				<BeatLoader color="var(--clr-primary)" />
			</div>
		);
	}

	return <Outlet />;
}

export default WithAuth;
