import React from 'react';
import './Modal.css';

function Modal({
  children,
  isModalActive,
  onClose,
}: {
  children: React.ReactNode;
  isModalActive: boolean;
  onClose: () => void;
}) {
  return (
    <div
      className="modal"
      style={{ display: isModalActive ? 'block' : 'none' }}
      onClick={() => {
        // close modal when outside of modal is clicked
        onClose();
      }}
    >
      <div
        className="modal__content"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
