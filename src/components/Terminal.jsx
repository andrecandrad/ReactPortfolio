import React from "react";
import terminal from "../assets/terminal.svg";
import blur from "../assets/ellipse.png";
import { TerminalSvg, HexagonFill, DrawGreen, DrawBlue, Notepad } from "./Svgs";

const Terminal = () => {
  return (
    <>
      <div className="z-100 relative">
        <div>
          <TerminalSvg />
        </div>

        <div className="absolute -left-[7rem] bottom-[20rem] -z-50">
          <HexagonFill />
        </div>

        <div className="absolute -left-[35px] top-[275px] z-10">
          <DrawGreen />
        </div>

        <div className="absolute top-36 left-[656px] z-10">
          <DrawBlue />
        </div>

        <div className="absolute top-[380px] left-[620px] z-10">
          <Notepad />
        </div>

        <div className="absolute top-[170px] right-[30px] z-10 h-[500px] w-[500px] blur"></div>
      </div>
    </>
  );
};

export default Terminal;
