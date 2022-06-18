import React from "react";
import ReactDOM from "react-dom";
// createPortal

const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-5 modal">
      <div className="absolute inset-0 bg-black bg-opacity-25 overlay "></div>
      <div className="modal-content bg-white relative z-10 p-10 rounded-lg w-full max-w-[482px]">
        <span className="absolute top-0 right-0">Close</span>
        <h2 className="mb-5 text-4xl font-medium text-center text-black">
          Welcome Back!
        </h2>
        <div className="flex flex-col gap-3 mb-5">
          <label htmlFor="email" className="text-sm cursor-pointer">
            Email address
          </label>
          <input
            type="text"
            className="w-full text-sm leading-none bg-[#e7ecf3] rounded-lg p-4"
            placeholder="Enter your email"
          />
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Modal;
