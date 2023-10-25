import { useState } from "react";
import Button2 from "./Button2";

function Button1() {
  const [likes, setLikes] = useState(0);

  function handlerClick() {
    setLikes(likes + 1);
  }

  return (
    <Button2
      onClick={handlerClick}
      text={`like ( ${likes} )`}
      bgColor={"bg-emerald-900"}
    />
  );
}

export default Button1;
