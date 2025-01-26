import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col md:flex-row items-center justify-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      ></div>

      <div className="relative bg-white p-2 md:p-6 rounded-lg shadow-lg w-10/12 md:w-5/12">
        {children}
      </div>
    </div>
  );
};

export default Modal;
