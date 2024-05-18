import ActionButton from "./ActionButton";
import { useState, useRef } from "react";

export default function VerifyForm() {
  return (
    <form className="h-full w-full p-8">
      <h2 className="text-center text-2xl font-bold text-primary-darker ">
        مرحباً بك طاهر{" "}
      </h2>
      <div className="my-9 flex justify-around text-sm">
        لقد تم ارسال الى taher@gmail.com
      </div>

      <VerificationCodeInput />
      <ActionButton secondary>تأكيد</ActionButton>
      <div className="my-9 flex justify-around text-sm">
        اذا لم يصلك يمكنك اعادة المحاولة بعد 1 د
      </div>
      <ActionButton>إعادة إرسال</ActionButton>
    </form>
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
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div className="flex w-full items-center justify-center">
      {inputRefs.map((ref, index) => (
        <input
          key={index}
          ref={ref}
          type="text"
          pattern="[0-9]*"
          maxLength={1}
          value={verificationCode[index] || ""}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="mx-2 aspect-square w-[10%] rounded border border-gray-300 text-center  focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  );
}
