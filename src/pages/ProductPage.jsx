import { useEffect, useRef, useState } from "react";
import ButtonDefault from "../components/atoms/ButtonDefault";
import CardProduct from "../components/fragments/CardProduct";
import { productItems } from "../data/products";

const email = localStorage.getItem("email");

const ProductPage = () => {
  const [carts, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    console.log("useEffect1");
    setCart(JSON.parse(localStorage.getItem("carts")) || []);
  }, []);

  useEffect(() => {
    console.log("cart updated: ");
    if (carts.length > 0) {
      const sum = carts.reduce((acc, item) => {
        const product = productItems.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);

      localStorage.setItem("carts", JSON.stringify(carts));
    }
  }, [carts]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (carts.find((cart) => cart.id === id)) {
      setCart(
        carts.map((cart) =>
          cart.id === id ? { ...cart, qty: cart.qty + 1 } : cart
        )
      );
    } else {
      setCart([
        ...carts,
        {
          id: id,
          qty: 1,
        },
      ]);
    }

    handleAddToCartRef(id);
  };

  // useRef
  const cartRef = useRef([]);

  const handleAddToCartRef = (id) => {
    if (carts.find((cart) => cart.id === id)) {
      cartRef.current.map((cart) => {
        cart.id === id ? { ...cart, qty: cart.qty + 1 } : cart;
      });
    } else {
      cartRef.current = [
        ...cartRef.current,
        {
          id: id,
          qty: 1,
        },
      ];
    }
  };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    console.log("carts updated ref");
    carts.length > 0
      ? (totalPriceRef.current.style.display = "table-row")
      : (totalPriceRef.current.style.display = "none");
  }, [carts]);

  return (
    <>
      <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">
        {email}
        <ButtonDefault
          classname="ml-5 bg-sky-600"
          onClick={handleLogout}
          type="button"
        >
          Logout
        </ButtonDefault>
      </div>
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {productItems.map((item) => (
            <CardProduct key={item.id}>
              <CardProduct.Header image={item.image} />
              <CardProduct.Body title={item.name}>
                {item.description}
              </CardProduct.Body>
              <CardProduct.Footer
                price={item.price}
                id={item.id}
                onAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5 border-solid border-4">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((cart) => {
                const product = productItems.find(
                  (item) => item.id === cart.id
                );
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>
                      {"Rp. " + (product.price * 1).toLocaleString("id-ID")}
                    </td>
                    <td>{cart.qty}</td>
                    <td>
                      {"Rp. " +
                        (product.price * cart.qty).toLocaleString("id-ID")}
                    </td>
                  </tr>
                );
              })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {" "}
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
