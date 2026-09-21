import { createBrowserRouter } from "react-router";
import SigninPage from "./components/pages/auth/SigninPage";
import WithAuth from "./components/common/auth/WithAuth";
import Layout from "./components/layout/Layout";
import { USER_LAYOUT_LINKS } from "./constants/layoutLinks";
import QueryBoundary from "./components/common/QueryBoundary";
import DashboardPage from "./components/pages/user/dashboard/DashboardPage";
import UserDashPageLoading from "./components/pages/user/dashboard/PageLoading";
import ErrorState from "./components/common/error-state/ErrorState";
import AUTH_SERVICES from "./api/auth/services";
import CustomersPage from "./components/pages/user/customers/CustomersPage";
import CustomerProfile from "./components/pages/user/customer-profile/CustomerProfile";
import CustomerProfileLoading from "./components/pages/user/customer-profile/Loading";
import CalendarPage from "./components/pages/user/calendar/CalendarPage";

async function sessionLoader() {
	const result = await AUTH_SERVICES.checkSession();
	return { result };
}

const userRoutes = [
	{
		index: true,
		element: (
			<QueryBoundary loadingFallback={<UserDashPageLoading />} errorFallback={<ErrorState />}>
				<DashboardPage />
			</QueryBoundary>
		),
	},
	{
		path: "/customers",
		element: <CustomersPage />,
	},
	{
		path: "/customers/:customerId",
		element: (
			<QueryBoundary loadingFallback={<CustomerProfileLoading />} errorFallback={<ErrorState />}>
				<CustomerProfile />
			</QueryBoundary>
		),
	},
  {
    path: "/calendar",
    element: <CalendarPage />
  }
];

const router = createBrowserRouter([
	{
		errorElement: <ErrorState />,
		children: [
			{
				path: "/sign-in",
				Component: SigninPage,
				loader: sessionLoader,
			},
			{
				element: <WithAuth role="employee" />,
				loader: sessionLoader,
				children: [
					{
						element: <Layout links={USER_LAYOUT_LINKS} />,
						children: userRoutes,
					},
				],
			},
		],
	},
]);

export default router;
