/** use this module to protect the routes
 * you must pass the role every time
*/

import { Navigate, Outlet, useLoaderData } from "react-router";

function WithAuth({ role }) {
	const { result } = useLoaderData();

	if (!result?.success) {
		return <Navigate to="/sign-in" />;
	}

	if (result.user.role !== role) {
		const path = role === "admin" ? "/admin" : "/";
		return <Navigate to={path} />;
	}

	return <Outlet />;
}

export default WithAuth;
