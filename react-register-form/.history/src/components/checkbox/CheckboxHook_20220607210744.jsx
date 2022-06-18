import React from "react";
import { useController } from "react-hook-form";

const CheckboxHook = ({ control, text, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <label className="cursor-pointer custom-checkbox">
      <input
        type="checkbox"
        {...field}
        value={props.value}
        className="hidden"
        id={props.name}
      />
      <div className="flex items-center gap-x-3">
        <div className="bg-white rounded-md flex items-center justify-center w-full h-full custom-checkbox-square">
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.8389 1.69455L5.81811 13.7154L0.161255 8.05851L1.57125 6.64851L5.81811 10.8854L16.4289 0.284546L17.8389 1.69455Z"
              fill="white"
            />
          </svg>
        </div>
        <label htmlFor={props.name} className="text-sm cursor-pointer">
          {text}
        </label>
      </div>
    </label>
  );
};

export default CheckboxHook;
