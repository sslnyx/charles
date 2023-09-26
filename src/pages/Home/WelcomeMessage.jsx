import React from 'react'

const WelcomeMessage = ({ welcomText }) => {
    return (
        <div ref={welcomText} className='absolute opacity-0 top-0 left-0 h-full w-full flex justify-center items-center bg-gray bg-opacity-50 pointer-events-none px-[22px]'>
            <h2 className='pt-[80px] md:pt-[0] max-w-[991px] text-[1.5rem] leading-[2rem] md:leading-[5rem] md:text-[5rem] 2xl:max-w-[80vw] font-[500] 2xl:leading-[5vw] 2xl:text-[5vw] text-bwhite text-center'>Inspired by the tradition
                in Cedar Cottage</h2>
        </div>
    )
}

export default WelcomeMessage