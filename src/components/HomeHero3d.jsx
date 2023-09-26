// import HeroFrame2 from "../../components/HeroFrame2";
import { useEffect, useRef, useState } from "react";
import siteLogo from "/img/register/logo.svg";
import headerImg from "/img/register/hero-small.jpeg";
import HomeHeroFrame from "./HomeHeroFrame";

import RegisterBtn from "./RegisterBtn";
import { ReactSVG } from "react-svg";
import HamburgerBtn from "./HamburgerBtn";
import WelcomeMessage from "../pages/Home/WelcomeMessage"
import { useOutletContext } from "react-router-dom";
import anime from "animejs";


const HomeHero = () => {
    const { mainMenuHandler, homeHeroFrame, activeSiteMenu, activeMenu } = useOutletContext()
    const heroImg = useRef();
    const frameRef = useRef();
    const welcomText = useRef();
    const topBar = useRef();


    useEffect(() => {

        const tl = anime.timeline(
            {
                targets: [welcomText.current],
                duration: 5000,
                easing: "easeOutExpo",
            }
        );

        tl.add({
            opacity: [0, 1],
            duration: 2000,
        }).add({
            opacity: [1, 0],
            duration: 2000,
        })

        anime({
            targets: [heroImg.current],
            opacity: [0, "100%"],
            duration: 5000,
            easing: "easeOutExpo",
            delay: 0
        })

        anime({
            targets: [frameRef.current, topBar.current],
            opacity: [0, "100%"],
            duration: 100,
            easing: "linear",
            delay: 2000
        })
        
    }, [])



    return (
        <div className="relative max-h-screen h-[550px] md:h-screen md:min-h-[600px] bg-gray">
            <div ref={topBar} className="w-full opacity-0 relative bg-gray pt-[22px] md:pt-[45px] flex flex-row px-[22px] md:px-[50px] lg:px-[150px] items-center justify-between">
                <ReactSVG
                    beforeInjection={(svg) => {
                        svg.setAttribute(
                            "class",
                            "w-[150px] md:w-[220px] mb-0 md:mr-10 max-w-full h-full relative z-10 fill-awhite"
                        );
                    }}
                    src={siteLogo}
                />

                <div className="flex">
                    <HamburgerBtn {...{ mainMenuHandler, activeMenu }} />
                    <RegisterBtn />
                </div>

            </div>

            <img ref={heroImg} className="absolute top-0 left-0 opacity-0 w-full h-full object-cover object-[75%_60%]" src="/img/register/hero-small.jpeg" srcSet="/img/register/hero-small.jpeg 1080w, /img/register/hero.jpeg 2000w" />

            <WelcomeMessage welcomText={welcomText} />

            <HomeHeroFrame frameRef={frameRef} homeHeroFrame={homeHeroFrame} />

        </div>
    )
}

export default HomeHero