import React from "react";
import { SocialIcon } from "react-social-icons";
import Text from "../Text";
import Title from "../Title";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header-all">
        <Title>Hi, I’m Reka Madarasz</Title>
        <Text>Fullstack developer student</Text>
      </div>
      <div className="social">
        <SocialIcon
          url="https://github.com/mreka91"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/rekamadarasz/"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          url="https://www.instagram.com/reka_madarasz/"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
};

export default Header;
