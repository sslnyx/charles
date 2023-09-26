import waveTop from "/img/register/wheat-patter.svg";
import waveBottom from "/img/register/awhite-wave-b.svg";
import line from "/img/register/line.png";
import circle1 from "/img/register/circle-1.svg";
import circle2 from "/img/register/circle-2.svg";
import circle3 from "/img/register/circle-3.svg";
import circle4 from "/img/register/circle-4.svg";
import dots18 from "/img/register/dots-18.svg";
import dots9 from "/img/register/dots-9.svg";

import Parallax from "react-rellax";
import { ReactSVG } from "react-svg";

const HeroFrame = () => {
  return (
    <div className="h-full w-full absolute top-0 left-0 pointer-events-none">
      <div className="h-full w-full absolute top-0 left-0 overflow-hidden">
        <Parallax
          speed={-2}
          className="absolute -top-[650px] md:-top-[550px] -right-[280px]"
        >
          <ReactSVG
            beforeInjection={(svg) => {
              svg.setAttribute(
                "class",
                "fill-bwhite scale-[120%] max-w-[1000px] w-[1100px] h-auto"
              );
            }}
            src={waveTop}
          />
        </Parallax>

        <Parallax
          speed={-3}
          className="absolute -top-[600px] md:-top-[520px] -right-[300px]"
        >
          <ReactSVG
            beforeInjection={(svg) => {
              svg.setAttribute(
                "class",
                "fill-gray max-w-[1000px] w-[1100px] h-auto "
              );
            }}
            src={waveTop}
          />
        </Parallax>

        <ReactSVG
          beforeInjection={(svg) => {
            svg.setAttribute(
              "class",
              "fill-transparent stroke-[3px] stroke-gray absolute scale-[180%] max-w-[1000px] w-[1100px] h-auto -top-[800px] md:-top-[700px] -right-[400px]"
            );
          }}
          src={waveTop}
        />
        <Parallax
          speed={1}
          className="absolute -bottom-[680px] md:-bottom-[640px] left-[50px]"
        >
          <ReactSVG
            beforeInjection={(svg) => {
              svg.setAttribute(
                "class",
                "fill-bwhite w-[850px] scale-[120%] h-auto"
              );
            }}
            src={waveBottom}
          />
        </Parallax>

        <Parallax
          speed={1.5}
          className="absolute -bottom-[640px] md:-bottom-[600px]"
        >
          <ReactSVG
            beforeInjection={(svg) => {
              svg.setAttribute("class", "fill-gray w-[850px] h-auto");
            }}
            src={waveBottom}
          />
        </Parallax>

        <ReactSVG
          beforeInjection={(svg) => {
            svg.setAttribute(
              "class",
              "absolute top-[10%] left-0 w-[20%] max-w-[500px]  h-auto"
            );
          }}
          src={circle1}
        />
        <ReactSVG
          beforeInjection={(svg) => {
            svg.setAttribute(
              "class",
              "absolute left-0 top-0 w-[40%] max-w-[500px]  h-auto"
            );
          }}
          src={circle2}
        />
        <ReactSVG
          beforeInjection={(svg) => {
            svg.setAttribute(
              "class",
              "absolute top-[20%] right-0 w-[250px] md:w-[40%] max-w-[500px] h-auto"
            );
          }}
          src={circle3}
        />

        <ReactSVG
          beforeInjection={(svg) => {
            svg.setAttribute(
              "class",
              "absolute top-[10%] w-[130px] left-[45%] fill-gray hidden lg:block"
            );
          }}
          src={dots18}
        ></ReactSVG>

        <ReactSVG
          beforeInjection={(svg) => {
            svg.setAttribute(
              "class",
              "absolute bottom-[30px] w-[80px] md:w-[130px] h-auto left-[30px] fill-bwhite"
            );
          }}
          src={dots18}
        ></ReactSVG>

        <ReactSVG
          beforeInjection={(svg) => {
            svg.setAttribute(
              "class",
              "absolute top-10 left-10 w-[40px] md:w-[60px] h-auto left-[30px] fill-gray"
            );
          }}
          src={dots9}
        ></ReactSVG>
      </div>
      <img
        src={line}
        className="absolute max-w-[none] w-[1000px] 2xl:w-[60vw] 2xl:h-[300px] scale-[120%] -bottom-[220px] -left-[250px] md:-left-[80px]"
      />
    </div>
  );
};

export default HeroFrame;
