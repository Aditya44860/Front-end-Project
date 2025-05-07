import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import GetStarted from "./components/GetStarted";
import LandingSection from "./components/LandingSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <GetStarted />
      <LandingSection />
    </div>
  );
};

export default App;