import React from "react";
import { brandPartners, reviews, showCase } from "../assets/config";
import { Link } from "react-router-dom";

const Home = () => {
  
  return (
    <>
      <div className="min-h-[85vh] bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-extrabold text-indigo-700 drop-shadow-md">Welcome to LuxeShoes</h1>
        <p className="mt-6 text-lg text-gray-700 max-w-2xl">
          Hello <span className="font-bold text-indigo-500">{localStorage.getItem("Name") || "Guest"}</span>, your next perfect pair awaits you here. Crafted for comfort. Styled for impact.
        </p>
        <Link to="/products">
          <button className=" px-6 py-3 bg-pink-600 mt-10 hover:bg-pink-500 text-white rounded-full text-lg font-semibold transition duration-300">
            Shop All Products
          </button>
        </Link>
      </div>

      <div className="py-16 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-indigo-800 mb-12">Featured Styles</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {showCase.slice(0, 5).map((item, i) => (
            <div key={i} className="w-72 bg-white border rounded-3xl overflow-hidden shadow-xl hover:shadow-pink-200 hover:scale-105 duration-300">
              <img src={item.image} alt={item.title} className="w-full h-[260px] object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.decription.slice(0, 100)}...</p>
                <Link to={`/products/description/${item.id}`}>
                  <button className="mt-5 w-full py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 font-medium transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-20 bg-gradient-to-r from-blue-50 to-rose-50 px-6">
        <h2 className="text-3xl font-bold text-center text-rose-700 mb-14">What Our Customers Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-rose-100 border-l-4 border-rose-500 transition">
              <p className="italic text-gray-700 text-[15px]">"{r.text}"</p>
              <p className="text-right text-rose-600 font-semibold mt-4">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-12">Trusted By</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {brandPartners.map((brand, i) => (
            <div key={i} className="px-6 py-4 bg-indigo-50 text-indigo-700 font-bold text-lg rounded-xl shadow-md hover:scale-105 transition">
              {brand}
            </div>
          ))}
        </div>
      </div>

      <div className="py-20 px-6 bg-gradient-to-br from-yellow-100 to-orange-100">
        <h2 className="text-3xl font-bold text-center text-orange-700 mb-10">Why Shop With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-5 rounded-2xl shadow-xl text-center hover:shadow-yellow-200 transition">
            <h3 className="text-lg font-bold text-orange-500">Fast Shipping</h3>
            <p className="text-sm mt-2 text-gray-600">Get your shoes within 7–15 working days, wherever you are.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-xl text-center hover:shadow-yellow-200 transition">
            <h3 className="text-lg font-bold text-orange-500">7-Day Return Policy</h3>
            <p className="text-sm mt-2 text-gray-600">No questions asked. Full refund within a week if you’re not satisfied.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-xl text-center hover:shadow-yellow-200 transition">
            <h3 className="text-lg font-bold text-orange-500">Premium Materials</h3>
            <p className="text-sm mt-2 text-gray-600">Only high-quality leather, foam, and fabric go into our products.</p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-xl text-center hover:shadow-yellow-200 transition">
            <h3 className="text-lg font-bold text-orange-500">24/7 Support</h3>
            <p className="text-sm mt-2 text-gray-600">Our team is always here to help you by chat, email, or call.</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-14 bg-white">
        <Link to="/products">
          <button className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white rounded-full text-lg font-bold transition">
            Explore All Products
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
