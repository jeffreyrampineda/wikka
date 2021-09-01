import React from 'react';
import './Button.css';

function Button({ children, disabled, onClick }) {
    return (
        <button
            className={`btn ${disabled ? 'btn-disabled' : ''}`}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;
