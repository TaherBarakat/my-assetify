import ActionButton from "./ActionButton";
import { Form, redirect } from "react-router-dom";
import { DummyAuthCtx } from "../../store_/dummyAuthContext";
import { useContext } from "react";

export default function LogoutForm() {
  const { logout } = useContext(DummyAuthCtx);

  return (
    <Form className="h-full w-full px-8 " method="post">
      <h2 className="text-center text-2xl font-bold text-primary-darker ">
        هل أنت متأكد من تسجيل الخروج؟
      </h2>
      <ActionButton secondary onClick={logout}>
        تأكيد
      </ActionButton>
      <ActionButton>تراجع</ActionButton>
    </Form>
  );
}

export async function action({ request }) {
  return redirect("/my-assetify");
}
