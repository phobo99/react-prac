import React from "react";
import { useController } from "react-hook-form";

const InputHook = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
  });
  return (
    <div>
      <input
        className="p-4 border border-gray-100 rounded-lg bg-white outline-none transition-all focus:border-blue-500"
        {...field}
        {...props}
      />
    </div>
  );
};

export default InputHook;
