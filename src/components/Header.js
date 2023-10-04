import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../assets/Logo.png";

export const Title = () => {
  return (
    <Link to="/">
      <img className="h-20 sm:h-28 p-2" alt="logo" src={Logo} />
    </Link>
  );
};

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-orange-100 p-2 sm:px-[10%] py-3 sm:py-2 m-0 flex flex-col sm:flex-row justify-between items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="flex justify-center sm:justify-start items-center mb-2 sm:mb-0">
        <p className="text-primary font-primary font-bold hover:text-dark mr-4 sm:mr-6">
          <Link to="/about">About</Link>
        </p>
        <p className="text-primary font-primary font-bold hover:text-dark">
          <Link to="/">Home</Link>
        </p>
      </div>
      <div className="h-20 sm:h-28">
        <Title />
      </div>
      <div className="flex justify-center sm:justify-end items-center">
        <p className="text-primary font-primary font-bold hover:text-dark mr-4 sm:mr-6">
          <Link to="/login">SignIn</Link>
        </p>
        <p className="text-primary font-primary font-bold hover:text-dark">
          <Link to="/cart">Cart - {cartItems.length}</Link>
        </p>
      </div>
    </div>
  );
};

export default Header;
