import React from 'react'

const AccordionWrap = ({ children, accordionId }) => {
    return (
        <div className="accordion accordion-flush" id={accordionId}>
            <div className="accordion-item border-t-0 border-l-0 border-r-0 border-none rounded-none border border-gray-200">
                {children}
            </div>
        </div>
    )
}

export default AccordionWrap