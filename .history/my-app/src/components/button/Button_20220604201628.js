import React from "react";
import "./Button.scss";
// styled-components
const Button = (props) => {
  return (
    <button className={`button ${props.className}`}>{props.children}</button>
  );
};

export default Button;
