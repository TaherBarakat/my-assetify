import ActionButton from "./ActionButton";
import { Form, redirect, useNavigate } from "react-router-dom";

import { getAuthToken, removeAuthToken } from "../../utils/auth";

export default function LogoutForm() {
  const navigate = useNavigate();
  async function logout(token) {
    console.log("start logged out");

    const response = await fetch(
      "https://task5-toleen-falion.trainees-mad-s.com/api/auth/logout",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      },
    );
    console.log(await response.json());

    if (getAuthToken()) return null;
    console.log("done logged out");

    navigate("/my-assetify");
  }

  return (
    <Form
      className="h-full w-full px-8 "
      method="get"
      onSubmit={() => {
        logout(getAuthToken());
        removeAuthToken();
      }}
    >
      <h2 className="text-center text-2xl font-bold text-primary-darker ">
        هل أنت متأكد من تسجيل الخروج؟
      </h2>
      <ActionButton secondary>تأكيد</ActionButton>
      <ActionButton type="botton" onClick={() => navigate("/my-assetify")}>
        تراجع
      </ActionButton>
    </Form>
  );
}

export async function action() {
  console.log("logout action");
  return null;
}
