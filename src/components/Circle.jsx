// import React from 'react'
import { ReactSVG } from "react-svg"

const Circle = ({ className, position }) => {
    // console.log(position)
    return (
        <ReactSVG afterInjection={(error, svg) => {
            className ? svg.setAttribute('class', `absolute pointer-events-none hidden md:block ${className}`) : ""
            position ? svg.setAttribute("style", "") : ""
        }} src="/img/full/icons/circle-full.svg" />
    )
}

export default Circle