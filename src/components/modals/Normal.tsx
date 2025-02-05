import React from "react";

interface NormalModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const NormalModal = ({ isOpen, onClose, children }:NormalModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  );
};

export default NormalModal;