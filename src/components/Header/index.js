import React from "react";
import { SocialIcon } from "react-social-icons";
import Text from "../Text";
import Title from "../Title";
import "./header.css";

const Header = (props) => {
  return (
    <div>
      <div className="header-all">
        <Title>Hi, I’m Reka Madarasz</Title>
        <Text>Fullstack developer student</Text>
      </div>
      <div className="social">
        <SocialIcon url="https://github.com/mreka91" />
        <SocialIcon url="https://www.linkedin.com/in/rekamadarasz/" />
        <SocialIcon url="https://www.instagram.com/reka_madarasz/" />
      </div>
    </div>
  );
};

export default Header;
