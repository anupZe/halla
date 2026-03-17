import React from "react";

const Button = ({ label, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled} data-testid="button">
      {label}
    </button>
  );
};

export default Button;