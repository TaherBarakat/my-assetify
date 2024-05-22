import "./Popup.css";
import { useRef } from "react";

import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

export default function Popup({ mode, children }) {
  const nav = useNavigate();
  const dialog = useRef();

  useEffect(() => {
    // console.log(dialog);
    dialog.current.showModal();

    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        console.log("hi");
        nav("..");
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [nav]);
  function handleClose() {
    nav("..");
  }
  return (
    <dialog
      ref={dialog}
      className={`${mode === "/signup" ? "signup-popup" : "reg-popup "} min-h-[300px] w-[90vw] rounded-2xl shadow-[0px_0px_15px_#ffffff67] outline-none ${mode === "/signup" ? "" : "md:w-[45%] "}`}
    >
      <div className="  flex min-h-[300px] flex-col items-center justify-center rounded-2xl bg-primary-lighter md:ml-52">
        <p
          className="w-full cursor-pointer px-10 py-2 text-3xl"
          onClick={handleClose}
        >
          &times;
        </p>{" "}
        {children}
      </div>
    </dialog>
  );
}
