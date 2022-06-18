import React from "react";
import ReactDOM from "react-dom";
// createPortal

const Modal = () => {
  return ReactDOM.createPortal(
    <div className="modal"></div>,
    document.querySelector("body")
  );
};

export default Modal;
