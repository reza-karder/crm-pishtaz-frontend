import { createBrowserRouter } from "react-router";
import SigninPage from "./components/pages/auth/SigninPage";
import WithAuth from "./components/common/auth/WithAuth";
import Layout from "./components/layout/Layout";
import { ADMIN_LAYOUT_LINKS, USER_LAYOUT_LINKS } from "./constants/layoutLinks";
import QueryBoundary from "./components/common/QueryBoundary";
import DashboardPage from "./components/pages/user/dashboard/DashboardPage";
import UserDashPageLoading from "./components/pages/user/dashboard/PageLoading";
import ErrorState from "./components/common/error-state/ErrorState";
import AUTH_SERVICES from "./api/auth/services";
import CustomersPage from "./components/pages/user/customers/CustomersPage";
import CustomerProfile from "./components/pages/user/customer-profile/CustomerProfile";
import CustomerProfileLoading from "./components/pages/user/customer-profile/Loading";
import CalendarPage from "./components/pages/user/calendar/CalendarPage";
import CalendarDayPage from "./components/pages/user/calendar-day/CalendarDayPage";
import NotificationManager from "./components/common/NotificationManager";
import NotificationPage from "./components/pages/user/notification/NotificationPage";
import NotificationPageLoading from "./components/pages/user/notification/Loading";
import ProfilePage from "./components/pages/public/profile/ProfilePage";
import ProfilePageLoading from "./components/pages/public/profile/Loading";
import ProductsPages from "./components/pages/admin/products/ProductsPages";
import JobsPage from "./components/pages/admin/jobs/JobsPage";
import AdminDashboardPage from "./components/pages/admin/dashboard/DashboardPage";

async function sessionLoader() {
	const result = await AUTH_SERVICES.checkSession();
	return { result };
}

const userLayout = () => (
	<>
		<Layout links={USER_LAYOUT_LINKS} />
		<NotificationManager />
	</>
);

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
		element: <CalendarPage />,
	},
	{
		path: "/calendar/:date",
		element: <CalendarDayPage />,
	},
	{
		path: "/notifications",
		element: (
			<QueryBoundary loadingFallback={<NotificationPageLoading />} errorFallback={<ErrorState />}>
				<NotificationPage />
			</QueryBoundary>
		),
	},
	{
		path: "/profile",
		element: (
			<QueryBoundary loadingFallback={<ProfilePageLoading />} errorFallback={<ErrorState />}>
				<ProfilePage />
			</QueryBoundary>
		),
	},
];

const adminRoutes = [
	{
		path: "/admin/profile",
		element: (
			<QueryBoundary loadingFallback={<ProfilePageLoading />} errorFallback={<ErrorState />}>
				<ProfilePage />
			</QueryBoundary>
		),
	},
  {
    path: "/admin/products",
    element: <ProductsPages />
  },
  {
    path: "/admin/jobs",
    element: <JobsPage />
  },
  {
    path: "/admin",
    element: <AdminDashboardPage />
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
						Component: userLayout,
						children: userRoutes,
					},
				],
			},
      {
        element: <WithAuth role="admin" />,
        loader: sessionLoader,
        children: [
          {
            element: <Layout links={ADMIN_LAYOUT_LINKS} />,
            children: adminRoutes
          }
        ]
      }
		],
	},
]);

export default router;
