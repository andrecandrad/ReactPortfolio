import React from "react";
import HeroGrid from "./HeroGrid";
import IconTextBox from "./IconTextBox";

const Hero = () => {
  return (
    <div className="container mx-auto h-full pt-10">
      <IconTextBox
        text1="Há"
        highlight="265"
        text2="dias trabalhando com desenvolvimento"
      />
      <HeroGrid />
    </div>
  );
};

export default Hero;
