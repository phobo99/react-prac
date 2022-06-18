import React from "react";
import { useController } from "react-hook-form";

const CheckboxHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <label className="cursor-pointer custom-checkbox">
      <input type="checkbox" {...field} {...props} className="hidden" />
      <div className="bg-white rounded-full w-full h-full">
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.8389 1.69455L5.81811 13.7154L0.161255 8.05851L1.57125 6.64851L5.81811 10.8854L16.4289 0.284546L17.8389 1.69455Z"
            fill="#7D6AFF"
          />
        </svg>
      </div>
    </label>
  );
};

export default CheckboxHook;
