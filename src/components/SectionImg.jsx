// import React from 'react'

const SectionImg = ({ img, imgPost, left, top }) => {
    return (
        <div className="relative">
            <div className={`absolute h-full w-full top-0 imagePost-${imgPost}`}>
                <div data-aos-delay="250" data-aos={`fade-${imgPost === "left" ? "right" : "left"}`} className="absolute z-0 rounded-[40px] h-[90%] w-full border-2" style={{ left, top }}></div>
                <img data-aos={`fade-${imgPost === "left" ? "right" : "left"}`} className="absolute z-10 rounded-[40px]" src={img} />
            </div>

            <img className="invisible my-5 " src={img} />
        </div>
    )
}

export default SectionImg