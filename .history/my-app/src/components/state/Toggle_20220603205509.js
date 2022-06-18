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
  // const array = useState(false);
  // console.log(array);
  // console.log(array[0]);
  // console.log(array[1]);
  // const arr = [1, 2];
  // console.log(arr[0], arr[1]);
  // const [a, b] = [1, 2];
  // console.log(a, b);
  // initialize value: boolean(true,false), number(1,2,3,4), string("pho"), undefined, null, [1,2,3,4], {title: "Frontend developer"}
  const [on, setOn] = useState(false);
  console.log(on);
  // console.log(on, setOn);
  // [title, setTitle]
  // [isActive, setIsActive]
  // <div className="toggle" onclick="toggle"></div>; -> onClick
  return <div className="toggle"></div>;
}
export default Toggle;
