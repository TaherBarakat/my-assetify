import ActionButton from "./ActionButton";
import Input from "./Input";

export default function SignupForm() {
  return (
    <form className="h-full w-full px-32 py-8 ">
      <h2 className="text-center text-2xl font-bold text-primary-darker ">
        إنشاء حساب
      </h2>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <Input>الايميل</Input>
          <Input>اسم المستخدم</Input>
          <Input>رقم الهاتف</Input>
          <Input>كلمة المرور</Input>
          <Input>تأكيد كلمة المرور</Input>
        </div>
        <div>
          <input type="file" />
          <input type="file" />
          <ActionButton secondary>تأكيد</ActionButton>
        </div>
      </div>
    </form>
  );
}
