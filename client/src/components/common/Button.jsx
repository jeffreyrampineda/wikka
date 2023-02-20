import React from "react";
import "./Button.css";

function Button({ children, disabled, wClass, onClick }) {
  return (
    <button
      className={`btn ${wClass} hover-grow-2 ${disabled ? "btn--disabled" : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
