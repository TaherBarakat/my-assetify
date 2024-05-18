import ActionButton from "./ActionButton";
import SocialActionButton from "./SocialActionButton";
import Input from "./Input";

export default function LoginForm() {
  return (
    <form className="h-full w-full p-8">
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
        minlength="10"
        // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
      >
        كلمة المرور
      </Input>
      <ActionButton secondary type="s">
        تسجيل دخول
      </ActionButton>
      <div className="my-9 flex justify-around text-sm">
        <span>
          {"  "}
          ليس لديك حساب ؟{"  "}
          <a>انشاء حساب</a>
          {"  "}
        </span>
        <span>
          <a>نسيت كلمة المرور</a>
        </span>
      </div>

      <div className="mt-9 flex items-center ">
        <div className="h-px flex-grow bg-slate-300"></div>
        <div className="mx-4 mb-3 font-bold text-slate-300">أو</div>
        <div className="h-px flex-grow bg-slate-300"></div>
      </div>

      <div className=" flex h-[20%] items-center justify-between">
        <SocialActionButton className="w-[30%]">Facebook</SocialActionButton>
        <SocialActionButton className="w-[30%]">Apple</SocialActionButton>
        <SocialActionButton className="w-[30%]">Google</SocialActionButton>
      </div>
    </form>
  );
}
