import { Link } from "react-router-dom";
import ButtonDefault from "../atoms/ButtonDefault";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/slices/cartSlice";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = ({ image, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="product"
        className="p-8 rounded-t-lg h-60 w-full object-cover"
      />
    </Link>
  );
};

const Body = ({ children, title, id}) => {
  return (
    <div className="px-5 pb-5">
      <Link to={`/product/${id}`}>
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title.substring(0, 20)} ...
        </h5>
        <p className="text-white text-s">{children.substring(0, 100)}...</p>
      </Link>
    </div>
  );
};

const Footer = ({ price, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <ButtonDefault classname="bg-blue-600" onClick={() => dispatch(addCart({id, qty: 1}))}>
        Add to Cart
      </ButtonDefault>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
