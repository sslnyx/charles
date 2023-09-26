// import React from 'react'

import { useRef, useEffect } from "react"

const HomeRect = ({ className, boxDimensions, regSVG, welcome }) => {
    // useEffect(() => {
    //     console.log(welcome)
    // }, [welcome])
    return (
        <>
            {boxDimensions && welcome ?
                <svg id="my-svg" ref={regSVG} className={className} width={boxDimensions?.w} height={boxDimensions?.h} viewBox={`0 0 ${boxDimensions?.w} ${boxDimensions?.h}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2.5" y="2.5" width={boxDimensions?.w - 5} height={boxDimensions?.h - 5} stroke="#EFE4D7" strokeWidth="5">
                    </rect>
                    {/* <path  stroke="#EFE4D7" strokeWidth="5" d="M2.5 2.5 L1151.5 2.5 L1151.5 725.5 L2.5 725.5 Z"></path> */}
                </svg> : ""
            }
        </>

    )
}

export default HomeRect