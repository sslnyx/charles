// import React from 'react'

const AccordionContent = ({ id, children, accordionId }) => {
    return (
        <div id={`flush-collapse-${id}`} className={`accordion-collapse border-0 collapse ${(id === 0 && accordionId !== "mapList") ? "show" : ""}`}
            aria-labelledby={`flush-heading-${id}`} data-bs-parent={`#${accordionId}`}>
            <div className="accordion-body">
                {children}
            </div>
        </div>
    )
}

export default AccordionContent