import React from "react";
import "./profile.css";

const Profile = (props) => {
  return (
    <div>
      <p className="popup-text">{props.popup}</p>
      <div className="image"></div>
    </div>
  );
};

export default Profile;
