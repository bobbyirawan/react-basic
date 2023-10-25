const Button2 = ({ onClick, text = "default", bgColor = "bg-black" }) => {
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${bgColor} text-white`}
      type="submit"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button2;
