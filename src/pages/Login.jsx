import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navItem, loginField } from "../assets/config";
import toast from "react-hot-toast";

const Register = () => {
  let [user, setUser] = useState();
  let navigate = useNavigate();
  let isLogin = localStorage.getItem("isLogin");

  useEffect(() => {
    if (isLogin === "true") {
      navigate("/");
    }
  }, [isLogin, navigate]);

  function formHandler(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function submitHandler(e) {
    e.preventDefault();
    if (!user.email.trim() || !user.password.trim()) {
      toast.error("Please Fill All Required Fields");
    } else if (localStorage.getItem("Email") !== user.email) {
      toast.error("No Account Found With This Email");
    } else if (
      localStorage.getItem("Password") !== user.password ||
      localStorage.getItem("Email") !== user.email
    ) {
      toast.error("Incorrect Combinations Of Email/Password");
    } else {
      localStorage.setItem("isLogin", "true");
      navigate("/");
      toast.success(`Welcome ${localStorage.getItem("Name")}`);
    }
  }

  return (
    <div className="h-[84vh] flex justify-center items-center">
      <div className="px-22 py-14 w-66 shadow-2xl rounded-2xl justify-center items-center gap-5 border flex flex-col">
        <h1 className="font-bold text-2xl pb-5">Login</h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          {loginField.map((valve, index) => {
            return (
              <input
                key={index}
                name={valve.name}
                onChange={formHandler}
                className="outline-none border p-2 rounded-2xl border-gray-400 text-[16px]"
                type={valve.type}
                placeholder={valve.placeholder}
              />
            );
          })}
          <Link to="/register">
            <p className="text-[13px] text-blue-800 hover:underline">
              Don't Have An Account?
            </p>
          </Link>
          <Link
            to={"/forgotPassword"}
            className="text-[12px] text-violet-800 text-center hover:underline"
          >
            Forgot Password?
          </Link>
          <button
            type="submit"
            className="bg-blue-400 text-white mt-4 p-4 font-bold hover:bg-blue-500 cursor-pointer duration-300"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
