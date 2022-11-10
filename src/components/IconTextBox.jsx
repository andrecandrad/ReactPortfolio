import React from "react";
import { FaFire } from "react-icons/fa";

const IconTextBox = ({ text1, highlight, text2 }) => {
  return (
    <div className="mx-auto flex h-10 w-fit items-center rounded bg-neutral-300 px-6 py-6 font-PtSans text-xs text-gray-700 shadow-md sm:text-sm">
      <FaFire className="mr-1 text-purple-600" />
      <span className="font-medium">{text1}</span>
      <span className="mx-1 font-bold text-purple-600">{highlight}</span>
      <span className="font-medium">{text2}</span>
    </div>
  );
};

export default IconTextBox;
