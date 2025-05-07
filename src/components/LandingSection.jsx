import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const LandingSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen flex flex-col justify-between">
      {/* Main Content */}
      <div className="p-8">
        {/* Top: Meeting card */}
        <motion.div 
          className="bg-[#6A5AE0] rounded-2xl overflow-hidden flex flex-col md:flex-row p-6 py-24 text-white shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-2">Let's meet for 30 mins</h2>
            <p className="text-white/90">
              We're here to help you provide an exceptional experience to your
              customers.
            </p>
            <motion.button 
              className="bg-white text-[#6A5AE0] mt-6 px-5 py-3 rounded-xl font-medium flex items-center transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 shadow-md w-max"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-3">Book a demo</span>
              <span className="bg-[#6A5AE0] text-white rounded-full p-2">
                <FaArrowRight className="text-sm" />
              </span>
            </motion.button>
          </div>

          <motion.div 
            className="mt-6 md:mt-0 md:ml-6 w-full md:w-80"
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <img
              src="https://www.june.so/footer/onboarding-cloud.svg"
              alt="Flight Ticket"
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Bottom: Updates + Articles */}
        <motion.div 
          className="bg-white mt-6 rounded-xl shadow border p-6 flex flex-col md:flex-row gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Product Updates */}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
              <span className="bg-blue-100 text-blue-500 p-1 rounded">📘</span>
              Latest product updates
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                SQL computed traits -{" "}
                <span className="text-gray-400">2 May</span>
              </li>
              <li>
                Custom Objects are now in Beta -{" "}
                <span className="text-gray-400">25 Apr</span>
              </li>
              <li>
                Get together and fix bugs -{" "}
                <span className="text-gray-400">18 Apr</span>
              </li>
            </ul>
          </div>

          {/* Articles */}
          <div className="flex-1">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2 mb-2">
              <span className="bg-purple-100 text-purple-500 p-1 rounded">
                📄
              </span>
              Latest articles
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                How to Align Your Customer Success Models With Real Customer
                Behavior - <span className="text-gray-400">30 Apr</span>
              </li>
              <li>
                Making Product Usage Count: How Behavioral Segmentation Boosts
                SaaS Retention and Expansion -{" "}
                <span className="text-gray-400">25 Apr</span>
              </li>
              <li>
                Churn Prediction Model: How to Use Customer Data to Spot Risk
                Before It's Too Late -{" "}
                <span className="text-gray-400">16 Apr</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Footer Navbar */}
      <footer className="text-center py-6 px-4 text-sm text-gray-700 flex flex-wrap justify-center gap-x-8 gap-y-4 border-t border-gray-200">
        <a href="#" className="hover:text-gray-900 transition-colors">Blog</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Docs</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Attio integration</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Security</a>
        <a href="#" className="hover:text-gray-900 transition-colors">HubSpot integration</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Benchmarks</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Salesforce integration</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
      </footer>
    </div>
  );
};

export default LandingSection;