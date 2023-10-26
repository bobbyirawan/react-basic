import { useEffect, useState } from "react";

export const useLogin = () => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    token
      ? setUsername(localStorage.getItem("username"))
      : (window.location.href = "/login");
  }, []);

  return username;
};
