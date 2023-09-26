// import React from 'react'
import { Link } from "react-router-dom"

const MainBtn = ({ children, to, type, target }) => {
  return (

    <>
      {type !== "ext" ? (
        <Link to={to} className='hover:bg-bwhite bg-white bg-opacity-80 hover:bg-opacity-100 border-2 rounded-lg p-3 hover:border-bwhite relative z-10 font-[500] text-[1.5rem] font-serif'>{children}</Link>) :
        (
          <a target={target} className='hover:bg-bwhite border-2 rounded-lg p-3 hover:border-bwhite font-[500] text-[1.5rem] font-serif' href={to}>{children}</a>
        )}
    </>
  )
}

export default MainBtn