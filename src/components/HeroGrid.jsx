import React from "react";
import Introduction from "./Introduction";
import Terminal from "./Terminal";

const HeroGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-10">
      <Terminal />
      <Introduction />
    </div>
  );
};

export default HeroGrid;
