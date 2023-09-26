// import React from 'react'

const AccordionTitle = ({ children, id, btnRef, mapHandler, accordionId }) => {
    return (
        <>
            {btnRef ? (
                <h2 className="accordion-header mb-0" id={`flush-heading-${id}`}>
                    <button ref={(el) => btnRef.current[id] = el} onClick={mapHandler} className={`accordion-button relative flex items-center w-full py-4 text-base md:text-2xl font-bold text-left bg-transparent border-0 !rounded-none transition focus:outline-none border-b-2 border-wheat !shadow-none ${id !== 0 || accordionId === "mapList" ? "collapsed" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${id}`}
                        aria-expanded="false" aria-controls={`flush-collapse-${id}`}>
                        {children}
                    </button>
                </h2>) : ""}
        </>
    )
}

export default AccordionTitle