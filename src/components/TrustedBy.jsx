import React from "react";
import { motion } from "framer-motion";

const TrustedBy = () => {
  return (
    <motion.section
      className="w-full bg-gray-50 py-12 px-6 text-center"
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
      <motion.h2
        className="text-lg font-semibold text-gray-500 mb-6"
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { y: 60, opacity: 0 },
          visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeInOut" },
          },
        }}
      >
        Trusted by the fastest growing SaaS companies
      </motion.h2>
      <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
        <img
          src="https://www.june.so/logos-q3/attio.svg"
          alt="Attio"
          className="h-8"
        />
        
        <img
          src="https://www.june.so/logos-q3/causal.svg"
          alt="Causal"
          className="h-8"
        />
        
        <img
          src="https://www.june.so/logos-q3/humaans.svg"
          alt="Humaans"
          className="h-6"
        />
        
        <img
          src="https://www.june.so/logos-q3/knack.svg"
          alt="Knack"
          className="h-8"
        />
        
        <img
          src="https://www.june.so/logos-q3/reveal.svg"
          alt="Reveal"
          className="h-6"
        />
        
        <img
          src="https://www.june.so/logos-q3/railway.svg"
          alt="Railway"
          className="h-8"
        />
        
        <img
          src="https://www.june.so/logos-q3/rootly.svg"
          alt="Rootly"
          className="h-6"
        />
        
        <img
          src="https://www.june.so/logos-q3/snackmagic.svg"
          alt="SnackMagic"
          className="h-8"
        />
        
        <img
          src="https://www.june.so/logos-q3/tacto.svg"
          alt="Stravito"
          className="h-6"
        />
        
        <img
          src="https://www.june.so/logos-q3/tacto.svg"
          alt="Tacto"
          className="h-6"
        />
        
        <img
          src="https://www.june.so/logos-q3/vessl.svg"
          alt="VesslAi"
          className="h-8"
        />
        
        <img
          src="https://www.june.so/logos-q3/xano.svg"
          alt="Xano"
          className="h-6"
        />
      </div>
    </motion.section>
  );
};

export default TrustedBy;