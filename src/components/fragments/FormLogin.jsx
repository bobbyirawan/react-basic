import { useEffect, useRef, useState } from "react";
import ButtonDefault from "../atoms/ButtonDefault";
import InputForm1 from "../elements/InputForm1";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed, setLoginFailed] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    const callback = (status, res) => {
      switch (status) {
        case true:
          localStorage.setItem("token", res);
          localStorage.setItem("username", data.username);
          setLoginFailed("");
          window.location.href = "/products";
          break;

        default:
          setLoginFailed(res.response.data);
          break;
      }
    };

    login(data, callback);
    // localStorage.setItem("password", event.target.password.value);
    // window.location.href = "/products";
  };

  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {loginFailed && <p className="text-red-500 mb-3">{loginFailed}</p>}
      <InputForm1
        label="Username"
        type="text"
        placeholder="username"
        name="username"
        ref={usernameRef}
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
