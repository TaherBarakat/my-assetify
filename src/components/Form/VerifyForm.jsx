import ActionButton from "./ActionButton";
import { useState, useRef } from "react";
import {
  Form,
  json,
  redirect,
  useActionData,
  useSubmit,
} from "react-router-dom";

import { useContext } from "react";
import { DummyAuthCtx } from "../../store_/dummyAuthContext";
export default function VerifyForm() {
  const [reSendDuration, setReSendDuration] = useState(60);
  const [reSendCodeRes, setReSendCodeRes] = useState("");
  const data = useActionData();

  useState(() => {
    const reSendTimeInterval = setInterval(() => {
      setReSendDuration((prev) => {
        if (prev > 0) return prev - 1;
        else return 0;
      });
    }, 1000);

    const reSendTimeOut = setTimeout(() => {
      clearTimeout(reSendTimeInterval);
    }, reSendDuration * 1000);
    return () => {
      clearTimeout(reSendTimeOut);
    };
  }, [reSendCodeRes]);

  async function handleCodeReSend() {
    const response = await fetch(
      "https://task5-toleen-falion.trainees-mad-s.com/api/auth/re_sentVerifyEemail",
    );
    const data = await response.json();
    setReSendCodeRes({ message: data.message });
  }

  return (
    <>
      <Form className="h-full w-full px-8 " method="post">
        <h2 className="text-center text-2xl font-bold text-primary-darker ">
          مرحباً بك طاهر{" "}
        </h2>
        <div className="my-9 flex justify-around text-sm">
          لقد تم ارسال الى taher@gmail.com
        </div>
        <VerificationCodeInput />
        {reSendDuration > 0 && (
          <div className="my-7 flex justify-around text-sm">
            اذا لم يصلك يمكنك اعادة المحاولة بعد {reSendDuration} ثانية
          </div>
        )}
        {data && !data.status && (
          <div className="my-7 flex justify-around text-sm">{data.message}</div>
        )}
        {reSendCodeRes && (
          <div className="my-7 flex justify-around text-sm">
            {reSendCodeRes.message}
          </div>
        )}
        <ActionButton
          secondary
          // onClick={login}
        >
          تأكيد
        </ActionButton>
      </Form>
      <Form className="h-full w-full px-8 " onSubmit={handleCodeReSend}>
        <ActionButton disabled={reSendDuration > 0}>إعادة إرسال</ActionButton>
      </Form>
    </>
  );
}

export async function action({ request }) {
  const reqData = await request.formData();
  const code = Object.values(Object.fromEntries(reqData.entries())).join("");
  const formData = new FormData();
  formData.append("code", code);
  console.log(code);
  const response = await fetch(
    "https://task5-toleen-falion.trainees-mad-s.com/api/auth/verifyEemail",
    { method: "POST", body: formData },
  );

  if (response.status === 422 || response.status === 404) return response;
  else if (!response.ok)
    throw json({ title: "error", message: response.status });
  else {
    const responseData = await response.json();
    console.log(responseData.token);
    localStorage.setItem("ASSETIFY_TOKEN", responseData.token);
    return redirect("/my-assetify");
  }
}

// export async function loader({ request }) {
//   console.log(request);
//   console.log(8888888);
//   // fetch(
//   //   "https://task5-toleen-falion.trainees-mad-s.com/api/auth/re_sentVerifyEemail",
//   // );
//
// -------------------------------------------

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
    <div className="flex w-full flex-row-reverse items-center justify-center ">
      {inputRefs.map((ref, index) => (
        <input
          name={index}
          required
          placeholder="_"
          key={index}
          ref={ref}
          type="text"
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
