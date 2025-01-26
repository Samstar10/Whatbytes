import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      ></div>

      <div className="relative bg-white p-6 rounded-lg shadow-lg w-5/12">
        {children}
      </div>
    </div>
  );
};

export default Modal;
