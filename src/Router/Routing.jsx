import React from "react";
import { navItem } from "../assets/config";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Services from "../pages/Services";
import About from "../Ai Made/About";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Private from "../components/Private";
import Welcome from "../pages/Welcome";
import PageNotFound from "../pages/PageNotFound";
import Description from "../pages/Description";
import FAQs from "../Ai Made/FAQs";
import Contact from "../Ai Made/Contact";
import ShippingPolicy from "../Ai Made/ShippingPolicy";
import ReturnPolicy from "../Ai Made/ReturnPolicy";
import PrivacyPolicy from "../Ai Made/PrivacyPolicy";
import { TermsAndConditions } from "../Ai Made/TermsAndConditions";
import Cart from "../pages/Cart";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<Private />}>
            <Route path={navItem[0].path} element={<Home />} />
            <Route path={navItem[1].path} element={<Products />} />
            <Route path="/products">
              <Route path={"description/:id"} element={<Description />} />
              <Route path={"Cart"} element={<Cart />} />
            </Route>
            <Route path={navItem[2].path} element={<Services />} />
            <Route path="/services">
              <Route path={"shipping-policy"} element={<ShippingPolicy />} />
              <Route path={"return-policy"} element={<ReturnPolicy />} />
              <Route path={"privacy-policy"} element={<PrivacyPolicy />} />
              <Route
                path={"terms-and-conditions"}
                element={<TermsAndConditions />}
              />
              <Route path={"FAQs"} element={<FAQs />} />
            </Route>
            <Route path={navItem[3].path} element={<About />} />
            <Route path={"/ContactUs"} element={<Contact />} />
            <Route path={"*"} element={<PageNotFound />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Routing;
