import ButtonDefault from "../atoms/ButtonDefault";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
      {children}
    </div>
  );
};

const Header = ({ image }) => {
  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg" />
    </a>
  );
};

const Body = ({ children, title }) => {
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title}
        </h5>
        <p className="text-white text-s">{children}</p>
      </a>
    </div>
  );
};

const Footer = ({ price, id, onAddToCart }) => {
  const IDR = (num) => {
    return (num * 1).toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">{IDR(price)}</span>
      <ButtonDefault classname="bg-blue-600" onClick={() => onAddToCart(id)}>
        Add to Cart
      </ButtonDefault>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
