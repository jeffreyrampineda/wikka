import React from "react";
import "./Modal.css";

function Modal({ children, isModalActive, close }) {
  return (
    <div
      class="modal"
      style={{ display: isModalActive ? "block" : "none" }}
      onClick={() => {
        // close modal when outside of modal is clicked
        close();
      }}
    >
      <div
        class="modal-content"
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
