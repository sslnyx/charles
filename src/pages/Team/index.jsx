// import React from 'react'
import { useOutletContext } from "react-router-dom"
import TeamSections from "./TeamSections"
import Circle from "../../components/Circle";
import { Helmet } from "react-helmet";

const Team = () => {

    const { pages: { team } } = useOutletContext();

    return (
        <section className="page-team">
            <Helmet title="Teams" />
            <div className="container">
                <div className="relative bg-bwhite px-[22px] py-[50px] flex flex-col items-center">
                    <h1 className="text-center">Meet the Team</h1>
                    {team.map((teamData, i) => (
                        <TeamSections key={i} {...teamData} />
                    ))}

                    <div>
                        {Array(5).fill(null).map((el, i) => (
                            <Circle key={i} className={`team-c${i}`} />
                        )
                        )}

                    </div>
                </div>
            </div>



        </section>
    )
}

export default Team