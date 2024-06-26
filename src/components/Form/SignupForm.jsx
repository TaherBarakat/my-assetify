import ActionButton from "./ActionButton";
import Input from "./Input";
import FileInput from "./FileInput";
import SocialActionButton from "./SocialActionButton";
import {
  Form,
  redirect,
  Link,
  useNavigation,
  json,
  useActionData,
} from "react-router-dom";

export default function SignupForm() {
  const { state } = useNavigation();
  const data = useActionData();
  return (
    <Form
      className="h-full w-full  px-8 md:px-48 "
      method="post"
      encType="multipart/form-data"
    >
      <h2 className="text-center text-2xl font-bold text-primary-darker ">
        إنشاء حساب
      </h2>
      <div className="grid  grid-cols-1 grid-rows-2 gap-1 md:grid-cols-2  md:grid-rows-1 md:gap-14">
        <div>
          <Input id="email" name="email" type="email">
            الايميل
          </Input>
          <Input id="userName" name="name" type="text">
            اسم المستخدم
          </Input>
          <Input id="tel" name="phone" type="tel">
            رقم الهاتف
          </Input>
          <Input
            // minLength="10"
            id="password"
            name="password"
            type="password"
          >
            كلمة المرور
          </Input>
          <Input
            // minLength="10"
            id="password2"
            name="password_confirmation"
            type="password"
          >
            تأكيد كلمة المرور
          </Input>
          {data && (
            <ul>
              {data.errors.map((err) => (
                <li key={err}> {err}</li>
              ))}
            </ul>
          )}
        </div>

        <div>
          {/* dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd */}

          <FileInput
            name="profile_photo"
            id="photograph"
            accept="image/*"
            size="2000000"
          >
            الصورة الشخصية
          </FileInput>
          <FileInput
            name="certificate"
            id="id"
            accept="application/pdf"
            size="1000000"
          >
            {" "}
            اثبات شخصية
          </FileInput>
          {/* dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd */}
          {/* <input name="profile_photo" type="file" accept="image/*" />
          <input name="certificate" type="file" accept="application/pdf" /> */}

          {/* dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd */}

          <ActionButton
            secondary
            type="submit"
            disabled={state === "submitting"}
          >
            {state === "submitting" ? "جار إرسال الكود" : " إنشاء حساب"}
          </ActionButton>

          <div className="my-9 flex justify-around text-sm">
            <span>
              {"  "}
              لديك حساب ؟{"  "}
              <Link to="/my-assetify/login" className="underline">
                تسجيل دخول{" "}
              </Link>
              {"  "}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-9 flex items-center ">
        <div className="h-px flex-grow bg-slate-300"></div>
        <div className="mx-4 mb-3 font-bold text-slate-300">أو</div>
        <div className="h-px flex-grow bg-slate-300"></div>
      </div>

      <div className=" flex h-[20%] items-center justify-center">
        <SocialActionButton type="button" className="mx-1 w-[20%]">
          Facebook
        </SocialActionButton>
        <SocialActionButton type="button" className="w-[20%]">
          Apple
        </SocialActionButton>
        <SocialActionButton type="button" className="w-[20%]">
          Google
        </SocialActionButton>
      </div>
    </Form>
  );
}

export async function action({ request }) {
  const reqData = await request.formData();
  const formData = Object.fromEntries(reqData.entries());
  console.log(reqData);
  console.log(formData);
  const response = await fetch(
    "https://task5-toleen-falion.trainees-mad-s.com/api/auth/Signup",
    {
      method: "POST",
      body: reqData,
    },
  );
  // const responseData = await response.json();

  if (response.status === 422) return response;
  else if (!response.ok)
    throw json({ title: "error", message: response.status });
  else return redirect("/my-assetify/verify");
}
