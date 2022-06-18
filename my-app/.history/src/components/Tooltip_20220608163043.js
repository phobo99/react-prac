import React from "react";

const Tooltip = ({ children, text }) => {
  return (
    <div>
      <TooltipContent>{children}</TooltipContent>
      <span className="font-semibold">{text}</span>
    </div>
  );
};
function TooltipContent({ children }) {
  return (
    <p className="inline-block p-3 text-white bg-black rounded-xl">
      {children}
    </p>
  );
}
export default Tooltip;
