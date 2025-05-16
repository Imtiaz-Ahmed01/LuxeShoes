import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram, Youtube, Github } from "lucide-react";

const Footer = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") === "true");

  useEffect(() => {
    // Watch for localStorage changes from other components (login/logout)
    const interval = setInterval(() => {
      const loginStatus = localStorage.getItem("isLogin") === "true";
      setIsLogin(loginStatus);
    }, 500); // check every 500ms

    return () => clearInterval(interval); // cleanup
  }, []);

  if (!isLogin) return null;

  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-400 mb-2">Karachi, PK</p>
          <p className="text-sm text-gray-400 mb-2">Email: support@luxeshoes.com</p>
          <p className="text-sm text-gray-400 mb-2">Phone: +92 311 7908741</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/About" className="hover:text-white">About Us</Link></li>
            <li><Link to="/ContactUs" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/services/fAQS" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li><Link to="/services/shipping-policy" className="hover:text-white">Shipping Policy</Link></li>
            <li><Link to="/services/return-policy" className="hover:text-white">Return Policy</Link></li>
            <li><Link to="/services/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/services/terms-and-conditions" className="hover:text-white">Terms & Conditions Of Services</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <p className="text-sm text-gray-400 mb-2">Follow us on social media:</p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61569932690846" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-blue-600 p-2 rounded-full text-white">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.instagram.com/maybe_imtiazz/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-gradient-to-r from-pink-500 to-yellow-400 p-2 rounded-full text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.youtube.com/@imtiazjamali0" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-red-600 p-2 rounded-full text-white">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="https://github.com/Imtiaz-Ahmed01" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-gray-800 p-2 rounded-full text-white">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/imtiaz-ahmed-83431b202" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform bg-sky-500 p-2 rounded-full text-white">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 py-4 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} LuxeShoes. All rights reserved.</p>
        <p className="mt-1">Designed & Developed by Imtiaz Ahmed</p>
      </div>
    </footer>
  );
};

export default Footer;
