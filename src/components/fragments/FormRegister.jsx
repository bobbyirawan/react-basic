import { useEffect, useRef } from "react";
import ButtonDefault from "../atoms/ButtonDefault";
import InputForm1 from "../elements/InputForm1";

const FormRegister = () => {
  const fullName = useRef(null);

  useEffect(() => {
    fullName.current.focus();
  }, []);
  return (
    <form action="">
      <InputForm1
        label="Fullname"
        type="text"
        placeholder="enter fullname"
        name="fullname"
        ref={fullName}
      />
      <InputForm1
        label="Email"
        type="email"
        placeholder="example@email.com"
        name="email"
      />
      <InputForm1
        label="Password"
        type="password"
        placeholder="****"
        name="password"
      />
      <InputForm1
        label="Confirm Password"
        type="password"
        placeholder="****"
        name="confirmPassword"
      />
      <ButtonDefault classname="bg-blue-600 w-full">Register</ButtonDefault>
    </form>
  );
};

export default FormRegister;
