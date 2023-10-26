import { useEffect, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { USD } from "../package/currency";
import TableCart from "../components/fragments/TableCart";
import NavbarLayout from "../components/layouts/NavbarLayout";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
  
  // const handleAddToCart = (id) => {
  //   if (carts.find((cart) => cart.id === id)) {
  //     setCart(
  //       carts.map((cart) =>
  //         cart.id === id ? { ...cart, qty: cart.qty + 1 } : cart
  //       )
  //     );
  //   } else {
  //     setCart([
  //       ...carts,
  //       {
  //         id: id,
  //         qty: 1,
  //       },
  //     ]);
  //   }
  // };

  return (
    <>
      <NavbarLayout />
      <div className="flex justify-center py-5">
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 &&
            products.map((item) => (
              <CardProduct key={item.id}>
                <CardProduct.Header image={item.image} id={item.id} />
                <CardProduct.Body title={item.title} id={item.id}>
                  {item.description}
                </CardProduct.Body>
                <CardProduct.Footer price={USD(item.price)} id={item.id} />
              </CardProduct>
            ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
