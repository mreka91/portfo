import React from "react";
import { SocialIcon } from "react-social-icons";
import Text from "../Text";
import Title from "../Title";
import "./header.css";

const Header = () => {
  return (
    <div>
      <div className="header-all">
        <Title>Hi, I’m Réka Madarász!</Title>
        <Text>
          Fullstack developer student living and studying in Göteborg, SE.
        </Text>{" "}
        <Text>
          In my spare time I volunteer as a Project Manager at
          <a href="https://www.pinkprogramming.se/"> Pink Programming </a>
          to increase the number of female programmers!
          <span role="img" aria-label="sparkle">
            ✨
          </span>
        </Text>{" "}
        <Text>
          I also brew beer with my husband. Fancy a Glitter Pumpkin Spice Ale or
          a Poppyseed Lemon Sour?
        </Text>
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
