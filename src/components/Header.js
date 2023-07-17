import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../assets/Logo.png";

export const Title = () => {
  return (
    <Link to="/">
      <img className="h-28 p-2" alt="logo" src={Logo} />
    </Link>
  );
};

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="bg-orange-100 px-[10%] py-2 m-0 flex justify-between items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="w-1/4 flex justify-between items-center">
        <p className="text-primary font-primary font-bold hover:text-dark">
          <Link to="/about">About</Link>
        </p>
        <p className="text-primary font-primary font-bold hover:text-dark">
          <Link to="/">Home</Link>
        </p>
      </div>
      <div className="h-28">
        <Title />
      </div>
      <div className="w-1/4 flex justify-between items-center">
        <p className="text-primary font-primary font-bold hover:text-dark">
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
