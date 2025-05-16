import React, { useContext, useState } from "react";
import { productProvider } from "../Context/ContextProvider";
import { ShoppingCart } from "lucide-react";

function Cart() {
  const { setCart, count, setCount, cart } = useContext(productProvider);
  const [counts, setCounts] = useState(cart.map(() => 1));

  const handleIncrement = (index) => {
    const newCounts = [...counts];
    newCounts[index] += 1;
    setCounts(newCounts);
  };

  const handleDecrement = (index) => {
    const newCounts = [...counts];
    if (newCounts[index] > 1) {
      newCounts[index] -= 1;
      setCounts(newCounts);
    }
  };

  const handleRemove = (index) => {
    const updatedCart = cart.filter((data, number) => number !== index);
    setCart(updatedCart);

    const updatedCounts = counts.filter((data, number) => number !== index);
    setCounts(updatedCounts);

    if (count > 0) setCount(count - 1);
  };

  return (
    <div className="pt-15 pb-25 flex items-center gap-x-4 gap-y-15 justify-center flex-wrap">
      {cart.length === 0 ? (
        <div className="gap-5 h-[70vh] w-full flex items-center justify-center">
          <ShoppingCart size={35} />
          <h1 className="text-3xl font-bold text-gray-600">
            Your Cart Is Empty
          </h1>
        </div>
      ) : (
        <div>
          <h1 className="text-center font-bold text-2xl">
            Your Selected Products:
          </h1>
          <div className="pt-15 pb-25 flex flex-col items-center gap-y-10">
            {cart.map((data, index) => (
              <div
                key={index}
                className="w-[90%] md:w-[80%] lg:w-[90%] cursor-pointer border hover:scale-[1.02] duration-200 flex flex-col lg:flex-row items-center lg:items-stretch rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full lg:w-[30%] h-80 aspect-square rounded-xl lg:h-80 object-cover"
                />
                <div className="flex flex-col px-5 py-4 w-full">
                  <h3 className="font-bold text-xl py-2">{data.title}</h3>
                  <p className="text-sm text-gray-500">
                    {data.decription?.slice(0, 200) + "..."}
                  </p>
                  <h3 className="mt-4 font-bold text-xl">
                    Price: <span className="text-green-500">{data.price}</span>
                  </h3>

                  <div className="flex items-center gap-4 mt-3">
                    <button
                      onClick={() => handleDecrement(index)}
                      className="px-3 py-1 border rounded"
                    >
                      -
                    </button>
                    <span className="px-3">{counts[index]}</span>
                    <button
                      onClick={() => handleIncrement(index)}
                      className="px-3 py-1 border rounded"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex gap-4 mt-5 flex-wrap">
                    <button className="rounded-xl px-4 py-2 font-bold cursor-pointer hover:bg-amber-500 duration-200 bg-yellow-300">
                      Buy Now
                    </button>
                    <button
                      onClick={() => handleRemove(index)}
                      className="rounded-xl px-5 py-2 font-bold cursor-pointer hover:bg-amber-500 duration-200 bg-yellow-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
