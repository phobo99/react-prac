import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    console.log("clicked");
  };
  return <div></div>;
};

export default Counter;
