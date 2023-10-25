import { Link } from "react-router-dom";

const AuthLayout = ({ children, title, type }) => {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          welcome, please enter your details
        </p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login"
            ? " Don&apos;t have an account ? "
            : "Already have an account ? "}

          <Link
            to={`/${type === "login" ? "register" : "login"}`}
            className="font-bold text-blue-600"
          >
            {type === "login" ? "Sign up" : "Login"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
