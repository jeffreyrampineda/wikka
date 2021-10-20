import React from 'react';
import './Button.css';

function Button({ children, disabled, color, onClick }) {
    return (
        <button
            className={`btn ${color} ${disabled ? 'btn-disabled' : ''}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
