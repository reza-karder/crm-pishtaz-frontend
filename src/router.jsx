import { createBrowserRouter } from "react-router";
import SigninPage from "./components/pages/auth/SigninPage";
import WithAuth from "./components/common/auth/WithAuth";
import Layout from "./components/layout/Layout";
import { USER_LAYOUT_LINKS } from "./constants/layoutLinks";
import QueryBoundary from "./components/common/QueryBoundary";
import DashboardPage from "./components/pages/user/dashboard/DashboardPage";
import UserDashPageLoading from "./components/pages/user/dashboard/PageLoading";
import ErrorState from "./components/common/error-state/ErrorState";

const router = createBrowserRouter([
	{
		path: "/sign-in",
		Component: SigninPage,
	},
	{
		element: <WithAuth role="employee" />,
		children: [
			{
				element: <Layout links={USER_LAYOUT_LINKS} />,
				children: [
					{
						index: true,
						element: (
							<QueryBoundary
								loadingFallback={<UserDashPageLoading />}
								errorFallback={
									<ErrorState
										title="مشکلی پیش اومد. لطفاً دوباره تلاش کنید."
										subtitle="درصورت برطرف نشدن مشکل پس از چند تلاش با مدیریت تماس گیرید"
									/>
								}
							>
								<DashboardPage />
							</QueryBoundary>
						),
					},
				],
			},
		],
	},
]);

export default router;
