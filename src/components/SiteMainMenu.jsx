import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import anime from 'animejs'

const SiteMainMenu = ({ activeSiteMenu, siteMenu, setActiveSiteMenu, presentationCenter, sales }) => {
    // const mainBody = useRef();

    const [loaded, setLoaded] = useState(false)

    const menuList = useRef([]);

    useEffect(() => {
        anime({
            targets: menuList.current,
            opacity: [0, 100],
            translateY: [50, 0],
            easing: "easeOutExpo",
            delay: anime.stagger(100) // increase delay by 100ms for each elements.
        })
        setLoaded(true);
    }, [])


    return (
        <div className='container text-bwhite flex justify-center pointer-events-auto'>
            <img className={`absolute top-0 object-cover left-0 w-full h-full transition-all delay-100 duration-1000 ${loaded ? "opacity-1" : "opacity-0"}`} src="/img/register/hero.jpeg" />
            <div className='absolute h-full w-full top-0 left-0 bg-gray bg-opacity-50'></div>
            <div className={`absolute top-0 left-0 w-full h-full border-[10px] md:border-[25px] border-t-[90px] md:border-t-[110px] border-transparent transition-all duration-700 ${loaded ? "opacity-1" : "opacity-0"}`}>
                <div className='border-4 border-bwhite w-full h-full flex items-center'>

                    <ul className='text-center w-full'>

                        {siteMenu.map(({ title, slug }, i) => (
                            <li ref={(el) => menuList.current[i] = el} key={slug} onClick={() => setActiveSiteMenu(false)}>
                                <Link to={slug}>
                                    <h3 className='py-3 hover:bg-awhite hover:text-gray w-full'>{title}</h3>
                                </Link>
                            </li>
                        ))}
                        <li className='mt-5' ref={(el) => menuList.current[16] = el}>
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
                {/* <div className='absolute left-0 top-0 h-1 w-full xl:w-[5%] bg-bwhite'></div> */}
                {/* <div className='absolute right-0 top-0 h-1 w-0 xl:w-[5%] bg-bwhite'></div> */}


            </div>



        </div>
    )
}

export default SiteMainMenu