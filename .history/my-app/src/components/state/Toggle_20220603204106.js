import React, { useState } from "react";
// stateless functional component: component nhung khong su dung state
// function Toggle() {
//   return <div className="toggle"></div>;
// }
// // stateful functional component: component co su dung state
// function Toggle2() {
//   // const [count, setCount] = useState();
//   return <div className="toggle"></div>;
// }
function Toggle() {
  // 1.Enabling state: useState(initialize value)
  // 2.Initialize state: useState(false)
  // 3.Reading state:
  // 4.Update state
  const array = useState(false);
  console.log(array);
  return <div className="toggle"></div>;
}
export default Toggle;
