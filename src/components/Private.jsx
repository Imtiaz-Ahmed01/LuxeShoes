import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const Private = () => {
  let isLogin = localStorage.getItem("isLogin");
  return <>{isLogin ? <Outlet /> : <Navigate to={"/welcome"} />}</>;
};

export default Private;
