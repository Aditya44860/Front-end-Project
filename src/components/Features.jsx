import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";

const Features = () => {
  // Animation variants
  const slideRight = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const slideLeft = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div>
      <h3 className="text-2xl md:text-4xl text-center font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
        Don't let a $50k churn catch you by surprise 
      </h3>
      
      <p className="mt-6 text-lg md:text-xl text-center text-gray-600 max-w-2xl mx-auto">
        Monitor your customers and find out who needs help 
      </p>
      
      <br />
      <br />
      
      <img src="https://www.june.so/_next/image?url=%2Fauto-generated-reports%2Fgenerated-table.png&w=3840&q=75" />
      
      <br />
      <br />
      <br />
      <br />
      
      <h3 className="text-2xl md:text-4xl text-center font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
        Improve your customer retention in 4 steps 
      </h3>
      
      <p className="mt-6 text-lg md:text-xl text-center text-gray-600 max-w-2xl mx-auto">
        Don't reinvent the wheel. 
      </p>
      
      <p className="mt-6 text-lg md:text-xl text-center text-gray-600 max-w-2xl mx-auto">
        Adopt proven retention strategies from the industry. 
      </p>
      
      <FeatureCard 
        bgColor="bg-green-200"
        textColor="text-green-700"
        subtitle="Analyse"
        title="Find what leads to happy customers"
        description="Use analytics to find out what makes customers stick around and retain"
        imageSrc="https://www.june.so/home/use-case/analytics.png"
        variants={slideRight}
      />
      
      <FeatureCard 
        bgColor="bg-rose-200"
        textColor="text-red-900"
        subtitle="Compute"
        title="Define a customer health score"
        description="Start measuring the health of your customers based on their activity and engagement"
        imageSrc="https://www.june.so/home/use-case/analytics.png"
        variants={slideLeft}
      />
      
      <FeatureCard 
        bgColor="bg-blue-200"
        textColor="text-blue-900"
        subtitle="Monitor"
        title="Identify at-risk customers"
        description="Get alerted when customers show signs of disengagement or potential churn"
        imageSrc="https://www.june.so/home/use-case/analytics.png"
        variants={slideRight}
      />
      
      <FeatureCard 
        bgColor="bg-purple-200"
        textColor="text-purple-900"
        subtitle="Engage"
        title="Take action before it's too late"
        description="Implement targeted interventions to re-engage customers and prevent churn"
        imageSrc="https://www.june.so/home/use-case/analytics.png"
        variants={slideLeft}
      />
    </div>
  );
};

export default Features;