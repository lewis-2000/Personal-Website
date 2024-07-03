// Modal.tsx
import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md ">
      <div className="bg-white  rounded-lg shadow-lg p-6 relative">
        <button
          className="relative top-0 right-0 m-2 text-gray-500"
          onClick={onClose}
        >
          <i className="fas fa-window-close"></i> Close
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
