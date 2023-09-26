import HeroFrame2 from "../../components/HeroFrame2";
import siteLogo from "/img/register/logo.svg";
import SiteHeader from "../../components/SiteHeader";
import headerImg from "/img/register/hero.jpeg";

import { HashLink } from "react-router-hash-link";
import { ReactSVG } from "react-svg";
import Parallax from "react-rellax";

const RegisterHero = () => {
  return (
    <div className="relative max-h-screen h-screen min-h-[600px]">
      <div className="w-full relative bg-gray pt-[45px] flex flex-wrap flex-col md:flex-row px-[22px] md:px-[150px] items-center justify-center md:justify-between">
        <ReactSVG
          beforeInjection={(svg) => {
            svg.setAttribute(
              "class",
              "w-[220px] mb-5 md:mb-0 md:mr-10 max-w-full h-full relative z-10 fill-awhite"
            );
          }}
          src={siteLogo}
        />


        <HashLink smooth to="#register" className="relative z-10">
          <div className="text-brown text-center border-[3px] rounded-[17px] px-5 py-2 text-xl md:text-2xl font-[500] text-awhite font-serif">
            REGISTER
          </div>
        </HashLink>
      </div>

      {/* <div className="absolute h-full lg:h-auto w-full lg:w-auto lg:h-auto lg:bottom-0 right-auto lg:right-[50%] flex justify-inherit lg:justify-center items-center">
        <div className="hidden lg:block w-[550px] xl:w-[700px] min-h-[450px] h-[40vh] bg-awhite opacity-50 rounded-[150px] bottom-0 left-0"></div>

        <Parallax
          speed={-1}
          className="absolute fill-white bottom-[55%] lg:bottom-auto left-[10%] lg:left-auto w-[250px] md:w-[500px]"
        >
          <ReactSVG
            beforeInjection={(svg) => {
              svg.setAttribute("class", "w-full h-auto");
            }}
            src={siteLogo}
          />
        </Parallax>
      </div> */}

      <HeroFrame2>
        <img className="w-full h-full object-cover object-[75%_60%]" src={headerImg} />
      </HeroFrame2>

      {/* <SiteHeader /> */}
    </div>
  );
};

export default RegisterHero;
