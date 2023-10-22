import { useState } from "react";

function Button1() {
    const [likes, setLikes] = useState(0)
   
     function handlerClick() {
         setLikes(likes + 1)
     }
   
     return (
         <button onClick={handlerClick}>like({likes})</button>
     )
   }
   

   export default Button1