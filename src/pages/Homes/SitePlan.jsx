// import React from 'react'
import { useRef, useState, useEffect } from "react"
import { useOutletContext } from "react-router-dom";
import SitePlanList from "./SitePlanList"
import SitePlanSVG from "./SitePlanSVG"
import MainBtn from "../../components/MainBtn";

const SitePlan = () => {

    const listRef = useRef({});
    const btnRef = useRef({});
    const sitePlanRef = useRef({});

    const { plans } = useOutletContext()

    const [selectedPlan, setSelectedPlan] = useState("plan_e");


    const planHandler = (ev) => {
        if (ev.target.getAttribute("listid")) {
            setSelectedPlan(ev.target.getAttribute("listid"))
        } else {
            const evPlan = plans.find(({ id }) => id === ev.target.parentNode.id)

            window.open(evPlan.pdf, "_blank")

            setSelectedPlan(ev.target.parentNode.id)
            ev.target.parentNode.id === "plan_e" &&
                Object.values(btnRef.current[1].classList).includes("collapsed") ? (
                btnRef.current[1].click()
            ) : Object.values(btnRef.current[0].classList).includes("collapsed") ? (
                btnRef.current[0].click()
            ) : ""
        }
    }

    useEffect(() => {
        setTimeout(() => {
            for (const planId in listRef.current) {
                listRef.current[planId]?.classList.remove("activeList")
                sitePlanRef.current[planId]?.classList.remove("activePlan")
            }
            listRef.current[selectedPlan]?.classList.add("activeList")
            sitePlanRef.current[selectedPlan]?.classList.add("activePlan")
        }, 0);
    }, [selectedPlan])


    return (
        <section id="site-plan" className="mb-[50px] md:mb-[100px]">
            <h2 className='text-center text-2xl md:text-4xl mb-10'>Floorplans</h2>

            <div className="container p-0 mb-10 lg:p-[22px] max-w-[1024px] 2xl:max-w-[1280px]">
                <div className="flex flex-row flex-wrap -mx-3">
                    <div className="basis-full lg:basis-5/12 px-[2.125rem] mb-10 lg:px-3">
                        <SitePlanList selectedPlan={selectedPlan} planhandler={planHandler} listRef={listRef} btnRef={btnRef} />
                    </div>

                    <div className='basis-full lg:basis-7/12 px-3'>

                        <div className="relative">
                            <img src="/img/full/homes/siteplan/SItePlan_Base.jpeg" />

                            <SitePlanSVG selectedPlan={selectedPlan} sitePlanRef={sitePlanRef} planhandler={planHandler} className="absolute top-[14.8%] left-[10.35%] w-[79.4%] h-auto" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <MainBtn type="ext" target="_blank" to="/pdfs/Full_Set_Floorplan.pdf">
                    Download Floor Plans
                </MainBtn>
            </div>


        </section>
    )
}

export default SitePlan