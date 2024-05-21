import ActionButton from "./ActionButton";
import SocialActionButton from "./SocialActionButton";
import Input from "./Input";
import { redirect, Form, Link } from "react-router-dom";

import { useContext } from "react";
import { DummyAuthCtx } from "../../store_/dummyAuthContext";

export default function LoginForm() {
  const { login } = useContext(DummyAuthCtx);
  return (
    <Form className="h-full w-full p-8" method="post">
      <h2 className="text-center text-2xl font-bold text-primary-darker ">
        تسجيل الدخول
      </h2>
      <Input name="email" id="email" type="text">
        الايميل او رقم الهاتف
      </Input>
      <Input
        name="password"
        id="password"
        type="password"
        minLength="10"
        // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
      >
        كلمة المرور
      </Input>
      <ActionButton secondary onClick={login}>
        تسجيل دخول
      </ActionButton>
      <div className="my-9 flex justify-around text-sm">
        <span>
          {"  "}
          ليس لديك حساب ؟{"  "}
          <Link to="/signup" className="underline">
            انشاء حساب
          </Link>
          {"  "}
        </span>
        <span>
          <p>نسيت كلمة المرور</p>
        </span>
      </div>

      <div className="mt-9 flex items-center ">
        <div className="h-px flex-grow bg-slate-300"></div>
        <div className="mx-4 mb-3 font-bold text-slate-300">أو</div>
        <div className="h-px flex-grow bg-slate-300"></div>
      </div>

      <div className=" flex h-[20%] items-center justify-between">
        <SocialActionButton type="button" className="w-[30%]">
          Facebook
        </SocialActionButton>
        <SocialActionButton type="button" className="w-[30%]">
          Apple
        </SocialActionButton>
        <SocialActionButton type="button" className="w-[30%]">
          Google
        </SocialActionButton>
      </div>
    </Form>
  );
}

// export function action({ request }) {
//   console.log(request);
//   redirect("..");
// }

export async function action({ request }) {
  const reqData = await request.formData();
  const data = Object.fromEntries(reqData.entries());
  console.log(data);
  return redirect("/");
}
