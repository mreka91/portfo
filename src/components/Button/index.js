import React from "react";
import "./button.css";

const Button = (props) => {
  return (
    <button onClick={props.handleClick} className="btn">
      {props.children}
    </button>
  );
};
export default Button;
