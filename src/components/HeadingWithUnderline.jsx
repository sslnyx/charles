import React from "react";

const HeadingWithUnderline = ({ title, subTitle, indent, style, delay }) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay={`${delay * 50}`}
      className={`${indent ? indent : ""} mb-5 last:mb-0 relative`}
      style={style}
    >
      {/* <span className={`inline-block text-xl md:text-3xl mr-5 font-black font-serif`}>
        {title}
      </span> */}
      <span className="text-md md:text-xl inline-block">{title} {subTitle}</span>
      <div className="absolute h-[4px] w-[600px] bg-wheat"></div>
    </div>
  );
};

export default HeadingWithUnderline;
