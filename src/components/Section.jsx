// import React from 'react'
import SectionImg from "./SectionImg"
import SectionContent from "./SectionContent"
import Circle from "./Circle"

const Section = ({ rows, sectionLink, bgPost, circles, title }) => {


    return (
        <section className="page-section">
            {title ?
                <h2 className="relative z-10 my-10 text-center mb-[100px]">{title}</h2>
                : ""
            }
            <div className={`container relative`}>
                <div className={`absolute bg-none md:bg-bwhite bgPost-${bgPost}`}></div>
                {rows?.map(({ cols }, r) => (
                    <div key={r} className="relative flex flex-row flex-wrap -mx-3">
                        {cols.map(({ img, imgPost, left, top, title, content }, c) => (
                            <div key={c} className="basis-full md:basis-1/2 flex items-center justify-center px-3">
                                {img ?
                                    (<SectionImg {...{ img, imgPost, left, top }} />) : (<SectionContent {...{ c, title, content, sectionLink }} />)
                                }
                            </div>

                        ))}
                    </div>
                ))}

                {circles?.map(({ className }) => (
                    <Circle key={className} className={className} />
                ))}

            </div>


        </section>
    )
}

export default Section