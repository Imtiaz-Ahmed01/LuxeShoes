import { CircleUser, ShoppingCart, Menu, X } from "lucide-react";
import { navItem } from "../assets/config";
import { NavLink, useNavigate } from "react-router-dom";
import UserDropdownShort from "./UserDropdownShort";
import { useContext, useState } from "react";
import { productProvider } from "../Context/ContextProvider";

const Navbar = () => {
  let navigate = useNavigate();
  let isLogin = localStorage.getItem("isLogin");
  let [menuOpen, setMenuOpen] = useState(false);
  let { count } = useContext(productProvider);
  return (
    <>
      {isLogin && (
        <>
          <div className="w-full bg-[#24252A] shadow-2xl shadow-[#98AFB9] z-50">
            <div className="max-w-[1300px] mx-auto px-5 md:px-10 flex justify-between items-center h-20">
              <h1
                onClick={() => navigate("/")}
                className="text-3xl text-blue-500 font-extrabold cursor-pointer"
              >
                LuxeShoes
              </h1>

              <ul className="hidden md:flex gap-3 text-white font-semibold text-[17px]">
                {navItem.map((name, index) => (
                  <NavLink
                    className="hover:bg-blue-400 px-4 py-1.5 duration-200 rounded-2xl"
                    to={name.path}
                    key={index}
                  >
                    {name.title}
                  </NavLink>
                ))}
              </ul>

              <div className="flex items-center gap-4">
                <div className="relative text-white">
                  <p className="absolute -top-2 -right-2 bg-red-400 px-1 py-0.5 rounded-full text-xs">
                    {count}
                  </p>
                  <ShoppingCart
                    size={26}
                    onClick={() => navigate("/products/cart")}
                    className="cursor-pointer"
                  />
                </div>
                <UserDropdownShort />
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-white md:hidden"
                >
                  {menuOpen ? (
                    <X className="w-7 h-7" />
                  ) : (
                    <Menu className="w-7 h-7" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div
            className={`md:hidden bg-[#24252A] text-white font-semibold transition-all duration-300 ease-in-out overflow-hidden ${
              menuOpen ? "max-h-[400px] py-4" : "max-h-0"
            }`}
          >
            <div className="flex flex-col items-center gap-4 px-5">
              {navItem.map((name, index) => (
                <NavLink
                  className="hover:bg-blue-400 px-4 py-2 rounded-xl duration-200 w-full text-center"
                  to={name.path}
                  key={index}
                  onClick={() => setMenuOpen(false)}
                >
                  {name.title}
                </NavLink>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
