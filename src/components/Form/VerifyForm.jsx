import ActionButton from "./ActionButton";
import { useState, useRef } from "react";
import { Form, redirect } from "react-router-dom";

import { useContext } from "react";
import { DummyAuthCtx } from "../../store_/dummyAuthContext";
export default function VerifyForm() {
  const { login } = useContext(DummyAuthCtx);

  return (
    <Form className="h-full w-full px-8 " method="post">
      <h2 className="text-center text-2xl font-bold text-primary-darker ">
        مرحباً بك طاهر{" "}
      </h2>
      <div className="my-9 flex justify-around text-sm">
        لقد تم ارسال الى taher@gmail.com
      </div>

      <VerificationCodeInput />
      <ActionButton secondary onClick={login}>
        {" "}
        تأكيد
      </ActionButton>
      <div className="my-9 flex justify-around text-sm">
        اذا لم يصلك يمكنك اعادة المحاولة بعد 1 د
      </div>
      <ActionButton>إعادة إرسال</ActionButton>
    </Form>
  );
}

function VerificationCodeInput() {
  const [verificationCode, setVerificationCode] = useState("");
  const inputRefs = Array.from({ length: 6 }, () => useRef());

  console.log(verificationCode);

  const handleChange = (e, index) => {
    const value = e.target.value;
    setVerificationCode((prevState) => {
      const code = prevState.split("");
      code[index] = value;
      return code.join("");
    });

    if (value && index < inputRefs.length - 1) {
      inputRefs[verificationCode.length + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRefs[verificationCode.length - 1].current.focus();
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      {inputRefs.map((ref, index) => (
        <input
          required
          placeholder="_"
          key={index}
          ref={ref}
          type="text"
          pattern="[0-9]*"
          maxLength={1}
          value={verificationCode[index] || ""}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={`mx-2  ${index < verificationCode.length ? "bg-slate-300" : ""}   aspect-square w-[12%] rounded-xl  border border-gray-300 text-center text-3xl focus:outline-none  focus:ring-2 focus:ring-blue-500 md:w-[15%]`}
        />
      ))}
    </div>
  );
}

export async function action({ request }) {
  const reqData = await request.formData();
  const data = Object.fromEntries(reqData.entries());
  console.log(data);
  return redirect("/my-assetify");
}
