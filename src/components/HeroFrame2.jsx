// import headerImg from "/img/register/hero.jpg";
// import circle1 from "/img/register/circle-1.svg";
// import circle2 from "/img/register/circle-2.svg";
import circle3 from "/img/register/circle-full.svg";

import { ReactSVG } from "react-svg";

const HeroFrame2 = ({ children }) => {
  return (
    <div className="h-full w-full absolute top-0 overflow-hidden bg-gray">
      
      <div className="w-full h-full bottom-0 absolute">{children}</div>

      <ReactSVG
        beforeInjection={(svg) => {
          svg.setAttribute(
            "class",
            "absolute hidden md:block -bottom-[15%] w-[30%] -left-[10%] h-auto"
          );
        }}
        src={circle3}
      />

      <ReactSVG
        beforeInjection={(svg) => {
          svg.setAttribute(
            "class",
            "absolute hidden md:block top-[0%] right-[-12%] md:w-[40%] h-auto"
          );
        }}
        src={circle3}
      />

      <div className="absolute top-0 left-0 h-full w-full border-[10px] md:border-[25px] border-t-[200px] border-gray border-opacity-50">
        <div className="h-full w-full border-4 border-awhite">
          <div className="h-full w-full border-[10px] md:border-[25px] md:border-t-[100px] border-gray border-opacity-50"></div>
        </div>
      </div>

      
    </div>
  );
};

export default HeroFrame2;
