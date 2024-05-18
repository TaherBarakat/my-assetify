export default function Input({ children, ...props }) {
  const { id } = props;

  return (
    <div className="relative my-9 w-full">
      <input
        {...props}
        type="text"
        required
        className="block w-full rounded-2xl  border-[1px] border-black px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
      />
      <label
        htmlFor={id}
        className="absolute right-4 top-[-3px] -translate-y-1/2 bg-primary-lighter px-2 text-sm font-medium  text-black"
      >
        {children}
      </label>
    </div>
  );
}
