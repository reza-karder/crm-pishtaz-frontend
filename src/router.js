import { createBrowserRouter } from "react-router";
import SigninPage from "./components/pages/auth/SigninPage";

const router = createBrowserRouter([
  {
    path: "/sign-in",
    Component: SigninPage
  }
])

export default router