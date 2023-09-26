import React from "react";

const Radio = ({ label, name, errors }) => {
  const options = ["YES", "NO"];
  return (
    <div className="radioBox flex flex-col md:flex-row items-start md:items-center justify-between mb-5 last:mb-0 relative">
      <span className="uppercase">{label}</span>

      <div className="flex items-center">
        {options?.map((option) => (
          <label
            key={option}
            className="form-check-label text-black mr-10 last:mr-0 flex items-center"
          >
            <span className="order-2">{option}</span>

            <input
              required
              className="form-check-input appearance-none rounded-full text-brown h-4 w-4 border-2 focus:ring-1 focus:ring-brown bg-transparent checked:bg-brown checked:border-brown focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name={name}
              value={option}
              id={name}
            />
          </label>
        ))}
      </div>

      {errors ? (
        <small className="absolute -bottom-[18px] text-red-500">
          {errors[name]}
        </small>
      ) : (
        ""
      )}
    </div>
  );
};

export default Radio;
