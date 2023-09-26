import footerLogo from "/img/register/footer-logo.svg";
import { ReactSVG } from "react-svg";
import dots18 from "/img/register/dots-18.svg";
import dots18v from "/img/register/dots-18-v.svg";

const RegisterFooter = () => {
  return (
    <footer className="bg-gray relative">
      <ReactSVG
        beforeInjection={(svg) => {
          svg.setAttribute(
            "class",
            "absolute right-0 h-auto top-[30px] w-[80px] md:w-[170px]  fill-awhite"
          );
        }}
        src={dots18}
      ></ReactSVG>

      <ReactSVG
        beforeInjection={(svg) => {
          svg.setAttribute(
            "class",
            "absolute hidden xl:block left-[22px] bottom-0 w-[80px] md:w-[73px] h-auto fill-awhite"
          );
        }}
        src={dots18v}
      ></ReactSVG>

      <div className="container py-10 flex flex-col items-center">
        <img
          src={footerLogo}
          className="h-[100px] w-[300px] flex items-center justify-center mb-10"
        />

        <p className="max-w-[1024px] leading-tight text-white text-xs text-center">
          This is not an offering for sale. Any such offering can only be made
          with a disclosure statement. Prices are subject to change without
          notice. The developer reserves the right to make changes and
          modifications to the information contained herein without prior
          notice. Artist’s renderings and maps are representations only and may
          not be accurate. E.&O.E.
        </p>
      </div>
    </footer>
  );
};

export default RegisterFooter;
