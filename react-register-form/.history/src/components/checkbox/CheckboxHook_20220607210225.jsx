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
        <div className="bg-white rounded-md w-full h-full custom-checkbox-square">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8389 6.69455L8.81811 18.7154L3.16125 13.0585L4.57125 11.6485L8.81811 15.8854L19.4289 5.28455L20.8389 6.69455Z"
              fill="#7D6AFF"
            />
          </svg>
        </div>
        <label htmlFor={props.name} className="text-sm">
          {text}
        </label>
      </div>
    </label>
  );
};

export default CheckboxHook;
