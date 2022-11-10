import React from "react";
import terminal from "../assets/terminal.svg";
import blur from "../assets/ellipse.png";

const Terminal = () => {
  return (
    <>
      <img src={terminal} className="relative z-10 w-full select-none" />
      <img
        src={blur}
        className="z-100 absolute inset-x-0 bottom-40 hidden h-auto select-none"
      />
    </>
  );
};

export default Terminal;
