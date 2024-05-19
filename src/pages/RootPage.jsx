import { Outlet, useLocation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Popup from "../components/Popup";
import HomePage from "./HomePage";
export default function RootPage() {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <MainNavigation />
      {(["/signup", "/login", "/logout", "/verify"].includes(pathname) && (
        <>
          <HomePage></HomePage>
          <Popup mode={pathname}>
            <Outlet />
          </Popup>
        </>
      )) || <Outlet></Outlet>}
    </>
  );
}
{
  /* <h1 id="bold" className="text-3xl font-bold bg-secondary ">
                    {" "}
                    تسجيل الدخول{" "}
               </h1>
               <h1 id="light" className="text-3xl   bg-secondary ">
                    تسجيل الدخول
               </h1>
               <h1 className="text-3xl font-bold bg-secondary-accent">مرحبا</h1>
               <h1 className="text-3xl  bg-primary-light">تسجيل دخول</h1>
               <h1 className="  bg-primary-lighter">مرحبا</h1>
               <h1 className="text-3xl  bg-primary-dark">مرحبا</h1>
               <h1 className="text-3xl  bg-primary-darker">مرحبا</h1> */
}
