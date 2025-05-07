import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-sm">
      <div className="text-2xl font-bold text-gray-900">June</div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
        {[
          "Product",
          "Pricing",
          "Customers",
          "Content",
          "Change Log",
          "Login",
        ].map((item) => (
          <li key={item} className="px-7">
            <a
              href="#"
              className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gray-800 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="bg-black text-white px-4 py-2 rounded-md border-2 font-medium border-transparent hover:bg-white hover:text-black hover:border-black hover:border-2">
          Get started
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-gray-700 text-2xl">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;