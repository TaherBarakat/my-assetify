import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import Popup from "../components/Popup";

export default function RootPage() {
  return (
    <>
      <MainNavigation />
      <Outlet></Outlet>

      {/* <Popup mode={"login"}></Popup> */}
      {/* <Popup mode={"verify"}></Popup> */}
      {/* <Popup mode={"logout"}></Popup> */}
      <Popup mode={"signup"}></Popup>
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
