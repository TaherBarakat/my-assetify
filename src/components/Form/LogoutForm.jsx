import ActionButton from "./ActionButton";
export default function LogoutForm() {
  return (
    <form className="h-full w-full p-8">
      <h2 className="text-center text-2xl font-bold text-primary-darker ">
        هل أنت متأكد من تسجيل الخروج؟
      </h2>
      <ActionButton secondary>تأكيد</ActionButton>
      <ActionButton>تراجع</ActionButton>
    </form>
  );
}
