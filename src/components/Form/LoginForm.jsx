import ActionButton from "./ActionButton";
import SocialActionButton from "./SocialActionButton";
import Input from "./Input";
import { redirect, Form, Link, useActionData, json } from "react-router-dom";

export default function LoginForm() {
  const data = useActionData();

  return (
    <Form className="h-full w-full px-8  " method="post">
      <h2 className="text-center text-2xl font-bold text-primary-darker ">
        تسجيل الدخول
      </h2>

      <Input name="email" id="email" type="email">
        الايميل
      </Input>
      <Input name="phone" id="phone" type="tel">
        رقم الهاتف
      </Input>
      <Input
        name="password"
        id="password"
        type="password"
        // minLength="10"
        // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
      >
        كلمة المرور
      </Input>
      {data && <p> {data.message}</p>}
      <ActionButton secondary>تسجيل دخول</ActionButton>
      <div className="my-9 flex justify-around text-sm">
        <span>
          {"  "}
          ليس لديك حساب ؟{"  "}
          <Link to="/my-assetify/signup" className="underline">
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
  const formData = Object.fromEntries(reqData.entries());
  console.log(reqData);
  console.log(formData);
  const response = await fetch(
    "https://task5-toleen-falion.trainees-mad-s.com/api/auth/login",
    {
      method: "POST",
      body: reqData,
    },
  );

  if (response.status === 422 || response.status === 404) return response;
  else if (!response.ok)
    throw json({ title: "error", message: response.status });
  else return redirect("/my-assetify/verify");
}
