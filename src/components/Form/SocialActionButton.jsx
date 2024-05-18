import Google from "../../assets/icons/google.svg";
import Apple from "../../assets/icons/apple.svg";
import Facebook from "../../assets/icons/facebook.svg";

export default function SocialActionButton({ children, className }) {
  return (
    <div className={` relative my-9 w-full ${className} h-full`}>
      <button
        className={` flex w-full flex-col items-center justify-evenly
          rounded-2xl px-3  py-2 text-sm shadow-xl    focus:outline-none focus:ring focus:ring-blue-300 md:flex-row md:text-base ${
            children === "Google"
              ? "bg-transparent text-black "
              : children === "Apple"
                ? "bg-black text-white "
                : "bg-[#1877F2] text-white  "
          }  `}
      >
        {children}
        <img
          className="mt-1 h-5 w-5 md:mt-0 "
          src={
            children === "Google"
              ? Google
              : children === "Apple"
                ? Apple
                : Facebook
          }
        />
      </button>
    </div>
  );
}
