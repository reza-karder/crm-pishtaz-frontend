import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./lib/queryClient";
import { RouterProvider } from "react-router";
import router from "./router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
