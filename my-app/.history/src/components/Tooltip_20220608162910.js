import React from "react";

const Tooltip = ({ children, text }) => {
  return (
    <div className="flex">
      <p className="inline-block p-3 text-white bg-black rounded-xl">
        {children}
      </p>
      <span className="font-semibold">{text}</span>
    </div>
  );
};

export default Tooltip;
