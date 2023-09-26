import { useEffect, useRef } from 'react'

import { useOutletContext, Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

import anime from 'animejs'

const HomeMainMenu = () => {
    // console.log(state)
    const menuItems = useRef([])

    const { siteMenu, setActiveMenu, presentationCenter, sales } = useOutletContext()

    // console.log(setActiveMenu)

    const menuHandler = () => {
        setActiveMenu(false)
    }

    useEffect(() => {
        // console.log(menuItems.current)
        anime({
            targets: menuItems.current,
            opacity: [0, 100],
            translateY: [50, 0],
            easing: "easeOutExpo",
            delay: anime.stagger(100) // increase delay by 100ms for each elements.
        })
    }, [])

    return (
        <div className="flex justify-center items-center h-full">

            <ul className="text-center w-full px-[22px]">
                {siteMenu.map(({ title, slug }, i) => (
                    <li ref={(el) => menuItems.current[i] = el} key={slug} className="text-bwhite hover:bg-bwhite hover:text-gray">
                        {
                            <Link to={slug}>
                                <h3 onClick={menuHandler} className="py-3">
                                    {title}
                                </h3>
                            </Link>
                        }
                    </li>
                ))}

                <li className='mt-5 text-bwhite' ref={(el) => menuItems.current[16] = el}>
                    <div>
                        <h6>Presentation Center: </h6>
                        <a href={presentationCenter.mapUrl}>
                            {presentationCenter.address}
                        </a>
                    </div>
                    <div>
                        <span></span>
                        {presentationCenter.note}
                    </div>
                    <div>
                        <a href={`tel:${sales.tel}`}>{sales.tel}</a>{" | "}
                        <a href={`mailto:${sales.email}`}>{sales.email}</a>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default HomeMainMenu