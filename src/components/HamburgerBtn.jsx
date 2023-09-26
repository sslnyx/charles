// import { useEffect } from 'react'

const HamburgerBtn = ({ mainMenuHandler, siteMenuHandler, activeSiteMenu, activeMenu }) => {

    // useEffect(() => {
    //     console.log(activeSiteMenu, activeMenu)
    // }, [activeSiteMenu, activeMenu])

    return (
        <button className={`z-10 hamburger hamburger--squeeze px-3 md:px-5 py-2 flex items-center ${activeSiteMenu || activeMenu ? "is-active" : ""}`} onClick={mainMenuHandler ? mainMenuHandler : siteMenuHandler}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
            {/* <div className="h-[4px] w-[35px] bg-awhite mb-1 rounded-sm"></div>
            <div className="h-[4px] w-[35px] bg-awhite mb-1 rounded-sm"></div>
            <div className="h-[4px] w-[35px] bg-awhite mb-0 rounded-sm"></div> */}
        </button>
    )
}

export default HamburgerBtn