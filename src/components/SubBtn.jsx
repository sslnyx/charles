// import React from 'react'
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link"

const SubBtn = ({ to, children, type }) => {
    return (

        <h3 className="font-bold md:text-2xl text-right flex justify-center md:justify-end">
            {type === "hash" && to ?
                <HashLink to={to} smooth><span>{">> "}</span>
                    {children}</HashLink>
                : type !== "ext" ?
                    <Link to={to} className="hover:underline text-center md:text-right py-[50px] block">
                        <span>{">> "}</span>
                        {children}
                    </Link>
                    :

                    <a className="hover:underline text-center md:text-right py-[50px] block" href={to} target="_blank">
                        <span>{">> "}</span>
                        {children}
                    </a>
            }
        </h3>

    )
}

export default SubBtn