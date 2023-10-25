import { forwardRef } from "react";

const Input1 = forwardRef(({ type, placeholder, name, autoComplete = "off"}, ref) => {
  return (
    <input
      type={type}
      className="text-sm border rounded w-full py-2 px-3 text-slate-700"
      placeholder={placeholder}
      name={name}
      autoComplete={autoComplete}
      id={name}
      ref={ref}
    />
  );
});

export default Input1;
