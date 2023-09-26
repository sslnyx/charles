// import { useEffect } from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useOutletContext } from "react-router-dom"
import Circle from "./Circle"

const StackTextAndImage = (props) => {

    const { title, circles, paragraph, img } = props


    const { scrollPosition } = useOutletContext();

    return (
        <div className="relative">
            <div className="max-w-[800px] 2xl:max-w-[1024px] mx-auto px-[22px] py-[50px] md:py-[80px] bg-bwhite">
                <h1 className="text-center max-w-[630px] mx-auto mb-10">
                    {title}
                </h1>
                <div className="max-w-[730px] text-center mx-auto" dangerouslySetInnerHTML={{ __html: paragraph }} />
            </div>
            <LazyLoadImage scrollPosition={scrollPosition} src={img} className="w-full" alt="overview" width={1492} height={880} />

            {circles?.map(({ className, position }, i) => (
                <Circle key={i} className={className} position={position} />
            ))}
        </div>
    )
}

export default StackTextAndImage