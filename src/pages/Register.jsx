import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navItem, registerField } from "../assets/config";
import toast from "react-hot-toast";

const Register = () => {
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
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
    
    if(user.email == localStorage.getItem("Email")){
      toast.error("An Account Is Already Registered With This Email.")
      return
    }
    if (
      !user.name.trim() ||
      !user.email.trim() ||
      !user.password.trim() ||
      !user.confirmPassword.trim()
    ) {
      toast.error("Please Fill All Required Fields");
    } else if (user.password.length < 6) {
      toast.error("Password must be at least 6 characters");
    } else if (user.password !== user.confirmPassword) {
      toast.error("Passwords Do Not Match");
    } else {
      localStorage.setItem("Name", user.name);
      localStorage.setItem("Email", user.email);
      localStorage.setItem("Password", user.password);
      localStorage.setItem("ConfirmPassword", user.confirmPassword);
      localStorage.setItem("isLogin", "true"); 
      navigate("/");
      toast.success(`Welcome ${user.name}`);
    }
  }

  return (
    <div className="h-[84vh] my-10 flex justify-center items-center">
      <div className="px-22 py-14 w-66 shadow-2xl rounded-2xl justify-center items-center gap-5 border flex flex-col">
        <h1 className="font-bold text-2xl pb-5">Register</h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          {registerField.map((valve, index) => {
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
          <Link to="/login">
            <p className="text-[14px] text-blue-800 hover:underline">
              Already A User?
            </p>
          </Link>
          <button
            type="submit"
            className="bg-blue-400 text-white mt-4 p-4 font-bold hover:bg-blue-500 cursor-pointer duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;