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
import LoginForm from "./components/Form/LoginForm";
import SignupForm from "./components/Form/SignupForm";
import LogoutForm from "./components/Form/LogoutForm";
import VerifyForm from "./components/Form/VerifyForm";
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
      { path: "login", element: <LoginForm /> },
      { path: "signup", element: <SignupForm /> },
      { path: "verify", element: <VerifyForm /> },
      { path: "logout", element: <LogoutForm /> },
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
