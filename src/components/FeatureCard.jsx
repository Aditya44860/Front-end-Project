import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ 
  bgColor, 
  textColor, 
  subtitle, 
  title, 
  description, 
  imageSrc,
  variants 
}) => {
  return (
    <motion.div 
      className={`m-10 w-90% ${bgColor} h-72 rounded-lg overflow-hidden flex flex-col md:flex-row p-6 text-white shadow-lg`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={variants}
    >
      <div className="flex-1">
        <p className={`text-sm mb-1 ${textColor}`}>{subtitle}</p>
        
        <h2 className={`${textColor} text-3xl font-bold mb-2`}>
          {title}
        </h2>
        
        <p className={`${textColor}`}>
          {description}
        </p>
      </div>
      
      <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0 h-full w-full md:w-64">
        <img
          src={imageSrc}
          alt="Card Image"
          className="h-full object-contain"
        />
      </div>
    </motion.div>
  );
};

export default FeatureCard;