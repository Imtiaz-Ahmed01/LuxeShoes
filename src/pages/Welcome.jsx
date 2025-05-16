import React, { useState, useEffect } from "react";
import welcome from "../assets/videos/welcome.mp4";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  let navigate = useNavigate();
  let isLogin = localStorage.getItem("isLogin");

  useEffect(() => {
    if (isLogin === "true") {
      navigate("/");
    }
  }, [isLogin, navigate]);
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        src={welcome}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div
        className={`h-full w-full flex-col gap-5 flex justify-center items-center absolute top-0 left-0 z-10 transition-transform duration-1000 ease-out ${
          isVisible ? "translate-y-0 " : "-translate-y-full "
        }`}
      >
        <h1 className="font-bold text-5xl text-white">
          Welcome To The Shoes World
        </h1>
        <p className="font-semibold text-2xl text-white">
          Before Getting Started, Please
        </p>
        <div className="flex gap-10 items-center">
          <button
            onClick={() => navigate("/register")}
            className="bg-black duration-200 hover:bg-transparent p-4 rounded-2xl font-bold text-white"
          >
            Sign-Up
          </button>
          <span className="text-2xl font-bold">OR</span>
          <button
            onClick={() => navigate("/login")}
            className="hover:bg-black duration-200 p-4 rounded-2xl font-bold text-white bg-transparent"
          >
            Log-In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
