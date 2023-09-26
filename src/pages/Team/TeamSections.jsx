import React from 'react'

const TeamSections = ({ title, logo, description }) => {
    return (
        <div className={`py-[25px] md:py-[80px] max-w-[973px] team-section md:px-[50px]`}>

            <h3 className='mb-10 lg:mb-14 text-center'>{title}</h3>

            <div className='flex flex-wrap -mx-3 team-section-wrapper'>
                <div className="basis-full lg:basis-1/2 mb-10 lg:mb-0 px-3 flex flex-row lg:flex-col justify-center items-center">

                    {logo.map((img, i) => (
                        <img key={i} className='max-h-[400px] px-3 w-[150px] mb-0 md:mb-10 last:mb-0 lg:w-auto max-w-[300px]' src={`/img/full/team/${img}`} />
                    ))}

                </div>
                <div className="basis-full lg:basis-1/2 px-3 flex items-center h-full">
                    <div dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
            </div>
        </div>

    )
}

export default TeamSections