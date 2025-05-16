import { CircleUser } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productProvider } from "../Context/ContextProvider";

const UserDropdownShort = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const userName = localStorage.getItem("Name") || "User";
let {setCart, setIsLogin, isLogin} = useContext(productProvider)
  const toggle = () => setIsOpen(!isOpen);
  const signOut = () => {
    setCart([]);
    localStorage.clear();
    navigate("/register");
    setIsOpen(false);
  };

  function logOut() {
    localStorage.removeItem("isLogin");
    navigate("/login");
  }
  useEffect(() => {
    const outsideClick = (e) =>
      dropdownRef.current?.contains(e.target) || setIsOpen(false);
    document.addEventListener("mousedown", outsideClick);
    return () => document.removeEventListener("mousedown", outsideClick);
  }, []);

  return (
    <div className="relative group">
      <div
        className="bg-white text-black flex items-center gap-2 font-bold px-3 py-2 rounded-xl cursor-pointer hover:bg-blue-400 hover:text-white duration-200"
        onClick={toggle}
      >
        <h1 className="group-hover:text-black">{userName}</h1>
        <CircleUser className="group-hover:text-black" />
      </div>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="absolute right-0 mt-2 w-32 rounded-md shadow-md bg-white ring-1 ring-black ring-opacity-5 z-10"
        >
          <div className="py-1">
            <button
              onClick={logOut}
              className="block w-full font-bold text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Log-Out
            </button>
            <button
              onClick={signOut}
              className="block w-full font-bold text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign-Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdownShort;
