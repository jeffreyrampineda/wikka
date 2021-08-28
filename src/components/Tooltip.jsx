import React from 'react';
import './Tooltip.css';

function Tooltip({ children, message }) {
    return (
        <span className="tooltip">
            {children}
            <span className="tooltipmessage">{message}</span>
        </span>
    );
}

export default Tooltip;
