import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./lib/queryClient";
import { RouterProvider } from "react-router";
import router from "./router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";
import { ErrorBoundary } from "react-error-boundary";
import ErrorState from "./components/common/error-state/ErrorState";

function App() {
	return (
		<ErrorBoundary fallback={<ErrorState />}>
			<QueryClientProvider client={queryClient}>
				<ReactQueryDevtools />
				<RouterProvider router={router} />
				<Toaster position="bottom-right" dir="rtl" richColors closeButton />
			</QueryClientProvider>
		</ErrorBoundary>
	);
}

export default App;
