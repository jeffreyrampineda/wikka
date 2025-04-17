import React from 'react';

function Button({
  children,
  disabled,
  wClass,
  onClick,
}: {
  children: React.ReactNode;
  disabled?: boolean;
  wClass: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button
      className={`btn ${wClass} hover-grow-2 ${
        disabled ? 'btn--disabled' : ''
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
