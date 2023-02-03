import React from "react";
import "./Tooltip.css";

function Tooltip({ children, message }) {
  return (
    <span className="w-tooltip">
      {children}
      {message && <span className="tooltipmessage">{message}</span>}
    </span>
  );
}

export default Tooltip;
