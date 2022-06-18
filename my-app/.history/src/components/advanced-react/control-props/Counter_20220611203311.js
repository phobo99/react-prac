import React from "react";
import Decrement from "./Decrement";

const Counter = () => {
  return (
    <div className="flex w-full max-w-[200px] mx-auto my-5 border border-gray-300 rounded-lg">
      <Decrement></Decrement>
      <span className="flex-1 flex items-center justify-center text-3xl font-medium">
        0
      </span>
      <button className="increment p-5 text-lg flex items-center justify-center cursor-pointer bg-slate-200">
        +
      </button>
    </div>
  );
};

export default Counter;
