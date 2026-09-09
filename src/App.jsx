import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./lib/queryClient";
import { RouterProvider } from "react-router";
import router from "./router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "sonner";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
			<RouterProvider router={router} />
      <Toaster position="top-center" dir="rtl" richColors closeButton />
		</QueryClientProvider>
	);
}

export default App;