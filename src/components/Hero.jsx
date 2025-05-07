import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <motion.section
      className="w-full px-6 pt-16 pb-24 bg-white text-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { y: 60, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.6, ease: "easeInOut" },
        },
      }}
    >
      <motion.h1
        className="text-4xl md:text-7xl font-black text-gray-900 leading-tight max-w-4xl mx-auto font-balloon drop-shadow-[1px_1px_0_#000]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { y: 60, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeInOut" },
          },
        }}
      >
        A dashboard for each of our Customers
      </motion.h1>

      <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
        Product analytics designed for Customer Success and Account
        Management.
      </p>

      <div className="mt-8 flex justify-center space-x-4">
        <button
          className="border-[#1c1650] text-[#1c1650] px-10 py-3 rounded-xl font-medium border-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#4C4037]"
        >
          Get started
        </button>
        <button
          className="bg-[#1c1650] text-white px-5 py-3 rounded-xl font-medium flex items-center space-x-3 border-2 border-[#1c1650] transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#4C4037]"
        >
          <span className="mr-4">Get a Demo</span>
          <span className="bg-white text-[#1c1650] rounded-full p-2">
            <FaArrowRight className="text-[1rem]" />
          </span>
        </button>
      </div>

      <motion.img
        src="https://www.june.so/_next/image?url=%2Fcompany-page%2Fhero-asset.png&w=3840&q=75"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { y: 60, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeInOut" },
          },
        }}
      />
    </motion.section>
  );
};

export default Hero;