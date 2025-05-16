import React, { useContext, useState } from "react";
import pro_1 from "../assets/images/pro-1.jpg";
import { ShoppingCart, Truck } from "lucide-react";
import { useParams } from "react-router-dom";
import { allProducts } from "../assets/config";
import { productProvider } from "../Context/ContextProvider";
import toast from "react-hot-toast";
const Description = () => {
  let [change, setChange] = useState(null);

  function changeBorder(e) {
    setChange(e.target.textContent);
  }

  let { id } = useParams();
  let [filterProducts] = allProducts.filter((item) => item.id == id);
  let { setCount, cart, setCart, count } = useContext(productProvider);
  let productExist = cart.find((item) => item.id === cart.id);
  if (productExist) {
    toast.error("This Product Already Exist In The Cart");
    return;
  }
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 px-8 py-10">
        <div className="w-auto lg:w-[55%]">
          <img
            className="aspect-square object-cover rounded-3xl w-full h-full"
            src={filterProducts.image}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl text-red-500 font-semibold">
            {filterProducts.style}
          </p>
          <h1 className="font-bold text-3xl">{filterProducts.title}</h1>
          <h3 className="text-2xl font-semibold mt-10">Sizes:</h3>
          <div className="flex gap-5 flex-wrap">
            <p
              onClick={changeBorder}
              className={`border-2 font-bold p-2 rounded-xl hover:bg-blue-200 active:border-blue-600 ${
                change === "SM" ? "border-blue-600 bg-blue-400 text-white" : ""
              }`}
            >
              SM
            </p>
            <p
              onClick={changeBorder}
              className={`border-2 font-bold p-2 rounded-xl hover:bg-blue-200 active:border-blue-600 ${
                change === "MD" ? "border-blue-600 bg-blue-400 text-white" : ""
              }`}
            >
              MD
            </p>
            <p
              onClick={changeBorder}
              className={`border-2 font-bold p-2 rounded-xl hover:bg-blue-200 active:border-blue-600 ${
                change === "LG" ? "border-blue-600 bg-blue-400 text-white" : ""
              }`}
            >
              LG
            </p>
            <p
              onClick={changeBorder}
              className={`border-2 font-bold p-2 rounded-xl hover:bg-blue-200 active:border-blue-600 ${
                change === "XL" ? "border-blue-600 bg-blue-400 text-white" : ""
              }`}
            >
              XL
            </p>
            <p
              onClick={changeBorder}
              className={`border-2 font-bold p-2 rounded-xl hover:bg-blue-200 active:border-blue-600 ${
                change === "XXL" ? "border-blue-600 bg-blue-400 text-white" : ""
              }`}
            >
              XXL
            </p>
          </div>
          <h2 className="font-bold text-2xl mt-20">
            Price:{" "}
            <span className="text-green-400">{filterProducts.price}</span>
          </h2>
          <p className="font-semibold text-sm">{filterProducts.extra}</p>
          <div className="flex gap-8 mt-20">
            <button
              onClick={() => {
                const productExist = cart.find(
                  (item) => item.id === filterProducts.id
                );
                if (productExist) {
                  toast.error("This Product Already Exists In The Cart");
                  return;
                }

                setCount(count + 1);
                setCart([...cart, filterProducts]);
              }}
              className="border p-4 duration-200 sm:px-10 lg:px-15 hover:bg-red-400 hover:text-white cursor-pointer rounded-2xl font-bold"
            >
              Add To Cart
            </button>
            <button className="border p-4 sm:px-15 lg:px-20 duration-200 bg-red-400 hover:bg-transparent hover:border hover:text-black text-white cursor-pointer rounded-2xl font-bold">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-5 py-10 px-8 ">
        <h2 className="text-3xl font-bold">Description :</h2>
        <p>{filterProducts.decription}</p>
        <h1 className="mt-10 font-bold text-3xl">Services :</h1>
        <div className=" flex flex-wrap gap-10 items-center justify-center py-5">
          <div className=" hover:rotate-2 hover:shadow-2xl hover:shadow-red-200 hover:scale-110 duration-200 cursor-pointer border bg-blue-500 text-white rounded-2xl gap-3 items-center flex px-3 h-20 w-60">
            <Truck className="size-15" />
            <p className="border-l-2 px-2 font-semibold">
              Deliver Within 7/15 Working Days
            </p>
          </div>
          <div className="border hover:rotate-2 hover:shadow-2xl hover:shadow-red-200 hover:scale-110 duration-200 cursor-pointer bg-blue-500 text-white rounded-2xl gap-3 items-center flex px-3 h-20 w-60">
            <p className="text-2xl">100%</p>
            <p className="border-l-2 px-2 font-semibold">
              7 Days Money Back Guarantee!
            </p>
          </div>
          <div className="border hover:rotate-2 hover:shadow-2xl hover:shadow-red-200 hover:scale-110 duration-200 cursor-pointer bg-blue-500 text-white rounded-2xl gap-3 items-center flex px-3 h-20 w-60">
            <ShoppingCart className="size-15" />
            <p className="border-l-2 px-2 font-semibold">
              1000+ Positive Reviews
            </p>
          </div>
          <div className="border hover:rotate-2 hover:shadow-2xl hover:shadow-red-200 hover:scale-110 duration-200 cursor-pointer bg-blue-500 text-white rounded-2xl gap-3 items-center flex px-3 h-20 w-60">
            <p className="text-2xl">100%</p>
            <p className="border-l-2 px-2 font-semibold">Made With Leather</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
