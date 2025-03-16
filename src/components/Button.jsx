import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, children, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 bg-blue-500 text-white rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
