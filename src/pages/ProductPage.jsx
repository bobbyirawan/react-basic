import { useEffect, useRef, useState } from "react";
import ButtonDefault from "../components/atoms/ButtonDefault";
import CardProduct from "../components/fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { USD } from "../package/currency";
import { useLogin } from "../hooks/useLogin";

const ProductPage = () => {
  const [carts, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  useEffect(() => {
    console.log("useEffect1");
    if (JSON.parse(localStorage.getItem("carts"))) {
      setCart(JSON.parse(localStorage.getItem("carts")));
    } else {
      setCart([]);
    }
  }, []);

  useEffect(() => {
    console.log("useEffect2");
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  useEffect(() => {
    console.log("cart updated: " + JSON.stringify(carts));
    if (products.length > 0 && carts.length > 0) {
      const sum = carts.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);

      localStorage.setItem("carts", JSON.stringify(carts));
    }
  }, [carts, products]);

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
        {username}
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
          {products.length > 0 &&
            products.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header image={item.image} id={item.id}/>
                <CardProduct.Body title={item.title} id={item.id}>
                  {item.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={USD(item.price)}
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
              {products.length > 0 &&
                carts.map((cart) => {
                  const product = products.find((item) => item.id === cart.id);
                  return (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{USD(product.price)}</td>
                      <td>{cart.qty}</td>
                      <td>{USD(product.price * cart.qty)}</td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>{USD(totalPrice)}</b>
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
