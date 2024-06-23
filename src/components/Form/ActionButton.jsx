export default function ActionButton({
  children,
  className,
  secondary,
  ...props
}) {
  return (
    <div className={` relative my-9 w-full ${className} `}>
      <button
        dis
        {...props}
        className={`block w-full rounded-2xl ${secondary ? "bg-secondary-accent" : "border-[1px] border-black bg-transparent "}  px-3 py-2  font-bold text-primary-darker shadow-xl focus:outline-none focus:ring focus:ring-blue-300`}
      >
        {children}
      </button>
    </div>
  );
}
