import { useEffect, useRef } from "react";
import ButtonDefault from "../atoms/ButtonDefault";
import InputForm1 from "../elements/InputForm1";

const FormLogin = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <InputForm1
        label="Email"
        type="email"
        placeholder="example@email.com"
        name="email"
        ref={emailRef}
      />
      <InputForm1
        label="Password"
        type="password"
        placeholder="****"
        name="password"
      />
      <ButtonDefault classname="bg-blue-600 w-full">Login</ButtonDefault>
    </form>
  );
};

export default FormLogin;
