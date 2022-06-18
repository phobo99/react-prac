import React from "react";
import useHover from "../hooks/useHover";

const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  return (
    <div>
      <TooltipContent>{children}</TooltipContent>
      <span className="font-semibold" ref={nodeRef}>
        {text}
      </span>
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
