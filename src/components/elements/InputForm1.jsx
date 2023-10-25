import { forwardRef } from "react";
import Input1 from "../atoms/Input1";
import Label1 from "../atoms/Label1";

const InputForm1 = forwardRef(({ label, type, placeholder, name }, ref) => {
  return (
    <div className="mb-6">
      <Label1 htmlFor={name}>{label}</Label1>
      <Input1 type={type} placeholder={placeholder} name={name} ref={ref} />
    </div>
  );
});

export default InputForm1;
