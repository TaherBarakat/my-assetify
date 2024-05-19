import ActionButton from "./ActionButton";
import Input from "./Input";
import { Form, redirect } from "react-router-dom";
export default function SignupForm() {
  return (
    <Form className="h-full w-full px-32 py-8 " method="post">
      <h2 className="text-center text-2xl font-bold text-primary-darker ">
        إنشاء حساب
      </h2>
      <div className="grid grid-cols-2 gap-10">
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
          <input name="photograph" type="file" accept="image/*" />
          <input name="id" type="file" accept="image/*" />
          <ActionButton secondary type="submit">
            تأكيد
          </ActionButton>
        </div>
      </div>
    </Form>
  );
}

export async function action({ request }) {
  console.log("click");
  const reqData = await request.formData();
  const data = Object.fromEntries(reqData.entries());
  console.log(data);
  return redirect("/");
}
