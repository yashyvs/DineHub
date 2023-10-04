import { useState } from "react";
import { Link } from "react-router-dom";

import Footer from "./Footer";

const Login = () => {
  const [isUser, setIsUser] = useState(true);

  return (
    <>
      <div className="h-[80vh] flex justify-center items-center">
        <div className="h-full w-2/5 py-2 px-4 bg-light flex flex-col justify-center items-center">
          <h1 className="p-2 font-bold font-primary text-3xl text-dark">
            Dine Hub
          </h1>
          <p className="p-2 font-bold font-secondary text-left text-4xl">
            {isUser ? "Login" : "Sign up"}
          </p>
          <p
            onClick={() => setIsUser(!isUser)}
            className="font-bold font-secondary text-sm cursor-pointer"
          >
            or{" "}
            <span className="text-dark hover:text-primary">
              {isUser ? " create an account" : " Login to your account"}
            </span>
          </p>
          <p className="mt-8 p-2 font-secondary font-bold text-sm text-primary">
            You can go to main page to view more restaurants
          </p>
          <Link to="/">
            <button className="mt-2 py-2 px-4 bg-primary font-primary font-bold text-2xl text-white">
              Search for Nearby Restaruants
            </button>
          </Link>
        </div>

        <div className="bg-orange-100 h-full w-full flex justify-center items-center">
          {isUser ? (
            <div className="w-1/2 p-4 flex flex-col justify-center items-center">
              <input
                className="w-full h-14 p-2 border-[1px] font-secondary text-lg border-light focus:outline-none"
                placeholder="Phone number"
              />
              <Link className="w-full" to="/ ">
                <button className="w-full p-2 mt-8 h-14 bg-primary font-primary font-bold text-lg text-white">
                  Login
                </button>
              </Link>
              <p className="p-2 mt-2 text-sm text-justify font-secondary">
                By clicking on Login, I accept the Terms and Conditions &
                Privacy Policy
              </p>
            </div>
          ) : (
            <div className="w-1/2 p-4 flex flex-col justify-center items-center">
              <input
                className="w-full h-14 p-2 border-[1px] font-secondary text-lg border-light focus:outline-none"
                placeholder="Name"
              />
              <input
                type="email"
                className="w-full h-14 p-2 border-[1px] font-secondary text-lg border-t-0 border-light focus:outline-none"
                placeholder="Email"
              />
              <input
                type="email"
                className="w-full h-14 p-2 border-[1px] font-secondary text-lg border-t-0 border-light focus:outline-none"
                placeholder="Phone number"
              />
              <Link className="w-full" to="/ ">
                <button className="w-full p-2 mt-8 h-14 bg-primary font-primary font-bold text-lg text-white">
                  Create
                </button>
              </Link>
              <p className="p-2 mt-2 text-sm text-justify font-secondary">
                By creating an account, I accept the Terms and Conditions &
                Privacy Policy
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
