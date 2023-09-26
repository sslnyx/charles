import React from "react";

const Input = ({ label, type, name, errors, required }) => {
  //   console.log(errors);
  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between items-start md:items-center mb-5 relative">
      <label className="uppercase mr-5 mb-2 md:mb-0 whitespace-nowrap">
        {label}
      </label>
      <input
        required={required}
        name={name}
        className="w-full md:max-w-[400px] px-5 py-2 border-2 border-brown rounded-[50px] bg-transparent"
        type={type}
      />

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

export default Input;
