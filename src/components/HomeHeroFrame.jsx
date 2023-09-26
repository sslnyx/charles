import { useRef, useEffect, useState } from "react";
import circle3 from "/img/register/circle-full.svg";
import { ReactSVG } from "react-svg";
import HomeMainMenu from "../pages/Home/HomeMainMenu";
import { useOutletContext } from "react-router-dom";
import { Transition } from "react-transition-group";
import HomeRect from "../pages/Home/HomeRect";
import Vivus from "vivus";

const HomeHeroFrame = ({ children, homeHeroFrame, in: inProp, frameRef }) => {
    const box = useRef();
    const regSVG = useRef();
    const [boxDimensions, setBoxDimensions] = useState()
    const { activeMenu, welcome, setWelcome } = useOutletContext();

    const boxHandler = () => {
        const w = box.current.offsetWidth
        const h = box.current.offsetHeight
        setBoxDimensions({ w, h })
    }


    useEffect(() => {
        // console.log(window.innerWidth)
        boxHandler()

        window.addEventListener("resize", boxHandler)

        return () => {
            window.removeEventListener("resize", boxHandler)
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (regSVG.current) {
                new Vivus('my-svg', {
                    duration: 200,
                    animTimingFunction: Vivus.EASE
                });

                setTimeout(() => {
                    setWelcome(false)
                }, 2500);
            }
        }, 0);
    }, [])


    return (
        <div className="h-full w-full absolute top-0 overflow-hidden">

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

            <div ref={frameRef} className={`absolute opacity-0 top-0 left-0 w-full h-full border-gray border-opacity-50 transition-all duration-500 ${!activeMenu? "border-[10px] md:border-[55px] border-t-[90px] md:border-t-[130px]":"border-[10px] md:border-[25px] border-t-[90px] md:border-t-[25px]"}`}></div>

            <div className="absolute top-0 left-0 h-full w-full border-[10px] md:border-[25px] border-t-[90px] border-transparent">
                <div ref={box} className={`h-full w-full border-[5px] border-opacity-50 ${!welcome ? "border-opacity-100 border-awhite" : "border-transparent"}`}>

                    <HomeRect className={"absolute top-0 left-0"} boxDimensions={boxDimensions} regSVG={regSVG} setWelcome={setWelcome} welcome={welcome} />

                    <div ref={homeHeroFrame} className="h-full w-full border-[10px] md:border-[25px] md:border-t-[100px] border-transparent transition-all duration-500">
                        {
                            activeMenu ?
                                (<HomeMainMenu />)
                                : ""
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}

export default HomeHeroFrame