import { createContext, useState, useEffect } from "react";

let productProvider = createContext();

function ContextProvider({ children }) {
  let isLoggedIn = !!localStorage.getItem("isLogin");

  let [cart, setCart] = useState(() => {
    if (isLoggedIn) {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  let [count, setCount] = useState(cart.length);
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isLoggedIn]);

  let [search, setSearch] = useState("");
  
  const value = {
    count,
    search,
    setSearch,
    setCount,
    cart,
    setCart,
  };

  return (
    <productProvider.Provider value={value}>
      {children}
    </productProvider.Provider>
  );
}

export { ContextProvider, productProvider };
