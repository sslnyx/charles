// import React from 'react'
// import PageFooterLink from "./PageFooterLink"
import SubBtn from "./SubBtn"

const SectionContent = ({ c, title, content, sectionLink }) => {
    return (
        <div className="p-0 py-[50px] md:p-[50px]">
            {title ? <h3 className="mb-10">{title}</h3>
                : ""}
            <p className="max-w-[407px] last:mb-0">{content}</p>

            {/* {sectionLink ? : ""} */}

            {c === 1 && sectionLink ? (
                <>
                    <div className="mb-10"></div>
                    <SubBtn type={sectionLink.type} to={sectionLink.to}>{sectionLink.children}</SubBtn>
                </>
            ) : ""}
        </div>
    )
}

export default SectionContent