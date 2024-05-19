import ActionButton from "./ActionButton";
import { Form, redirect } from "react-router-dom";

export default function LogoutForm() {
  return (
    <Form className="h-full w-full p-8">
      <h2 className="text-center text-2xl font-bold text-primary-darker ">
        هل أنت متأكد من تسجيل الخروج؟
      </h2>
      <ActionButton secondary>تأكيد</ActionButton>
      <ActionButton>تراجع</ActionButton>
    </Form>
  );
}

export async function action({ request }) {
  return redirect("/");
}
