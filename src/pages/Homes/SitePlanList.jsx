// import React from 'react'

import { useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom"
import AccordionTitle from "../../components/AccordionTitle"
import AccordionContent from "../../components/AccordionContent"
import AccordionWrap from "../../components/AccordionWrap"
// import { Accordion } from "flowbite-react"

const SitePlanList = ({ planhandler, listRef, btnRef }) => {
    const [plansList, setPlansList] = useState()
    const { plans } = useOutletContext()

    const getPdf = (id) => {
        // console.log(plans)
        const plan = plans.find(el => el.id === id)
        return plan.pdf
    }

    useEffect(() => {
        const map = {}
        for (const i in plans) {
            !map[plans[i].type] ? map[plans[i].type] = [] : "";
            map[plans[i].type].push(plans[i])
        }
        setPlansList(map);
    }, [])

    return (
        <>
            {plansList ? (
                <AccordionWrap accordionId="sitePlan">
                    {Object.entries(plansList).reverse().map(([key, value], i) => (
                        <div key={key}>
                            <AccordionTitle id={i} btnRef={btnRef}>
                                {key}
                            </AccordionTitle>
                            <AccordionContent id={i} accordionId="sitePlan">
                                <ul className="mt-4">
                                    {value.map(({ title, id }, i) => (
                                        <li key={id} ref={el => listRef.current[id] = el} listid={id} onClick={planhandler} className="text-center py-3 transition-all duration-500 cursor-pointer border-2 border-white hover:border-bwhite">
                                            <div className="max-w-[200px] flex justify-between mx-auto pointer-events-none items-center">
                                                {title}
                                                <a className="pointer-events-auto px-1 hover:underline" target="_blank" href={getPdf(id)}>
                                                    View
                                                </a>
                                            </div>

                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </div>
                    ))
                    }
                </AccordionWrap>
            ) : ""
            }
        </>
    )
}

export default SitePlanList