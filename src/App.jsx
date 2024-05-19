import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//-------------components
import RootPage from "./pages/RootPage";
import HomePage from "./pages/HomePage";
import AssetsPage from "./pages/AssetsPage";
import AboutPage from "./pages/AboutPage";
import MorePage from "./pages/MorePage";
import ProgramsPage from "./pages/ProgramsPage";
import SalePage from "./pages/SalePage";
import ErrorPage from "./pages/ErrorPage";
//-------------routes array
import LoginForm, { action as loginAction } from "./components/Form/LoginForm";
import SignupForm, {
  action as signupAction,
} from "./components/Form/SignupForm";
import VerifyForm, {
  action as verifyAction,
} from "./components/Form/VerifyForm";
import LogoutForm, {
  action as logoutAction,
} from "./components/Form/LogoutForm";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "assets", element: <AssetsPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "more", element: <MorePage /> },
      { path: "programs", element: <ProgramsPage /> },
      { path: "sale", element: <SalePage /> },
      // dddddddddddddddddddd
      { path: "login", element: <LoginForm />, action: loginAction },
      { path: "signup", element: <SignupForm />, action: signupAction },
      { path: "verify", element: <VerifyForm />, action: verifyAction },
      { path: "logout", element: <LogoutForm />, action: logoutAction },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
