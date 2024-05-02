import React from "react";
import Lottie from "lottie-react";

import cattoAnimation from "./pet.json"; 

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20 font-neucha">
      <h1 className="text-2xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Find your furry soulmate with
        <span className="bg-gradient-to-r from-red-800 to-purple-800 text-transparent bg-clip-text">
          {" "}
          Pawlytics
        </span>
      </h1>
      <p className="text-2xl m-4 text-center max-w-4xl">
        Bringing joy to both ends of the leash, one adoption at a time!
      </p>
      <div className="flex justify-center items-center h-screen">
        <Lottie animationData={cattoAnimation} />
      </div>
    </div>
  );
};

export default HeroSection;
