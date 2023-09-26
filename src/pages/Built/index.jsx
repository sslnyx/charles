// import React from 'react'

import { useOutletContext } from "react-router-dom"
import SubBtn from "../../components/SubBtn"
import { Helmet } from "react-helmet";

const Built = () => {

    const { pages: { built: { fiveCornerstones, benifits } } } = useOutletContext();

    return (
        <>
            <Helmet title='Passive House Design' />

            <section className="pt-0">
                <div className="flex flex-col md:flex-row items-center relative">
                    <img className="w-full max-h-[700px] object-cover object-top" src="/img/full/built/family.jpeg" />

                    <div className="relative text-center md:absolute w-full bg-white py-[50px] bg-opacity-90">
                        <div className="container flex justify-center ">
                            <div className="max-w-[800px]">
                                <h1 className="mb-5">An Innovative Approach To Design</h1>
                                <p>
                                    Designed for our future and yours, the high-performance homes at The Charles are built to Passive House standards. Combining smart technology with innovative architectural design, Passive House standards maximize a home’s energy-efficiency, saving up to 90% in heating costs. The end result? Unparalleled comfort, healthier indoor environment, a low carbon footprint, and budget-friendly utility costs.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="flex flex-col">


                <section className="order-2 md:order-1">
                    <div className="container">
                        <h2 className="mb-10 text-2xl md:text-4xl text-center">The Five Cornerstones Of Passive House Design</h2>

                        <div className="flex flex-wrap justify-center -mx-3">

                            {fiveCornerstones.map((el, i) => (
                                <div key={i} className="basis basis-1/3 md:basis-1/5 px-3 flex justify-center">
                                    <div className="mb-5 w-full flex flex-col items-center">
                                        <img className="w-full max-w-[150px] mb-5 aspect-[5/3]" src={`/img/full/built/icons/${i + 1}.svg`} />

                                        <p className="ml-0 md:ml-12 text-xs max-w-[180px] text-center">{el}</p>
                                    </div>

                                </div>
                            ))}
                        </div>


                    </div>
                </section>

                <section className="pt-0 order-1 md:order-2">
                    <div className="relative h-[250px] md:h-[350px] ">
                        <img className="absolute w-full h-full object-cover" src="/img/full/built/trees.jpeg" alt="" />
                        <div className="relative flex flex-row h-full">
                            <div className="basis basis-1/2 hidden md:block"></div>
                            <div className="basis basis-full md:basis-1/2 bg-gray bg-opacity-60 text-white h-full flex justify-center items-center">
                                <h3>Passive Built</h3>
                            </div>
                        </div>
                    </div>
                </section>

            </div>


            <section>
                <div className="container">
                    <div className="flex flex-wrap md:flex-nowrap space-x-0 md:space-x-5">
                        <div className="basis-full md:basis-7/12 flex justify-center">
                            <h2 className="mb-5 text-2xl md:text-4xl text-center md:text-left">The Benefits Of<br></br> Passive House Design</h2>
                        </div>
                        <div className="basis-full md:basis-5/12">
                            <div>
                                <ul className="list-disc ml-4">
                                    {benifits.map((el, i) => (
                                        <li key={i}>
                                            {el}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">
                <SubBtn to="/our-team">Learn More About Our Team</SubBtn>
            </div>

        </>
    )
}

export default Built