import React from "react";

const HeadingWLine = ({ children, className }) => {
  return (
    <div className={`relative inline-block mb-5`}>
      <h2 className={`flex justify-center ${className}`}>
        <div className="z-10 relative">{children}</div>
        <div className="h-line absolute top-[35%] h-[40%] bg-wheat -left-[20px]"></div>
      </h2>
    </div>
  );
};

export default HeadingWLine;
