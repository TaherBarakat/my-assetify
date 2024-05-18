import "./Popup.css";
import { useRef } from "react";

import { useEffect } from "react";
import LoginForm from "./Form/LoginForm";
import LogoutForm from "./Form/LogoutForm";
import VerifyForm from "./Form/VerifyForm";
import SignupForm from "./Form/SignupForm";
export default function popup({ mode }) {
  const dialog = useRef();

  useEffect(() => {
    console.log(dialog);
    dialog.current.showModal();
  }, []);
  return (
    <dialog
      ref={dialog}
      className={`${mode === "signup" ? "signup-popup" : "reg-popup "} min-h-[300px] w-[90vw] rounded-2xl shadow-[0px_0px_15px_#ffffff67] outline-none ${mode === "signup" ? "" : "md:w-[45%] "}`}
    >
      <div className="  flex min-h-[300px] flex-col items-center justify-center rounded-2xl bg-primary-lighter md:ml-52">
        {mode === "login" && <LoginForm />}
        {mode === "logout" && <LogoutForm />}
        {mode === "verify" && <VerifyForm />}
        {mode === "signup" && <SignupForm />}
      </div>
    </dialog>
  );
}
