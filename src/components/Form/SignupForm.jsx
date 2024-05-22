import ActionButton from "./ActionButton";
import Input from "./Input";
import FileInput from "./FileInput";
import SocialActionButton from "./SocialActionButton";
import { Form, redirect, Link } from "react-router-dom";

export default function SignupForm() {
  return (
    <Form className="h-full w-full  px-8 md:px-48 " method="post">
      <h2 className="text-center text-2xl font-bold text-primary-darker ">
        إنشاء حساب
      </h2>
      <div className="grid  grid-cols-1 grid-rows-2 gap-1 md:grid-cols-2  md:grid-rows-1 md:gap-14">
        <div>
          <Input id="email" name="email" type="email">
            الايميل
          </Input>
          <Input id="userName" name="UserName" type="text">
            اسم المستخدم
          </Input>
          <Input id="tel" name="tel" type="tel">
            رقم الهاتف
          </Input>
          <Input minLength="10" id="password" name="password" type="password">
            كلمة المرور
          </Input>
          <Input minLength="10" id="password2" name="password2" type="password">
            تأكيد كلمة المرور
          </Input>
        </div>
        <div>
          <FileInput
            name="photograph"
            id="photograph"
            accept="image/*"
            size="2000000"
          >
            الصورة الشخصية
          </FileInput>
          <FileInput name="id" id="id" accept="image/*" size="1000000">
            {" "}
            اثبات شخصية
          </FileInput>
          {/* <input name="photograph" type="file" accept="image/*" />
          <input name="id" type="file" accept="image/*" /> */}
          <ActionButton secondary type="submit">
            إنشاء حساب
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
  console.log("click");
  const reqData = await request.formData();
  const data = Object.fromEntries(reqData.entries());
  console.log(data);
  return redirect("/my-assetify/verify");
}
