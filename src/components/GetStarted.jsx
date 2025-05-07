import React from "react";
import { motion } from "framer-motion";

const GetStarted = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <h3 className="text-4xl md:text-6xl text-center font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
        How to get started
      </h3>
      
      <div className="mt-20 grid md:grid-cols-2 gap-16 items-start w-full max-w-5xl mx-auto">
        {/* Left Block */}
        <div className="relative flex flex-col items-center text-center">
          <div className="flex items-center justify-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Already have a tool in place?
            </h3>
          </div>
          
          <div className="mt-8 space-y-6">
            <p className="text-lg md:text-xl text-gray-600">
              Set up June with our easy to add snippet. It takes{" "}
              <span className="font-semibold text-blue-600">
                less than 30 minutes
              </span>{" "}
              and we give your engineer everything they need to get started
              quickly and{" "}
              <a href="#" className="text-blue-600 font-semibold">
                securely
              </a>
              .
            </p>
            
            <p className="text-lg text-gray-600">
              We can provide both a SOC 2 report and can help you make sure you
              are GDPR compliant.
            </p>
          </div>

          {/* Positioned Images */}
          <div className="absolute" style={{ top: "-80px", left: "-90px", zIndex: 1 }}>
            <motion.img
              src="https://www.june.so/home/get-started/avatar2.svg"
              alt="Left Image 1"
              className="w-24 h-24 object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </div>
          
          <div className="absolute" style={{ top: "0px", right: "-690px", zIndex: 1 }}>
            <motion.img
              src="https://www.june.so/home/get-started/gdpr.svg"
              alt="Left Image 2"
              className="w-24 h-24 object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.5
              }}
            />
          </div>
        </div>

        {/* Right Block */}
        <div className="relative flex flex-col items-center text-center">
          <div className="flex items-center justify-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Is June your first product analytics tool?
            </h3>
          </div>
          
          <div className="mt-8 space-y-6">
            <p className="text-lg md:text-xl text-gray-600">
              Set up June with our easy to add snippet. It takes{" "}
              <span className="font-semibold text-blue-600">
                less than 30 minutes
              </span>{" "}
              and we give your engineer everything they need to get started
              quickly and{" "}
              <a href="#" className="text-blue-600 font-semibold">
                securely
              </a>
              .
            </p>
            
            <p className="text-lg text-gray-600">
              We can provide both a SOC 2 report and can help you make sure you
              are GDPR compliant.
            </p>
          </div>

          {/* Positioned Images */}
          <div className="absolute" style={{ top: "160px", left: "-720px", zIndex: 1 }}>
            <motion.img
              src="https://www.june.so/home/get-started/avatar1.svg"
              alt="Right Image 1"
              className="w-24 h-24 object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.3
              }}
            />
          </div>
          
          <div className="absolute" style={{ top: "100%", right: "-100px", zIndex: 1 }}>
            <motion.img
              src="https://www.june.so/home/get-started/avatar3.svg"
              alt="Right Image 2"
              className="w-24 h-24 object-contain"
              animate={{ y: [0, -10, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                delay: 0.7
              }}
            />
          </div>
        </div>
      </div>

      {/* Snippet Section */}
      <div className="relative mt-24 text-center">
        {/* Rotated code block */}
        <motion.div 
          className="inline-block transform -rotate-6 bg-[#1B1536] px-10 py-8 rounded-xl text-white text-2xl md:text-4xl font-bold shadow-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-purple-400">analytics.track</span>(
          <span className="text-blue-300">'Customer Inbox'</span>)
        </motion.div>

        {/* Arrow below */}
        <div className="mt-6 flex justify-center">
          <img
            src="https://www.june.so/home/get-started/easy-to-add.svg"
            alt="arrow"
          />
        </div>
      </div>

      {/* Logos and Testimonial */}
      <div className="mt-24 text-center ">
      <h3 className="text-3xl md:text-5xl text-center font-bold text-gray-900 leading-tight max-w-4xl mx-auto m-25">
          Loved by fast growing companies
        </h3>

        {/* Top Row Logos */}
<div className="flex justify-center gap-24 mb-6">
  <img
    src="https://www.june.so/logos-q3/attio.svg"
    alt="Top 1"
    className="w-24 h-24 object-contain hover:scale-120"
  />
  <img
    src="https://www.june.so/logos-q3/causal.svg"
    alt="Top 2"
    className="w-24 h-24 object-contain hover:scale-120"
  />
  <img
    src="https://www.june.so/logos-q3/humaans.svg"
    alt="Top 3"
    className="w-24 h-24 object-contain hover:scale-120"
  />
</div>

{/* Circle Layout */}
<div className="flex justify-center items-center gap-6">
  {/* Left Vertical Images */}
  <div className="hidden md:flex flex-col justify-between gap-4">
    <img
      src="https://www.june.so/logos-q3/knack.svg"
      alt="Left 1"
      className="w-24 h-24 object-contain hover:scale-120"
    />
    <img
      src="https://www.june.so/logos-q3/reveal.svg"
      alt="Left 2"
      className="w-24 h-24 object-contain hover:scale-120"
    />
    <img
      src="https://www.june.so/logos-q3/railway.svg"
      alt="Left 3"
      className="w-24 h-24 object-contain hover:scale-120"
    />
  </div>

  {/* Center Testimonial */}
  <div className="flex-[2] bg-[#1B1536] text-white py-25 rounded-xl max-w-2xl w-full px-6">
    <p className="text-xl font-semibold text-center">
      "We're faster at identifying upsell opportunities thanks to June"
    </p>
    <div className="mt-4 flex items-center justify-center space-x-3">
      <img
        src="https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/65a6ed2908524b56ad76fb9c2e5e5c7a.jpeg"
        alt="Aditya"
        className="w-10 h-10 rounded-full"
      />
      <span className="text-sm text-gray-300">
        Made By Aditya Bhardwaj
      </span>
    </div>
  </div>

  {/* Right Vertical Images */}
  <div className="hidden md:flex flex-col justify-between gap-4">
    <img
      src="https://www.june.so/logos-q3/rootly.svg"
      alt="Right 1"
      className="w-24 h-24 object-contain hover:scale-120"
    />
    <img
      src="https://www.june.so/logos-q3/snackmagic.svg"
      alt="Right 2"
      className="w-24 h-24 object-contain hover:scale-120"
    />
    <img
      src="https://www.june.so/logos-q3/tacto.svg"
      alt="Right 3"
      className="w-24 h-24 object-contain hover:scale-120"
    />
  </div>
</div>

{/* Bottom Row Logos */}
<div className="flex justify-center gap-24 mt-6">
  <img
    src="https://www.june.so/logos-q3/vessl.svg"
    alt="Bottom 1"
    className="w-24 h-24 object-contain hover:scale-120"
  />
  <img
    src="https://www.june.so/logos-q3/xano.svg"
    alt="Bottom 2"
    className="w-24 h-24 object-contain hover:scale-120"
  />
  <img
    src="https://www.june.so/logos-q3/attio.svg"
    alt="Bottom 3"
    className="w-24 h-24 object-contain hover:scale-120"
  />
</div>

      </div>
    </div>
  );
};

export default GetStarted;