import { useSelector } from "react-redux";
import { USD } from "../../package/currency";
import { useEffect, useRef, useState } from "react";

const TableCart = ({ products }) => {
  const carts = useSelector((state) => state.cart.data);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (products.length > 0 && carts.length > 0) {
      const sum = carts.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);

      localStorage.setItem("carts", JSON.stringify(carts));
    }
  }, [carts, products]);


  const totalPriceRef = useRef(null);

  useEffect(() => {
    carts.length > 0
      ? (totalPriceRef.current.style.display = "table-row")
      : (totalPriceRef.current.style.display = "none");
  }, [carts]);

  return (
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
  );
};

export default TableCart;
