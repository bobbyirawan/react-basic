import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import ButtonDefault from "../atoms/ButtonDefault";
import { useSelector } from "react-redux";

const NavbarLayout = () => {
  const [totalCart, setTotalCart] = useState(0);
  const username = useLogin();
  const carts = useSelector((state) => state.cart.data);

  useEffect(() => {
    setTotalCart(
      carts.reduce((acc, item) => {
        return acc + item.qty;
      }, 0)
    );
  }, [carts]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
      {username}
      <ButtonDefault
        classname="ml-5 bg-sky-600"
        onClick={handleLogout}
        type="button"
      >
        Logout
      </ButtonDefault>
      <div>{totalCart}</div>
    </div>
  );
};

export default NavbarLayout;
