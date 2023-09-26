import { useEffect } from "react";
import siteLogo from "/img/register/logo.svg";
import { ReactSVG } from "react-svg";
import { Link, useOutletContext } from "react-router-dom";
import HamburgerBtn from "./HamburgerBtn";
import RegisterBtn from "./RegisterBtn";
import SiteMainMenu from "./SiteMainMenu";
const SiteHeader = ({ setActiveSiteMenu, activeSiteMenu, siteMenu, presentationCenter, sales }) => {

  const siteMenuHandler = () => {
    setActiveSiteMenu(!activeSiteMenu)
  }

  const closeMainMenu = () => {
    setActiveSiteMenu(false)
  }


  const menuData = {
    sales,
    presentationCenter,
    siteMenu,
    setActiveSiteMenu
  }

  return (
    <>
      <div className="mt-[88px] md:mt-[110.47px]"></div>
      <nav className="fixed z-[9999] top-0 left-0 w-full bg-gray bg-opacity-80">

        <div className="container py-5 flex justify-between items-center 2xl:max-w-[1024px] 3xl:max-w-[1536px]">

          <Link to="/" onClick={closeMainMenu}>
            <ReactSVG beforeInjection={(svg) => {
              svg.setAttribute(
                "class",
                "w-[150px] md:w-[220px] mb-0 md:mr-10 max-w-full h-full relative z-10 fill-awhite"
              );
            }} src={siteLogo} />
          </Link>

          <div className="flex">
            <HamburgerBtn siteMenuHandler={siteMenuHandler} activeSiteMenu={activeSiteMenu} />
            <RegisterBtn closeMainMenu={closeMainMenu}/>
          </div>


          <div className={`fixed h-screen w-full pointer-events-none top-0 left-0 transition-all duration-500 ${activeSiteMenu ? "activeSiteMenu" : ""}`}>
            {activeSiteMenu ?
              <SiteMainMenu {...menuData} /> : ""
            }
          </div>

        </div>
      </nav>
    </>

  );
};

export default SiteHeader;
