import React from "react";
import Introduction from "./Introduction";
import Terminal from "./Terminal";

const HeroGrid = () => {
  return (
    <div className="mx-auto mt-48 grid grid-cols-2 gap-36">
      <Terminal />
      <Introduction />
    </div>
  );
};

export default HeroGrid;
