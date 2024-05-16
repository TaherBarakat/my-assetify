import { useRef } from "react";
import "./Popup.css";
import { useEffect } from "react";
export default function popup() {
  const dialog = useRef();
  //   dialog.current.show();

  useEffect(() => {
    console.log(dialog);
    dialog.current.showModal();
  }, []);
  return (
    <dialog ref={dialog} className="purple-gradient  min-h-[100px] md:w-[45%]">
      <div>hi there </div>
    </dialog>
  );
}
