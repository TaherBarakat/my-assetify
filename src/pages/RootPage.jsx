import { Outlet, useLocation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Popup from "../components/Popup";
import HomePage from "./HomePage";
import DummyAuthCtxProvider from "../store_/dummyAuthContext";
import { useEffect } from "react";
import { getAuthToken, setRefreshTokenTimer } from "../utils/auth";

export default function RootPage() {
  const { pathname } = useLocation();
  const token = getAuthToken();

  useEffect(() => {
    console.log("rootUseEffect");
    let timer;
    if (getAuthToken()) {
      timer = setRefreshTokenTimer();
    }

    return () => clearInterval(timer);
  }, [token]);
  return (
    <>
      <DummyAuthCtxProvider>
        <MainNavigation />
        {([
          "/my-assetify/signup",
          "/my-assetify/login",
          "/my-assetify/logout",
          "/my-assetify/verify",
        ].includes(pathname) && (
          <>
            <HomePage></HomePage>
            <Popup mode={pathname}>
              <Outlet />
            </Popup>
          </>
        )) || <Outlet></Outlet>}
      </DummyAuthCtxProvider>
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
