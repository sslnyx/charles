import { useEffect, useState, useRef } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
// import RegisterFooter from "./pages/Register/RegisterFooter";
import { trackWindowScroll } from "react-lazy-load-image-component";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";
import { aosInit, setViewHeight, fetchApi } from "./lib/plugins"
import { Helmet } from "react-helmet";
import "aos/dist/aos.css";
import "hamburgers/dist/hamburgers.min.css";


function App({scrollPosition}) {

  const { pathname, hash } = useLocation();
  const [data, setData] = useState(null);
  const [welcome, setWelcome] = useState(true);


  const [activeMenu, setActiveMenu] = useState(false)

  const [activeSiteMenu, setActiveSiteMenu] = useState(false)

  const getData = async () => {
    const res = await fetchApi("/staticData.json");
    setData(res)
  }

  const homeHeroFrame = useRef();

  const mainMenuHandler = () => {
    setActiveMenu(!activeMenu)
  }

  const allStates = {
    activeSiteMenu,
    setActiveSiteMenu,
    mainMenuHandler, homeHeroFrame, activeMenu, setActiveMenu,
    welcome, setWelcome, scrollPosition
  }
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    {
      activeMenu ?
        homeHeroFrame?.current?.classList.add("activeMenu") :
        homeHeroFrame?.current?.classList.remove("activeMenu")
    }
  }, [activeMenu, pathname])

  useEffect(() => {
    console.log("pageload")

    getData();
    aosInit();
    setViewHeight();
    window.addEventListener("resize", () => {
      setViewHeight();
    });

    return () => {
      window.removeEventListener("resize", () => {
        setViewHeight();
      });
    };
  }, []);

  return (
    <>
    <Helmet titleTemplate="%s | THE CHARLES | 16 VANCOUVER ROW TOWNHOMES" defaultTitle="THE CHARLES | 16 VANCOUVER ROW TOWNHOMES" />
      {data ?
        (<div className={`min-h-screen flex flex-col`}>
          {pathname === "/" ? "" : <SiteHeader {...allStates} siteMenu={data.siteMenu} presentationCenter={data.presentationCenter} sales={data.sales} />}
          <main className="flex-1 flex flex-col">
            <Outlet context={{ ...data, ...allStates }} />
            {/* <RegisterFooter /> */}
          </main>
          <SiteFooter {...data} {...allStates} />
        </div>) : ""}
    </>
  );
}

export default trackWindowScroll(App);
