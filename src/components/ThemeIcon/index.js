import React from "react";
import moon from "./../../assets/images/moon.svg";
import "./themeIcon.css";

const ThemeIcon = (props) => {
  return (
    <div className="theme-icon" onClick={props.handleClick}>
      <img src={moon} alt="moon" />
    </div>
  );
};

export default ThemeIcon;
